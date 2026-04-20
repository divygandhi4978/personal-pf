import { NextResponse } from "next/server";
import YahooFinance from "yahoo-finance2";

/* -----------------------------
   INITIALIZE LIBRARY (MANDATORY)
----------------------------- */

const yahooFinance = new YahooFinance();



/* -----------------------------
   SAFE NUMBER EXTRACTION
----------------------------- */

function extract(value) {

  if (value === undefined || value === null)
    return null;

  if (typeof value === "object" && "raw" in value)
    return value.raw;

  return value;

}



/* -----------------------------
   MAIN ROUTE
----------------------------- */

export async function GET(request) {

  try {

    const { searchParams } =
      new URL(request.url);

    const ticker =
      searchParams.get("ticker");



    if (!ticker) {

      return NextResponse.json(
        { error: "Ticker required" },
        { status: 400 }
      );

    }



/* -----------------------------
   FORMAT SYMBOL
----------------------------- */

const symbol =
  ticker.includes(".")
    ? ticker.toUpperCase()
    : `${ticker.toUpperCase()}.NS`;



/* -----------------------------
   FETCH MODULES
----------------------------- */

const result =
  await yahooFinance.quoteSummary(
    symbol,
    {
      modules: [

        "price",
        "summaryDetail",
        "defaultKeyStatistics",
        "financialData"

      ]
    }
  );



if (!result) {

  return NextResponse.json(
    { error: "No data returned" },
    { status: 404 }
  );

}



/* -----------------------------
   EXTRACT DATA
----------------------------- */

const price =
  extract(
    result?.price
      ?.regularMarketPrice
  ) ||
  extract(
    result?.financialData
      ?.currentPrice
  );



const data = {

  price,

  pe:
    extract(
      result?.summaryDetail
        ?.trailingPE
    ),

  marketCap:
    extract(
      result?.summaryDetail
        ?.marketCap
    ),

  roe:
    extract(
      result?.financialData
        ?.returnOnEquity
    ),

  debtToEquity:
    extract(
      result?.financialData
        ?.debtToEquity
    ),

  beta:
    extract(
      result
        ?.defaultKeyStatistics
        ?.beta
    ),

  currency:
    result?.price
      ?.currency || "INR",

  symbol,

  lastUpdated:
    Date.now(),

};



/* -----------------------------
   VALIDATE PRICE
----------------------------- */

if (!data.price) {

  return NextResponse.json(
    { error: "Invalid ticker or no price" },
    { status: 404 }
  );

}



return NextResponse.json(data);

  }

  catch (error) {

    console.error(
      "Finance API Crash:",
      error.message
    );



/* HANDLE INVALID SYMBOL */

if (
  error.message.includes("404") ||
  error.message.includes("No data")
) {

  return NextResponse.json(
    { error: "Invalid ticker" },
    { status: 404 }
  );

}



return NextResponse.json(

  {
    error: "Finance fetch failed",
    details: error.message
  },

  { status: 500 }

);

  }

}
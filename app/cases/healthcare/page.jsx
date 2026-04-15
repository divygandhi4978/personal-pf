"use client"
import React, { useState } from "react";

const tabs = [
  "Sector Thesis",
  "Business Drivers",
  "Operating Economics",
  "Lifecycle Stages",
  "Capacity Expansion",
  "Risk Framework",
  "Valuation Logic",
  "Analyst Synthesis",
  "Glossary"
];



/* -----------------------------------
   MASTER TASK DATA
----------------------------------- */

const sectionTasks = {

  "Sector Thesis": [
    "Write sector definition: What qualifies as a hospital business in India",
    "Explain primary revenue sources: IPD vs OPD vs diagnostics",
    "Describe demand drivers: population growth, insurance penetration, urbanization",
    "Explain cost structure: fixed vs variable costs",
    "Describe capital intensity and long gestation nature",
    "Explain how scale improves profitability",
    "Write section on pricing power and brand trust",
    "Create summary cards: Demand Stability, Capital Intensity, Margin Potential"
  ],

  "Business Drivers": [
    "Define Occupancy Rate and its formula",
    "Explain ARPOB (Average Revenue Per Occupied Bed)",
    "Define ALOS (Average Length of Stay)",
    "Explain Payor Mix (Cash vs Insurance vs Government)",
    "Explain Case Mix (Simple vs Complex treatments)",
    "Write throughput explanation: beds → patients → revenue",
    "Create relationship diagram: Occupancy × ARPOB → Revenue",
    "Add summary table listing all key drivers"
  ],

  "Operating Economics": [
    "Write revenue formula based on occupancy and ARPOB",
    "Explain how occupancy impacts margin leverage",
    "Explain how ARPOB drives yield improvement",
    "Explain ALOS trade-off: efficiency vs revenue",
    "Define Revenue Per Bed concept",
    "Define EBITDA Per Bed metric",
    "Write section on operating leverage",
    "Create margin sensitivity example"
  ],

  "Lifecycle Stages": [
    "Define Gestation Phase (new hospital phase)",
    "Define Ramp-Up Phase (occupancy growth phase)",
    "Define Mature Phase (steady cash flow phase)",
    "Explain occupancy trend across lifecycle",
    "Explain margin trend across lifecycle",
    "Explain cash flow timing pattern",
    "Write lifecycle timeline explanation",
    "Create stage comparison summary"
  ],

  "Capacity Expansion": [
    "Explain Brownfield Expansion definition",
    "Explain Greenfield Expansion definition",
    "Write capital expenditure requirements",
    "Explain payback period logic",
    "Describe ramp-up timeline after expansion",
    "Explain utilization lag after new capacity",
    "Compare risk level: brownfield vs greenfield",
    "Create comparison table of expansion strategies"
  ],

  "Risk Framework": [
    "Define regulatory pricing risk",
    "Explain insurance reimbursement delays",
    "Describe doctor attrition risk",
    "Explain receivable cycle risk",
    "Describe underutilization risk",
    "Explain capex overrun risk",
    "Create risk severity matrix",
    "Write mitigation strategies per risk"
  ],

  "Valuation Logic": [
    "Explain EV/EBITDA multiple meaning",
    "Explain ROCE importance in capital-heavy sectors",
    "Define Asset Turnover metric",
    "Write logic of Revenue Per Bed valuation",
    "Write EBITDA Per Bed benchmarking method",
    "Build DCF model explanation (conceptual)",
    "Explain WACC vs ROCE spread logic",
    "Create valuation comparison example"
  ],

  "Analyst Synthesis": [
    "Write sector outlook summary",
    "Identify long-term growth drivers",
    "List major structural risks",
    "Highlight strongest business models",
    "Identify weak business structures",
    "Write industry bottleneck discussion",
    "Create investment-style summary note",
    "Write final thesis statement"
  ],

  "Glossary": [
    "Define Occupancy Rate",
    "Define ARPOB",
    "Define ALOS",
    "Define Payor Mix",
    "Define EBITDA",
    "Define ROCE",
    "Define Capex",
    "Define Asset Turnover"
  ]

};



/* -----------------------------------
   MAIN COMPONENT
----------------------------------- */

export default function HealthcareCaseStudyDark() {

  const [activeTab, setActiveTab] =
    useState(tabs[0]);

  return (

    <div style={styles.page}>

      {/* HERO */}

      <div style={styles.hero}>

        <h1 style={styles.mainTitle}>
          FINSIGHT
        </h1>

        <h2 style={styles.subTitle}>
          THE PARADOX
        </h2>

        <h2 style={styles.accentTitle}>
          OF GROWTH
        </h2>

        <div style={styles.heroDescription}>

          <div style={styles.verticalLine} />

          <p style={styles.descriptionText}>
            A structured healthcare sector research
            case study analyzing hospital economics,
            growth models, and capital-intensive scaling.
          </p>

        </div>

      </div>



      {/* TABS */}

      <div style={styles.tabBar}>

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}

            style={{
              ...styles.tabButton,

              borderBottom:
                activeTab === tab
                  ? "2px solid #8B5CF6"
                  : "2px solid transparent"
            }}
          >
            {tab}

          </button>

        ))}

      </div>



      {/* CONTENT */}

      <div style={styles.content}>

        <h3 style={styles.sectionTitle}>
          {activeTab}
        </h3>

        <ul style={styles.taskList}>

          {sectionTasks[activeTab].map(
            (task, index) => (

              <li
                key={index}
                style={styles.taskItem}
              >
                ☐ {task}

              </li>

            )
          )}

        </ul>

      </div>

    </div>

  );
}





/* -----------------------------------
   STYLES
----------------------------------- */

const styles = {

  page: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Inter, sans-serif"
  },



  hero: {
    marginBottom: "40px"
  },

  mainTitle: {
    fontSize: "72px",
    fontWeight: "800",
    margin: 0
  },

  subTitle: {
    fontSize: "42px",
    color: "#9CA3AF",
    margin: "10px 0 0 0"
  },

  accentTitle: {
    fontSize: "42px",
    color: "#8B5CF6",
    marginBottom: "20px"
  },



  heroDescription: {
    display: "flex",
    marginTop: "20px",
    maxWidth: "700px"
  },

  verticalLine: {
    width: "3px",
    height: "70px",
    backgroundColor: "#8B5CF6",
    marginRight: "16px"
  },

  descriptionText: {
    color: "#9CA3AF",
    fontSize: "18px",
    lineHeight: "1.6"
  },



  tabBar: {
    display: "flex",
    gap: "20px",
    borderBottom: "1px solid #1F2937",
    marginBottom: "30px",
    flexWrap: "wrap"
  },

  tabButton: {
    background: "none",
    border: "none",
    color: "#9CA3AF",
    padding: "10px 0",
    cursor: "pointer",
    fontSize: "15px"
  },



  content: {
    backgroundColor: "#0A0A0A",
    padding: "30px",
    borderRadius: "10px",
    border: "1px solid #1F2937"
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "20px"
  },



  taskList: {
    listStyle: "none",
    padding: 0
  },

  taskItem: {
    marginBottom: "12px",
    fontSize: "15px",
    color: "#9CA3AF"
  }

};
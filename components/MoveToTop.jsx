"use client";
import Image from "next/image";
import top from "../public/Top.svg";

export default function MoveToTop() {
  const topScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" text-2xl sm:text-3xl  sm:bottom-5 sm:right-5 bottom-3 right-5 fixed hover:scale-95 transition-all duration-100 ease-in-out" onClick={topScroll}>
      <Image src={top} alt="tOP" height={50} />
    </div>
  );
}

import dynamic from "next/dynamic";

const LeetCodeCalendarComponent = dynamic(() => import("../components/LeetCodeCalendarComponent"), { ssr: false });

export default function Home() {
  return (
    <div>
      <LeetCodeCalendarComponent />
    </div>
  );
}

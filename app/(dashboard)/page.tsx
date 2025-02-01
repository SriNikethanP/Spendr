
import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-1 -mt-24">
      <Suspense fallback={<div>Loading...</div>}>
        <DataGrid />
        <DataCharts />
      </Suspense>
    </div>
  );
}

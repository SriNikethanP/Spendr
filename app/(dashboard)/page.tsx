import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-1 -mt-24">
      <Suspense
        fallback={
          <div>
            <Loader2 className="size-6 text-slate-300 animate-spin " />
          </div>
        }
      >
        <DataGrid />
        <DataCharts />
      </Suspense>
    </div>
  );
}

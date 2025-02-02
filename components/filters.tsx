import { Suspense } from "react";
import { AccountFilter } from "./account-filter";
import { DateFilter } from "./date-filter";
import { Loader2 } from "lucide-react";

export const Filters = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <Suspense
        fallback={
          <div>
            <Loader2 className=" text-slate-500 animate-spin size-4" />
          </div>
        }
      >
        <AccountFilter />
        <DateFilter />
      </Suspense>
    </div>
  );
};

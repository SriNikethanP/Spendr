"use client";

import { EditAccountSheet } from "@/features/accounts/components/edit-accounts-sheet";
import { NewAccountSheet } from "@/features/accounts/components/new-accounts-sheet";
import { useMountedState } from "react-use";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";
import { NewCategorySheet } from "@/features/categories/components/new-cateory-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();
  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      <NewCategorySheet />
      <EditCategorySheet />
    </>
  );
};

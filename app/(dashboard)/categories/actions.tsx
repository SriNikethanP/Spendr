"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteCategory } from "@/features/categories/api/use-delete-category";
import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useConfirm } from "@/hooks/use-confirm";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
type Props = { id: string };

export const Actions = ({ id }: Props) => {
  const deleteMutation = useDeleteCategory(id);

  const [ConfirmationDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this category."
  );

  const { onOpen } = useOpenCategory();
  const handleDelete = async () => {
    const ok = await confirm();
    if (ok) {
      deleteMutation.mutate();
    }
  };
  return (
    <>
      <ConfirmationDialog />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"} className="size-8 p-0">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="flex items-center"
            disabled={deleteMutation.isPending}
            onClick={() => onOpen(id)}
          >
            <Edit className="size-4 mr-2" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center"
            disabled={deleteMutation.isPending}
            onClick={handleDelete}
          >
            <Trash className="size-4 mr-2" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

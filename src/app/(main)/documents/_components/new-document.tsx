"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { createDocuments } from "../actions";
import { DocumentValues } from "@/lib/validations";
import { useRouter } from "next/navigation";

const NewDocument = () => {
  const router = useRouter();
  async function handleClick() {
    const values: DocumentValues = {
      title: "New Document",
      description: "",
    };
    try {
      const newDocument = await createDocuments(values);
      router.push(`/documents/${newDocument.id}`);
    } catch (error) {
      console.error("Error", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <section className="flex flex-col flex-wrap p-5 md:flex-row">
      <div className="flex flex-col space-y-4">
        <h3 className="mb-4 text-sm font-semibold">Start a new document</h3>
        <div className="flex flex-wrap space-x-4">
          <Card
            className="h-[200px] w-[150px] hover:cursor-pointer hover:border hover:border-primary/80"
            onClick={handleClick}
          >
            <CardContent className="flex h-full w-full items-center justify-center">
              <Plus size={80} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewDocument;

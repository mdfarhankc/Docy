"use client";

import { DocumentsServerdatas } from "@/lib/type";
import { useState } from "react";
import EditorBlockForm from "./editor-block-form";
import EditorBlockView from "./editor-block-view";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface EditorBlockProps {
  document: DocumentsServerdatas;
}

export default function EditorBlock({ document }: EditorBlockProps) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl">
      {isEditing ? (
        <EditorBlockForm document={document} setIsEditing={setIsEditing} />
      ) : (
        <>
          <EditorBlockView document={document} />
          <div className="mt-2 flex gap-2">
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button variant={"secondary"} onClick={() => router.back()}>
              Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

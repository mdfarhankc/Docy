"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentsServerdatas } from "@/lib/type";
import { documentSchema, DocumentValues } from "@/lib/validations";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RichtextEditor from "./richtext-editor";
import { draftToMarkdown, markdownToDraft } from "markdown-draft-js";
import { createDocuments, updateDocument } from "../actions";
import Loading from "@/components/loading";

interface EditorBlockFormProps {
  document: DocumentsServerdatas;
  setIsEditing: (value: boolean) => void;
}

const EditorBlockForm = ({ document, setIsEditing }: EditorBlockFormProps) => {
  const form = useForm<DocumentValues>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: document.title || "",
      description: document.description || "",
    },
  });

  const onSubmit = async (values: DocumentValues) => {
    try {
      if (document.id) {
        await updateDocument(values, document.id);
      } else {
        await createDocuments(values);
      }
      setIsEditing(false);
      console.log("Document saved successfully!");
    } catch (error) {
      console.error("Failed to save document:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <RichtextEditor
                  onChange={(draft) => field.onChange(draftToMarkdown(draft))}
                  ref={field.ref}
                  defaultContentState={
                    field.value ? markdownToDraft(field.value) : undefined
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <Button disabled={form.formState.isLoading} type="submit">
            {form.formState.isLoading ? <Loading /> : "Save"}
          </Button>
          <Button
            variant={"destructive"}
            disabled={form.formState.isLoading}
            onClick={() => setIsEditing(false)}
          >
            Discard
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditorBlockForm;

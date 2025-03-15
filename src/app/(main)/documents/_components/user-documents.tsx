import MarkDown from "@/components/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { DocumentsServerdatas } from "@/lib/type";
import { BookText } from "lucide-react";
import Link from "next/link";

interface UserDocumentsProps {
  documents: DocumentsServerdatas[];
}

export default function UserDocuments({ documents }: UserDocumentsProps) {
  return (
    <section className="space-y-3 p-5">
      <h1 className="mb-4 text-sm font-semibold">Recent Documents</h1>
      <div className="flex flex-wrap gap-8">
        {documents.length > 0 ? (
          documents.map((document) => (
            <div key={document.id}>
              <Link href={`/documents/${document.id}`}>
                <Card className="h-[200px] w-[150px] hover:cursor-pointer hover:border hover:border-primary/80">
                  <CardContent className="flex h-full w-full items-center justify-center">
                    <div>
                      {document.description ? (
                        <MarkDown>{document.description}</MarkDown>
                      ) : (
                        <BookText size={60} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <p className="mt-2 text-sm">{document.title}</p>
            </div>
          ))
        ) : (
          <p className="text-sm">
            Once you start writing your recent document will go here...
          </p>
        )}
      </div>
    </section>
  );
}

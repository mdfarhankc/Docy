import prisma from "@/lib/prisma";
import EditorBlock from "../_components/editor-block";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const id = (await params).id;

  const document = await prisma.document.findUnique({
    where: {
      id,
    },
  });

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl px-3 py-6">
      <div className="space-y-6">
        {document ? (
          <EditorBlock document={document} />
        ) : (
          <div className="flex h-[70vh] items-center justify-center">
            <h1 className="text-center text-4xl font-extrabold text-primary">
              Oops! No Document Found!
            </h1>
          </div>
        )}
      </div>
    </main>
  );
}

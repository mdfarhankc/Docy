import Loading from "@/components/loading";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import React, { Suspense } from "react";
import NewDocument from "./_components/new-document";
import { auth } from "@clerk/nextjs/server";
import UserDocuments from "./_components/user-documents";

export const metadata: Metadata = {
  title: "My Documents",
};

const Page = async () => {
  const { userId } = await auth();
  if (!userId) return null;

  const [documents, totalCount] = await Promise.all([
    prisma.document.findMany({
      where: { userId },
      orderBy: {
        updatedAt: "desc",
      },
    }),
    prisma.document.count({
      where: { userId },
    }),
  ]);

  return (
    <main className="mx-auto min-h-[80vh] max-w-7xl space-y-6 px-3 py-6">
      <h3 className="text-2xl font-extrabold tracking-tighter text-primary md:text-3xl">
        - My Documents -
      </h3>
      <p className="text-muted-foreground"> Total: {totalCount}</p>
      <div className="space-y-3 border-b">
        <Suspense fallback={<Loading />}>
          <NewDocument />
        </Suspense>
      </div>
      <div className="space-y-3">
        <UserDocuments documents={documents} />
      </div>
    </main>
  );
};

export default Page;

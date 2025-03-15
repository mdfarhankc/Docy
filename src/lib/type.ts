import { Prisma } from "@prisma/client";

export type DocumentsServerdatas = Prisma.DocumentGetPayload<{
  select: {
    id: true;
    title: true;
    description: true;
    createdAt: true;
    updatedAt: true;
    userId: true;
  };
}>;

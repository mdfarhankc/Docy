"use server";

import prisma from "@/lib/prisma";
import { documentSchema, DocumentValues } from "@/lib/validations";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const createDocuments = async (values: DocumentValues) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const parsedValues = documentSchema.parse(values);

  const newDocument = await prisma.document.create({
    data: {
      userId,
      title: parsedValues.title,
      description: parsedValues.description,
    },
  });

  revalidatePath("/documents");

  return newDocument;
};

export const updateDocument = async (values: DocumentValues, id: string) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const parsedValues = documentSchema.parse(values);

  const updatedDocument = await prisma.document.update({
    where: { id },
    data: {
      title: parsedValues.title,
      description: parsedValues.description,
    },
  });

  revalidatePath("/documents");
  revalidatePath(`/documents/${id}`);

  return updatedDocument;
};

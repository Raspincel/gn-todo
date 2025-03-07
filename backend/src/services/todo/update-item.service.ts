import prisma from "../../db";

interface UpdateItemService {
  id: number;
  content: string;
}

export default async function updateItemService({ id, content }: UpdateItemService) {
  return await prisma.todoItems.update({
    where: {
      id,
    },
    data: {
      text: content
    },
  });
}
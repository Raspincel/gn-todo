import prisma from "../../db";

export default async function toggleItemService(id: number) {
  const item = await prisma.todoItems.findUnique({
    where: {
      id,
    },
  });

  return await prisma.todoItems.update({
    where: {
      id,
    },
    data: {
      completed: !item!.completed,
    },
  });
}
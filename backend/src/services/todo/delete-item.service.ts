import prisma from "../../db";

export default async function deleteItemService(id: number) {
  return await prisma.todoItems.delete({
    where: {
      id,
    },
  });
}
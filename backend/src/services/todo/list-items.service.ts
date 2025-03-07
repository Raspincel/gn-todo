import prisma from "../../db";

export default async function listItemsService() {
  return await prisma.todoItems.findMany();
}
import prisma from "../../db"

interface CreateItemService {
  content: string
}

export default async function createItemService({ content }: CreateItemService) {
  await prisma.todoItems.create({
    data: {
      text: content,
    },
  })
}
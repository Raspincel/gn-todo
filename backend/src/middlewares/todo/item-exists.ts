import { Request, Response, NextFunction } from 'express';
import prisma from '../../db';
import { AppError } from '../../error';

export default async function ItemExists(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const item = await prisma.todoItems
    .findUnique({
      where: { id: Number(id) },
    })

  if (!item) {
    throw new AppError(404, "Item not found")
  }

  next()
}
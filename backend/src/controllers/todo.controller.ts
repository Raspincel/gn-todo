import { Request, Response } from 'express';
import createItemService from '../services/todo/create-item.service';
import listItemsService from '../services/todo/list-items.service';
import deleteItemService from '../services/todo/delete-item.service';
import updateItemService from '../services/todo/update-item.service';
import toggleItemService from '../services/todo/toggle-item.service';

export async function createItem(req: Request, res: Response) {
  const { content } = req.body;

  await createItemService({ content });

  return res.sendStatus(201);
}

export async function listItems(req: Request, res: Response) {
  const items = await listItemsService();

  return res.status(200).json(items);
}

export async function deleteItem(req: Request, res: Response) {
  await deleteItemService(Number(req.params.id));

  return res.status(200).json({ message: 'Item deleted' });
}

export async function updateItem(req: Request, res: Response) {
  const { content } = req.body;
  const { id } = req.params;

  const item = await updateItemService({
    id: Number(id),
    content,
  })

  return res.status(200).json(item);
}

export async function toggleItem(req: Request, res: Response) {
  const { id } = req.params;

  console.log('a')
  const item = await toggleItemService(Number(id));
  console.log('b')

  return res.status(200).json(item);
}
import { Router } from 'express'
import ItemExists from '../middlewares/todo/item-exists'
import { createItem, deleteItem, listItems, toggleItem, updateItem } from '../controllers/todo.controller'
import { createItemSchema, updateItemSchema } from '../schemas/todo.schema'
import verifyShape from '../schemas/verifyShape.middleware'

const router = Router()

router.get('/', listItems)

router.post('/', verifyShape(createItemSchema), createItem)

router.delete('/:id', ItemExists, deleteItem)

router.put('/:id', verifyShape(updateItemSchema), ItemExists, updateItem)

router.put('/toggle/:id', ItemExists, toggleItem)

export default router
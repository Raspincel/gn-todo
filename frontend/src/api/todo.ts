import { useQuery, useMutation, useQueryClient } from 'react-query';
import { api } from './api';
import { Todo } from '../App';

interface CreateTodoInput {
  content: string;
}

interface UpdateTodoInput {
  content: string;
}

const todoApi = {
  listItems: async (): Promise<Todo[]> => {
    const response = await api.get('/todo/');
    return response.data;
  },

  createItem: async (input: CreateTodoInput): Promise<Todo> => {
    const response = await api.post('/todo/', input);
    return response.data;
  },

  updateItem: async (id: number, input: UpdateTodoInput): Promise<Todo> => {
    const response = await api.put(`/todo/${id}`, input);
    return response.data;
  },
  toggleItem: async (id: number): Promise<Todo> => {
    const response = await api.put(`/todo/toggle/${id}`);
    return response.data;
  },
  deleteItem: async (id: number): Promise<void> => {
    await api.delete(`/todo/${id}`);
  },
  deleteCompletedItems: async (): Promise<void> => {
    await api.delete('/todo/all-completed');
  },
};

export const useTodos = () => {
  return useQuery('todos', todoApi.listItems);
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    (input: CreateTodoInput) => todoApi.createItem(input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ id, input }: { id: number; input: UpdateTodoInput }) => 
      todoApi.updateItem(id, input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    (id: number) => todoApi.deleteItem(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
};

export const useDeleteCompletedTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    () => todoApi.deleteCompletedItems(),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
}

export const useToggleTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    ({ id }: { id: number }) => 
      todoApi.toggleItem(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
};

export default todoApi;
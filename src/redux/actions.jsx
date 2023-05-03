import { nanoid } from 'nanoid';

export const addTodo = text => {
  return {
    type: 'todos/addTodo',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deleteTodo = todoId => {
  return {
    type: 'todos/deleteTodo',
    payload: todoId,
  };
};

export const toggleCompleted = todoId => {
  return {
    type: 'todos/toggleCompleted',
    payload: todoId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

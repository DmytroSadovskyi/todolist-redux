import { statusFilters } from './constants';
//  Імпортуємо функцію композиції редюсерів
import { combineReducers } from 'redux';

const todosInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

// Відповідає лише за оновлення властивості todos
// Тепер значенням параметра state буде масив завдань
const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return [...state, action.payload];
    case 'todos/deleteTodo':
      return state.filter(todo => todo.id !== action.payload);
    case 'todos/toggleCompleted':
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

//  Код редюсерів tasksReducer та filtersReducer

export const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

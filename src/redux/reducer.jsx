import { statusFilters } from './constants';

const initialState = {
  todos: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};
// Використовуємо initialState як значення стану за умовчанням
export const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'todos/addTodo': {
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        todos: [
          // в якому є всі існуючі завдання
          ...state.todos,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }

    case 'todos/deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case 'todos/toggleCompleted':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case 'filters/setStatusFilter':
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};

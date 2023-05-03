import { TodoItem } from 'components/TodoItem/TodoItem';
import css from './TodoList.module.css';
// Імпортуємо хук
import { useSelector } from 'react-redux';
import { getTodos, getStatusFilter } from 'redux/selectors';

// Імпортуємо об'єкт значень фільтра
import { statusFilters } from 'redux/constants';
const getVisibleTasks = (todos, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return todos.filter(todo => !todo.completed);
    case statusFilters.completed:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const TodoList = () => {
  // Отримуємо масив завдань із стану Redux
  const todos = useSelector(getTodos);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTodos = getVisibleTasks(todos, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTodos.map(todo => (
        <li className={css.listItem} key={todo.id}>
          <TodoItem task={todo} />
        </li>
      ))}
    </ul>
  );
};

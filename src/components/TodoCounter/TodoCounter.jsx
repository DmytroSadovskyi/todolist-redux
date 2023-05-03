import { getTodos } from 'redux/selectors';
import css from './TodoCounter.module.css';
// Імпортуємо хук
import { useSelector } from 'react-redux';

export const TodoCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const todos = useSelector(getTodos);
  // На базі стану Redux отримуємо похідні дані
  const count = todos.reduce(
    (acc, todo) => {
      if (todo.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};

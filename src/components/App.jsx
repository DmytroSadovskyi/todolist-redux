import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout/Layout';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

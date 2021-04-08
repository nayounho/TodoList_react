import { createGlobalStyle } from 'styled-components';
import TodoTemplete from '../Conponents/Todo-Templete/TodoTemplete';
import TodoCreate from '../Conponents/TodoCreate/TodoCreate';
import TodoHead from '../Conponents/TodoHead/TodoHead';
import { TodoProvider } from '../Conponents/TodoContext/TodoContext';
import TodoList from '../Conponents/TodoList/TodoList';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #e9ecef;
}
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplete>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplete>
      </TodoProvider>
    </>
  );
}

export default App;

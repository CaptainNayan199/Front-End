import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import AddItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center className="todoContainer">
      <Header />
      <AddTodo />
      <AddItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;

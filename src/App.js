import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/Todos/AddTodo";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">My To-Do App</div>
        <div className="App-body">
          <AddTodo />
          <Todos />
        </div>
        <div className="App-footer">Developed at Incubyte</div>
      </div>
    );
  }
}

export default App;

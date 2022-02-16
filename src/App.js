import "./App.css";
import Todos from "./components/Todos";
// import axios from "axios";
import { Component } from "react/cjs/react.production.min";

// const api = axios.create({
//   baseURL: `http://127.0.0.1:8080/todos/open`,
// });

class App extends Component {
  //   constructor() {
  // super();
  // api.get("/").then((response) => {
  //   console.log(response.data);
  // });
  //   }

  render() {
    return (
      <div className="App">
        <div className="App-header">My To-Do App</div>
        <div className="App-body">
          <Todos />
        </div>
        <div className="App-footer">Developed at Incubyte</div>
      </div>
    );
  }
}

export default App;

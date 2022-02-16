import './App.css';
import Todos from "./components/Todos";
import CreateTodo from "./components/Todos/CreateTodo";
import {useState} from "react";



function App() {

    const [reloadApp, setReloadApp] = useState(0)

    return (
        <div className="App">
            <div className="App-header">
                My To-Do App
            </div>
            <div className="App-body">
                <CreateTodo reloadApp={reloadApp} setReloadApp={setReloadApp}/>
               <Todos reloadApp={reloadApp} />
            </div>
            <div className="App-footer">
                Developed at Incubyte
            </div>
        </div>
    );
}

export default App;

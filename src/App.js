import './App.css';
import Todos from "./components/Todos";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                My To-Do App
            </div>
            <div className="App-body">
                <Todos/>
            </div>
            <div className="App-footer">
                Developed at Incubyte
            </div>
        </div>
    );
}

export default App;

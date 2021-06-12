import './App.css';
import {Router} from '@reach/router'
import List from "./components/List"
import View from "./components/View"
import Add from "./components/Add"

function App() {
  return (
    <div className="App">
      <Router>
        <List path="/"/>
        <View path="/view/:id"/>
        <Add path="/add"/>
      </Router>
    </div>
  );
}

export default App;

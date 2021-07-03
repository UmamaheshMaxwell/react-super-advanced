import logo from './logo.svg';
import './App.css';
import Greet from './1.components/1.functional/Greet'
import {Named} from './1.components/1.functional/Named'

function App() {
  return (
    <div className="container">
      <h1>Welcome to react developement !!!</h1>
      <Greet />
      <Named />
    </div>
  );
}
export default App;

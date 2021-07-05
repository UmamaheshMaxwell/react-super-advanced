// import logo from './logo.svg';
// import './App.css';
// import Greet from './1.components/1.functional/Greet'
// import {Named} from './1.components/1.functional/Named'
// import Functional from './1.components/1.functional/Functional';
// import FunctionalOne from './1.components/1.functional/FunctionalOne';
// import Welcome from './1.components/2.class/Welcome';
import Hello from './2.jsx/Hello';
import Greeting from './3.props/Greeting';
import Welcome from './3.props/Welcome';
import Counter from './4.state/Counter';
import Message from './4.state/Message';
import Person from './4.state/Person';
import ClassClick from './5.event-handling/ClassClick';
import EventBindFour from './5.event-handling/EventBindFour';
import EventBindOne from './5.event-handling/EventBindOne';
import EventBindThree from './5.event-handling/EventBindThree';
import EventBindTwo from './5.event-handling/EventBindTwo';
import FunctionClick from './5.event-handling/FunctionClick';

// function Home(){
//   return <h1>This is Home Component</h1>
// }

const Home = () => <h1>This is Home Component</h1>
const About = () => <h1>This is About Component</h1>
const Contact = () => <h1>This is Contact Component</h1>
const Data = () => <h1>This is Data Component</h1>


function App() {
  return (
    <div className="container">
      <EventBindOne /> <br />
      <EventBindTwo /> <br /> 
      <EventBindThree /><br />
      <EventBindFour /><br />
      {/* <ClassClick />
      {/* <FunctionClick /> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <h1>This is using Function Component</h1>
      <Greeting name="Uma" skill="FullStack">This is message to Uma</Greeting>
      <Greeting name="Scott" skill="Srum Master"/>
      <Greeting name="Adam" skill="Business Analyst"/>
      <Greeting name="Tuan" skill="Tech Boss"/>
      <br /><br />
      <h1>This is using Class Component</h1>
      <Welcome name="Uma" skill="FullStack">This is message to Uma</Welcome>
      <Welcome name="Scott" skill="Srum Master"/>
      <Welcome name="Adam" skill="Business Analyst"/>
      <Welcome name="Tuan" skill="Tech Boss"/> */}
      {/* <h1>Welcome to react developement !!!</h1>
      <Hello /> */}
      {/* <Welcome />
      <Home />
      <About />
      <Contact /> */}
      {/* <Data /> */}
      {/* <Greet />
      <Named />
      <Functional />
      <FunctionalOne /> */}
 
    </div>
  );
}
export default App;

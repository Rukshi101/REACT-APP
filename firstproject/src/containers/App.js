import React, { Component } from 'react';
// import styled from 'styled-components'
// import './App.css';
import Persons from '../component/Persons/Persons.js';
import classes from './App.css';
import Cockpit from '../component/Cockpit/Cockpit'

//radium allows us to use inline styles with pseduo selectros and media quieries
// import Radium, { StyleRoot} from 'radium';
// ./ means relative folder

//WITH HOOKS ******************** functional component
// const StyledButton = styled.button`
// //REGULAR CSS IN HEREE
// background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
// // if props.alt is true then return that 
// color:white;
// font:inherit;
// border:1x solid blue;
// padding:8px;
// cursor:pointer;
// //belongs to this button with and symbol
// &:hover{
//   background-color:lightgreen;
//   color:black;
// }

// `

class App extends Component{
constructor(props){
  super(props);
  console.log('[App.js] constructor');
  //YOU CAN SET STATE IN A CONSTRUCTOR to replace state syntax belwo

  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
state = {
  persons: [
  {id: 'asda', name:'Max',age:28},
  {id: 'asdaqwed',name:'Manu',age:29},
  {id: 'asdqweqwa',name: 'Stephanie',age:26}
  ],
  otherState:"some other value",
  showPersons:false,
  showCockpit :true
};
//state and props changes causes updates to the DOM
//
// switchNameHandler = (newName) =>{
//   console.log("Was Clicked!");
//   //DO NOT DO THISthis.state.persons[0].name = "Rukshi";
// }
//props  allow you to pass data from a parent (wrapping) component to a child (embedded) component
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};
//checks if each person in the array matches the id every time the event is activated
//dont mutate state directly for objects because they are reference types
//create new js object and distribute all propertiesusing spread operatro

//using person copy 
person.name =event.target.value;

//updates the array 
const persons =  [...this.state.persons];
persons[personIndex] =person;

  this.setState(
   {persons:persons}
    )
    //sets the state to updated persons array
    //react looks for this state and merges this state with old state from before
  //allows use to update special state property
  
  //this refers to the class
}
deletePersonHandler = (personIndex) =>{
const persons = this.state.persons.slice();
//good practice is to call slice method which returns a copy  of the array
//you can refer to the new array instead of messing with a new one

// const persons = [...this.state.persons];
//MORE MODERN APPROACH!!!!
persons.splice(personIndex,1);
//changed element it was pointing to because persons is an array
this.setState({persons:persons});
//removecs one element at a time

}




togglePersonsHandler = () =>{
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
//if does show is falsse it sets show persons to true
}

render(){
console.log ('[App.js] render');
  // const style = {
  //   backgroundColor :'white',
  //   font:'inherit',
  //   border:'1x solid blue',
  //   padding:'8px',
  //   cursor:'pointer',
  // //   // ':hover':{
  // //   //   backgroundColor:'lightgreen',
  // //   //   color:'black'
  // //   // }
  // //   //this is js so it has to be strings

  // //   //cannot get the full css power with inline styles
  // //   //inline styles are good for practice
  // }

//REACT RERENDERS ALL COMPONENTS BEFORE RETURNING SO WE WRITE THIS CODE HERE

let persons = null;

if(this.state.showPersons){
  //KEY property helps react update the list efficiently
  //by default all lists will be re rendered which is inefficent for logn lists
  persons =
//CHILD COMPONETNS
    <Persons
    persons = {this.state.persons}
    clicked = {this.deletePersonHandler}
    changed = {this.nameChangedHandler}
    //passing these properties so that persons component can access using props.propertyname
    ></Persons>;
    {/* single curly braces is used to render something dynamic within jsx code */}
       
      
  
  // style.backgroundColor = 'red';
  // style[':hover']={
  //   backgroundColor:'salmon',
  //   color:'black'
  // };
  //overriding the pseduo selector
  //changing style dynamically for the button
}



// let classes = ['red', 'bold'].join(' ');
//vaid css class list that we can assign to class names


    return (
      // <StyleRoot>
      <div className={classes.App}>
        <button onClick = {() =>{
          this.setState({showCockpit: false})
        }}
        >Remove cockpit</button>
        {this.state.showCockpit ?(
        <Cockpit 
        title = {this.props.appTitle}
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}
      //two props that we want to access
        /> ):null}
         
        {/* passing an anonymous function that will be executed on a click*
        this is usally ineffecient so bind is preferred over it*/}
        
       {/* {
       this.state.showPersons ==true ? */}
       {/* ternary expression used as if statement while null at the bottom is the else condiditon
        */}
       {persons}

      </div>
      // </StyleRoot>
    )
    //reusable component Person and can configure it
    //JSX code should be dynamic
    //return React.createElement('div',{className:'App}.React.createElement('h1'. null,'Does this work now));
    //words reserved in js cannot be used inside jsx so className
    //nest everything in one root element that you can return
      };
}
  export default App;/*Radium (App)*/
//radium is a higher order component

 
// const [personsState,setPersonstate] = useState({
//   persons: [
//   {name:'Max',age:28},
//   {name:'Manu',age:29},
//   {name: 'Stephanie',age:26}
//   ],
//   otherState:"some other value"
// });
// //good practice to create stateless components 
// //staateful are called smart componenets
// //more functiona presentatioanl components rather thans stateful components
// //you know what to change in the code if you just entered it
// const [otherState,setOtherState] = useState("some other value");
// const switchNameHandler = () =>{
//   console.log("Was Clicked!");
//   //DO NOT DO THISthis.state.persons[0].name = "Rukshi";
//   setPersonstate({
//     persons: [
//       {name:'Max',age:28},
//       {name:'Manu',age:29},
//       {name: 'Stephanie',age:26}
//       ]
      
//     });
//   };
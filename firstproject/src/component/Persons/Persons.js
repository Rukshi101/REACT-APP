import React, {Component} from 'react'

import Person from './Person/Person';



class Persons extends Component{




  static getDerivedStateFromProps(props,state){
    console.log('[Persons.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps,nextState){
    //REFERENCE TYPES ARE STORED IN MEMORY
    //STORED IN VARIABLES ARE POINTERS
    console.log('[Persons.js');
    if(nextProps.persons !== this.props.persons){
      return true;
    }else{
      return false;
    }

    //THIS IS TO OPTIMIZED AND AVOID RERENDERING WHEN REMOVE COCKPIT IS CLICKED!

  } 
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
  return {message:'Snapshot!'};
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentwillUnmount');
  };

render(){


//one line omitting the return statement
console.log('[Persons.js] rendering...');
return this.props.persons.map((person,index) =>{
    return <Person
    click = {() =>this.props.clicked(index)}
     name = {person.name}
     age = {person.age}
     key = {person.id}
     changed = {(event) =>this.props.changed(event,person.id)}/>
     //with this key react will only update the dom in places in places that it needs to be updated
     //every element has a unique key redact can use to compare elements of future to elements of the past

     //prints a list of person just like before (see printed version) but dynamicaally
     // allows you to retunr an array of persons
  });
}
}
//JSX EXPRESSIONS MEANS YOU NEED PARANTHESIS

export default Persons;

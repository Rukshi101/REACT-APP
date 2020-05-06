
import React, {useEffect} from 'react'

import classes from './Cockpit.css';

const cockpit = (props) =>{
  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');

    const timer = setTimeout(()=>{
      alert('Saved data to cloud!');

    },1000); 
    return() =>{
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in use effect');
    };
    
  },[]);

  useEffect(() =>{
    console.log('[Cockpit.js] 2nd useEffect');
    return() =>{
      console.log('[Cockpit.js] cleanup work in 2nd use effect');
    }
    })
  //useeffect takes a function that runs ever render cycle
    const assignedClasses = [];

    let btnClass = '';
    btnClass = (classes.Red);
if(props.persons.length <=2){
  // classes.push('red'); 
  assignedClasses.push(classes.red);
}

if (props.persons.length<=1){
  // classes.push('bold');
  assignedClasses.push(classes.bold);
}

    return(
    <div className = {classes.Cockpit}>

    <h1>{props.title}</h1>
        <p className = {assignedClasses.join(' ')}> this is really working!</p>
      
        {/* <StyledButton alt = {this.state.showPer
        sons}
         */}
         <button 
         className = {btnClass}
          onClick = {props.clicked}

        //no this because its not a class property
        >Switch name
        </button>
        </div>
    );
        };

export default cockpit;
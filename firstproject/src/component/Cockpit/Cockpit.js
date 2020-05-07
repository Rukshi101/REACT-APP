
import React, {useEffect, useRef,useContext} from 'react'

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'


const cockpit = (props) =>{
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');

    // const timer = setTimeout(()=>{
    //   alert('Saved data to cloud!');

    // },1000); 
    toggleBtnRef.current.click();
    return() =>{
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in use effect');
    };
    //USE EFFECT RUNS AFTER EVER RENDER CYCLE
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
if(props.personsLength <=2){
  // classes.push('red'); 
  assignedClasses.push(classes.red);
}

if (props.personsLength<=1){
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
         <button ref = {toggleBtnRef}
         className = {btnClass}
          onClick = {props.clicked}

        //no this because its not a class property
        >Switch name
        </button>
  
      <button onClick ={authContext.login}>Log In</button> 
     
        </div>
    );
        };

export default React.memo(cockpit);

//optimize functional based components using React.memo

//stores a snapshot of a component only if input of this component changes then react will rerender


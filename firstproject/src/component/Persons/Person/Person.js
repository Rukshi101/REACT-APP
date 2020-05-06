import React, {Component} from 'react'
import Radium from 'radium'
import  './Person.css';
import styled from 'styled-components'
import classes from './Person.css'

//thanks to webpack we can import css
//automatic prefixing to work in as many broswers as possible

// const StyledDiv = styled.div `
// // regular css components managed by styled componenets
// width: 60%;
// margin:16px auto;
// border:1px solid #eee;
// box-shadow:0 2px 3px #ccc;
// padding:16px;
// text-align:center

// @media (min-width:500px) {
//     width:450px;
// }
// `
//styled div is a class based componetn

class Person extends Component{
render(){

    console.log('[Person.js] rendering...');
    const style = {
        //media quiery is an advanced css selector
        // '@media (min-width:500px)':{
        //     width:'450px'
        //     // keeps width of person components as 450 unless the application goes below 500 px

        // }
    }
    return (
        
        
        
        <div>
        
        //styled elemetnt has an html elementas methods for every html element you can think
        <div className = {classes.Person}>
    <p onClick = {this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
    {/* props accessed with this keyword because they are properties of this class */}
    <p>{this.props.children}</p>
<input type = "text" onChange = {this.props.changed} value = {this.props.name}/>
    </div>
    </div>
    )
};
}

//a component is a function returning some jsx
    //single curly braces to run dynamic content as JS
//when using class based components its this.props
//children refers to any elements in between tags
export default Person;
//now you can use it inside app.js
import React, {Component} from 'react'
//import fragment and use Fragment as a tag to replace aux function
import Radium from 'radium'
import withClass from '../../../hoc/WithClass';
import  './Person.css';
import styled from 'styled-components'
import classes from './Person.css'
import Auxillary from '../../../hoc/Auxillary'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

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
constructor(props){
    super(props);
    this.inputElementRef = React.createRef();

}
static contextType = AuthContext;
componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
}
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
        
        
        
       <Auxillary>
           
        {this.context.authenticated ?   <p>AUTHENTICATED!</p> : <p>Please Log in!</p>
}
         
         
    <p onClick = {this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
    {/* props accessed with this keyword because they are properties of this class */}
    <p>{this.props.children}</p>
<input type = "text" 
ref ={this.inputElementRef}
onChange = {this.props.changed} 
value = {this.props.name}/>
</Auxillary>
    )
};
}
Person.propTypes ={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};
//prop-types package allows you to get warnings for these props if used incorrectly by the people on your team
//you define the type of your props here for this to happen.
//this object givecs you the type of data each prop uses.


//a component is a function returning some jsx
    //single curly braces to run dynamic content as JS
//when using class based components its this.props
//children refers to any elements in between tags
export default Person;
//now you can use it inside app.js
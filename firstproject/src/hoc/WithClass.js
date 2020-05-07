import React from 'react';
//ONE WAY OF HOC
// const withClass = props =>(
//     <div className = {props.classes}>
//     {props.children}
//     </div>
// );
//mostly change jsx code
const withClass = (WrappedComponent,className) =>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props}/>
            {/* dynamically passing props */}
        </div>
    );
};
//adds behind the scene logic:errors NOT SO MUCH INVOLED WITH JSX CODE BUT MORESO WITH LOGIC
// a function that returns a function and the function that i return is a functional component
export default withClass;
//component that wraps other components that add something to it
//sets up a class on a div that wraps the component
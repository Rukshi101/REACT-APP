import React from 'react';

const authContext = React.createContext({
    authenticated:false,
    login: () =>{}

});

export default authContext;


//context is a object where we decide is available
//can be passed between react components without props/
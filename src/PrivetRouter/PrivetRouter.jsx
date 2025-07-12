import React, { useContext, useState } from 'react';
import { AuthProvider } from '../FireBaseAuth/FireBaseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user} = useContext(AuthProvider)
    const location = useLocation()
    console.log(location)
    // const [go , setGo] = useState(false)
    if(user){
        return children
    }

    return (
        <Navigate state={location} to='/login'></Navigate>
    );
};

export default PrivetRouter;
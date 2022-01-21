import React, { useContext } from  'react'

import {
    BrowserRouter as Routers,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Teste } from '../pages/Teste';

import { AuthContext } from '../shared/context/Auth';
import { GlobalAuth } from '../shared/context/Auth'



export const RoutesApp=()=>{


    const Private=({children})=>{

        const {authenticated,loading}=useContext(AuthContext)

        if(loading){
            return <div>Loading....</div>
        }


        if(authenticated){
            
            return children
        }
        return (<Navigate to="/login" />) 
    }

    return (
        <Routers>


    <GlobalAuth>
    <Routes>

              
                <Route path="/login" exact element={<Login/>}/>

                
                <Route path="/" exact element={<Private><Home/></Private>}/>
                <Route path="/teste" exact element={<Private><Teste/></Private>}/>
    
            
                </Routes>

    </GlobalAuth>

        
        </Routers>
        
    )
}

 
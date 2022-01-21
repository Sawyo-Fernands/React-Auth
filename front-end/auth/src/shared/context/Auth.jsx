

import { createContext, useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'



export const AuthContext=createContext()

export const GlobalAuth=({children})=>{

    const Navigate=useNavigate()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    

    useEffect(()=>{

        const recoveredUser=localStorage.getItem('@user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))      
        }  

        setLoading(false)
      },[])

    const login=(object)=>{  

     try{   
        axios.post("http://localhost:5000/login",object)
        .then((res)=>{
            
            const response=res.data
    

               if(response) {
                    localStorage.setItem('@user',JSON.stringify(response.usuario))
                setUser(response.usuario)
                Navigate("/")
            }else{
                alert('error')
            }
                
            
        }
        )}catch(error){
            console.log(error)
        }   
    }

    const logout=()=>{
        localStorage.removeItem('@user')
        Navigate('/login')
    }

    return (

        <AuthContext.Provider value={{login,authenticated :!!user,user,logout,loading}}>

            {children}

        </AuthContext.Provider>

    )

}
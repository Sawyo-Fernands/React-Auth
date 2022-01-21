
import React, { useContext } from "react"

import { useForm } from "react-hook-form"
import { AuthContext } from "../../shared/context/Auth";

import './style.css'



export const Login=()=>{

    const { login,authenticated }=useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => login(data) ;

    console.log(authenticated)
        
    return(
      
        <>
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login </h3>

        <label for="username">E-mail</label>
        <input type="text" placeholder="Email " id="username" name="email" {...register('email')}/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" {...register('password')}/>

        <button type="submit">Log In</button>
        
    </form>
        </>
        


        // <h1>Login </h1>

        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <label >Email</label>
        //     <input type="email" name="email" {...register('email')} />
        //     <label >Password</label>
        //     <input type="password" name="password" {...register('password')}  />

        //     <button type="submit">Submit</button>

        // </form>
        
        
    
    )

}
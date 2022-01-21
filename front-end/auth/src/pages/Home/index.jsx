import { useContext } from "react"
import { AuthContext } from "../../shared/context/Auth"
import { Link } from "react-router-dom"


export const Home=()=>{

    const {logout,authenticated,user}=useContext(AuthContext)

    console.log(authenticated)
    return(
        <>
        <h1>Home</h1>

   <button onClick={logout}>sair</button>
   <Link to="/teste">TEste</Link>
        </>
        
    )

}
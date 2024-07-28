import {createContext, useContext, useEffect, useState} from "react"

const AuthContext = createContext(null)

// choose the provider context
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null, 
        token: ""
    })

    useEffect(() => {
        const data = localStorage.getItem("user")
        if(data){
            const parsedData = JSON.parse(data)
            setAuth({
                ...auth, 
                user: parsedData.user,
                token: parsedData.token
            })
        }
        //eslint-disable-next-line
      }, [auth.token])
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}


const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

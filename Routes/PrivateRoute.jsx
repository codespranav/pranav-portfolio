import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/authContext'
import { Outlet } from 'react-router-dom';
import AdminLayout from '../src/components/Admin/AdminLayout';

const PrivateRoute = () => {
    const [ok, setOk] = useState(false)
    const {auth} = useAuth();

    useEffect(()=>{checkUser()}, [auth])

    const checkUser = ()=>{
        if(auth?.token){
            setOk(true)
        }
        else{
            setOk(false)
        }
    }
  return (
      ok ? <Outlet/> : "Not logged in"
  )
}

export default PrivateRoute

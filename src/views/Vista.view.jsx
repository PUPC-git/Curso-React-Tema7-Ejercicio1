import React, { useState } from 'react';
import LoginButton from '../components/LoginButton.component';
import LogoutButton from '../components/LogoutButton.component';
import { login } from '../redux/actions/actions';
import { useDispatch } from 'react-redux/es/exports';

export default function Vista() {
    const [acceso, setAcceso] = useState(true);

    const dispatch = useDispatch();

    let accederLogin = () => { dispatch(login(true)); setAcceso(true);};
    let accederLogout = () => { dispatch(login(false)); setAcceso(false);}

    let boton;

    if(acceso) 
       boton = <LogoutButton onClick={accederLogout}/>
    else 
       boton = <LoginButton onClick={accederLogin}/>

    return (
        <div style={{color: 'red',backgroundColor: "black", paddingTop: '12px', paddingBottom: '12px', position: 'relative', left: 'auto'}}> 

            {boton} 

            
        </div>
    );
}


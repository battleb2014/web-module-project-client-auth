import React, { useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = props => {
    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                localStorage.removeItem('username');
                props.history.push('./login');
            })
            .catch(err => console.error(err))
    }, []);

    return (<div></div>)
}

export default Logout;
import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './Login.css'

export default function Login(props) {
    let navigate = useNavigate()

    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = (values) => {
      axios.post('http://localhost:4000/login', values)
      .then((res) => {
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('id', res.data.id)
          props.logFunction()
          navigate('/home')
      })
        .catch((err) => {
          console.log(err.response.data)
      })
    }

    const validate = (values) => {
        const errors = {}
        
        if(!values.email) {
            
        }

        if(!values.password) {
            errors.password = "Password Required"
        } 

    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    
    return ( 
        <div className="mainBodyContainer">
            <header>
                
            </header>
            <div className='loginCenterContainer'>
                <h1>Sign in</h1>
                <hr width={250} />
                <br />
                <br />
                <form onSubmit={formik.handleSubmit}>
                    <input className="loginInput"
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        values={formik.values.username}
                        placeholder="Username"
                        />
                        <br />
                        <br />
                    <input className="loginInput"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        values={formik.values.password}
                        placeholder="Password"
                        />  
                        <br />
                        <br />
                        <button type="submit" disabled={!formik.isValid}>Sign in</button>       
                </form>
            </div>
        </div>
    )
}
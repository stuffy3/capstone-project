import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'

export default function Login() {

    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = (values) => {
      axios.post('http://localhost:4000/login', values)
      .then((res) => {
          console.log(res.data)
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
        <div>
            <h2>Login Page</h2>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    values={formik.values.username}
                    placeholder="Username"
                    />
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    values={formik.values.password}
                    placeholder="Password"
                    />  
                    <button type="submit" disabled={!formik.isValid}>Submit</button>       
            </form>
        </div>
    )
}
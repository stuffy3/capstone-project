import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'

function Register() {
    const initialValues = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    const onSubmit = (values) => {
      axios.post('http://localhost:4000/register', values)
      .then((res) => {
          console.log(res.data)
          localStorage.setItem('firstName', res.data[0][0].firstName)
          localStorage.setItem('username', res.data[0][0].username)
          localStorage.setItem('id', res.data[0][0].id)
      })
      .catch((err) => console.log(err.response.data))
    }

    const validate = (values) => {
        const errors = {}
        if(!values.firstName) {
            errors.firstName = "First Name Required"
        } 
        if(!values.lastName) {
            errors.lastName = "Last Name Required"
        }
        if(!values.email) {
            
        }

        if(!values.password) {
            errors.password = "Password Required"
        } else if (values.password.length < 8) {
            errors.password = "Password Must Be Longer Than 8 Characters"
        }
        if(!values.confirmPassword) {
            errors.confirmPassword = "Please Confirm Password"
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Please Check Password"
        }
        
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    values={formik.values.firstName}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    values={formik.values.lastName}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    name="username"
                    onChange={formik.handleChange}
                    values={formik.values.username}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    values={formik.values.email}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    values={formik.values.password}
                    placeholder="Password"
                />  
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    values={formik.values.confirmPassword}
                    placeholder="Confirm Password"
                />
                    <button type="submit" disabled={!formik.isValid}>Submit</button> 
            </form>
            <div>
                {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
            </div>
        </div>
    )
}

export default Register

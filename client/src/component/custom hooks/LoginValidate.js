import React, { useState } from 'react';
import { omit } from 'lodash'


// useLogin => Login validate custom hook

const initialState = {
    email: "",
    password: ""
}
function useLogin() {
    const [user, setUser] = useState(initialState)
    const [errors, setErrors] = useState({})

    // error printing logic
    const errPrint = (prop, msg) => {
        setErrors({ ...errors, [prop]: msg })
    }

    // validate function
    const validate = (event, name, value) => {
        switch (name) {
            case "email":
                if (value.length === 0) {
                    errPrint(name, "Email field must be filled")
                }
                else if (!new RegExp(/^[a-z0-9+_.-]+@[a-z\s]+\.[a-z\s]+$/).test(value)) {
                    errPrint(name, "Invalid Email")
                }
                else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;
            case "password":
                if (value.length === 0) {
                    errPrint(name, "Password field must be filled")
                }
                else if (value.length < 8) {
                    errPrint(name, "password must be at-least 8 characters")
                }
                else if (value.length > 16) {
                    errPrint(name, "password must be below 16 characters")
                }
                else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;
            default:
                break;
        }

    }

    //to read value from input
    const readValue = (e) => {
        // console.log(`event =`, e.target.name + " " + e.target.value);
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        validate(e, name, value);
    }



    return {
        errors,
        user,
        readValue,
        setUser,
        initialState
    }

}

export default useLogin
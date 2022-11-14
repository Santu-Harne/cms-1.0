import React, { useState } from 'react';
import { omit } from 'lodash'


// useForm => form validate custom hook

const initialState = {
    name: "",
    email: "",
    mobile: "",
    password: ""
}
function useRegister() {
    const [contact, setContact] = useState(initialState)
    const [errors, setErrors] = useState({})

    // error printing logic
    const errPrint = (prop, msg) => {
        setErrors({ ...errors, [prop]: msg })
    }

    // validate function
    const validate = (event, name, value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name, "Name field must be filled")
                }
                else if (value.length < 3) {
                    errPrint(name, "Name at-least have 3 letters")
                }
                else if (!new RegExp(/^[a-z A-Z\s]+$/).test(value)) {
                    errPrint(name, "Invalid Name")
                }
                else {
                    let newOb = omit(errors, name);
                    setErrors(newOb);
                }
                break;
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
            case "mobile":
                if (value.length === 0) {
                    errPrint(name, "Mobile field must be filled")
                }
                else if (value.length < 10) {
                    errPrint(name, "Mobile field must contain 10 digits")
                }
                else if (!new RegExp(/^[6-9]\d{9}$/).test(value)) {
                    errPrint(name, "Invalid Indian Mobile number")
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
        setContact({ ...contact, [name]: value })
        validate(e, name, value);
    }



    return {
        errors,
        contact,
        readValue,
        setContact,
        initialState
    }

}

export default useRegister
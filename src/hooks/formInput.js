import { useState } from "react";

const useFormInput = (IsValid) =>{
    const [enteredValue, setEnteredValue] = useState('');

    const enteredValueIsValid = IsValid(enteredValue);
    //const hasError = !enteredValueIsValid;

    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value);
    }

    const reset = () =>{
        setEnteredValue('');
    }

    return{
        value: enteredValue,
        IsValid: enteredValueIsValid,
        //hasError,
        valueChangeHandler,
        reset
    }
}

export default useFormInput;
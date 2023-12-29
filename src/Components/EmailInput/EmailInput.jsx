import React, { useState, useEffect } from "react";
import emailInputValidate from "./emailInputValidate";

const EmailInput = ({ addResultPropertie, allReset, setHasAllValid }) => {
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(true);
    const [validMessage, setValidMessage] = useState("");

    useEffect(() => {
        setEmail("");
        setValid(true);
        setHasAllValid(true);
        setValidMessage("");
    }, [allReset]);

    function blurHandler(e) {
        if (emailInputValidate(e.target.value).isValid) {
            setValid(true);
            setHasAllValid(true);
            setValidMessage("");
            addResultPropertie("email", e.target.value);
        } else {
            setValid(false);
            setHasAllValid(false);
            setValidMessage(emailInputValidate(e.target.value).validMessage);
            addResultPropertie("email", "");
        }
    }

    function changeHandler(e) {
        setEmail(e.target.value);
    }

    return (
        <>
            <label>
                <input
                    className={valid ? "" : "not-valid"}
                    required
                    type="email"
                    value={email}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                />
                <span>email</span>
            </label>
            <p className="valid-message">{validMessage}</p>
        </>
    );
};

export default EmailInput;

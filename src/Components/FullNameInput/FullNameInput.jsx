import React, { useEffect, useState } from "react";
import fullNameValidate from "./fullNameValidate";

const FullNameInput = ({ addResultPropertie, allReset, setHasAllValid }) => {
    const [fullName, setFullName] = useState("");
    const [valid, setValid] = useState(true);
    const [validMessage, setValidMessage] = useState("");

    useEffect(() => {
        setFullName("");
        setValid(true);
        setHasAllValid(true);
        setValidMessage("");
    }, [allReset]);

    function blurHandler(e) {
        if (fullNameValidate(e.target.value).isValid) {
            setValid(true);
            setHasAllValid(true);
            setValidMessage("");
            addResultPropertie("fullName", e.target.value);
        } else {
            setValid(false);
            setHasAllValid(false);
            setValidMessage(fullNameValidate(e.target.value).validMessage);
            addResultPropertie("fullName", "");
        }
    }
    function changeHandler(e) {
        setFullName(e.target.value);
    }

    return (
        <>
            <label>
                <input
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={fullName}
                    className={valid ? "" : "not-valid"}
                    type="text"
                />
                <span>Фамилия Имя Отчество</span>
            </label>
            <p className="valid-message">{validMessage}</p>
        </>
    );
};

export default FullNameInput;

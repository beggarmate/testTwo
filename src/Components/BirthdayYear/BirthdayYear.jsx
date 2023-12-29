import React, { useEffect, useState } from "react";
import birthdayYearValidate from "./birthdayYearValidate";

const BirthdayYear = ({ addResultPropertie, allReset, setHasAllValid }) => {
    const [birthdayYear, setBirthdayYear] = useState("");
    const [valid, setValid] = useState(true);
    const [validMessage, setValidMessage] = useState("");

    useEffect(() => {
        setBirthdayYear("");
        setValid(true);
        setHasAllValid(true);
        setValidMessage("");
    }, [allReset]);

    function blurHandler(e) {
        if (birthdayYearValidate(e.target.value).isValid) {
            setValid(true);
            setHasAllValid(true);
            setValidMessage("");
            addResultPropertie("birthdayYear", e.target.value);
            return;
        }
        setValid(false);
        setHasAllValid(false);
        setValidMessage(birthdayYearValidate(e.target.value).validMessage);
        addResultPropertie("birthdayYear", "");
    }

    function changeHandler(e) {
        setBirthdayYear(e.target.value);
    }

    return (
        <>
            <label>
                <input
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={birthdayYear}
                    className={valid ? "" : "not-valid"}
                    type="number"
                />
                <span>Год рождения</span>
            </label>
            <p className="valid-message">{validMessage}</p>
        </>
    );
};

export default BirthdayYear;

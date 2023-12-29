import React, { useState } from "react";

const WorkPlaceInput = ({
    id,
    result,
    validator,
    inputType,
    workPlaces,
    targetInput,
    setWorkPlaces,
    setHasAllValid,
}) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const [validMessage, setValidMessage] = useState("");

    function changeHandler(e) {
        setValue(e.target.value);
    }

    function blurHandler(e) {
        if (validator(e.target.value, result, id).hasValid) {
            setValid(true);
            setHasAllValid(true);
            setValidMessage("");
            setWorkPlaces(
                [...workPlaces].map((workPlace) => {
                    if (workPlace.id === id) {
                        return { ...workPlace, [targetInput]: e.target.value };
                    }
                    return workPlace;
                })
            );
        } else {
            setWorkPlaces(
                [...workPlaces].map((workPlace) => {
                    if (workPlace.id === id) {
                        return { ...workPlace, [targetInput]: "" };
                    }
                    return workPlace;
                })
            );
            setValid(false);
            setHasAllValid(false);
            setValidMessage(validator(e.target.value, result, id).validMessage);
        }
    }

    return (
        <>
            <label>
                <input
                    onBlur={blurHandler}
                    onChange={changeHandler}
                    value={value}
                    className={valid ? "" : "not-valid"}
                    type={inputType}
                />
            </label>
            <p className="valid-message">{validMessage}</p>
        </>
    );
};

export default WorkPlaceInput;

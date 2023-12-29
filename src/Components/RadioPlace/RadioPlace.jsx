import React, { useState, useEffect } from "react";

const RadioPlace = ({
    radioInfo,
    addResultPropertie,
    allReset,
    setHasAllValid,
}) => {
    const [selectedGender, setSelectedGender] = useState("");

    function changeHandler(e) {
        setSelectedGender(e.target.value);
        addResultPropertie("gender", e.target.value);
    }

    useEffect(() => {
        setSelectedGender("");
    }, [allReset]);

    return (
        <div>
            {radioInfo.map((radio, index) => {
                return (
                    <label key={index}>
                        <input
                            required
                            onChange={changeHandler}
                            type="radio"
                            name={radio.name}
                            value={radio.value}
                        />
                        <span>{radio.value}</span>
                    </label>
                );
            })}
        </div>
    );
};

export default RadioPlace;

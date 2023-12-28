import React from "react";

const MyRadio = ({ value, setUser, user, name }) => {
    return (
        <label>
            {value}
            <input
                type="radio"
                value={value}
                name={name}
                onChange={(e) => {
                    setUser({ ...user, gender: e.target.value });
                }}
            />
        </label>
    );
};

export default MyRadio;

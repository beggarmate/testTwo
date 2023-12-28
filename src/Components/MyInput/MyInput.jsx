import React, { useState, useEffect } from "react";

const MyInput = ({ children, user, setUser, inpType }) => {
    // const [inpValue, setInpValue] = useState(user.fullName);
    const [correct, setCorrect] = useState(false);

    return (
        <>
            <label>
                <input
                    onChange={(e) => {
                        setCorrect(false);
                        if (inpType === "FullName")
                            setUser({ ...user, fullName: e.target.value });
                        if (inpType === "BirthdayYear")
                            setUser({ ...user, birthdayYear: e.target.value });
                    }}
                    onBlur={(e) => {
                        setCorrect(true);
                        if (
                            inpType === "FullName" &&
                            e.target.value.split(" ").length >= 3
                        ) {
                            setCorrect(false);
                            setUser({ ...user, fullName: e.target.value });
                        }

                        if (
                            inpType === "BirthdayYear" &&
                            e.target.value >= 1900 &&
                            e.target.value < new Date().getFullYear() - 18
                        ) {
                            setCorrect(false);
                            setUser({ ...user, birthdayYear: e.target.value });
                        }
                    }}
                    value={
                        inpType === "FullName"
                            ? user.fullName
                            : inpType === "BirthdayYear"
                            ? user.birthdayYear
                            : ""
                    }
                    className={correct ? "not-valid" : null}
                    type={
                        inpType === "FullName"
                            ? "text"
                            : "BirthdayYear"
                            ? "number"
                            : "text"
                    }
                />
                {children}
                {correct ? (
                    <p style={{ color: "red" }}>
                        {inpType === "FullName"
                            ? "Поле должно содержать не меньше трёх слов"
                            : inpType === "BirthdayYear" &&
                              user.birthdayYear < 1900
                            ? "Год рождения не может быть меньше 1900"
                            : inpType === "BirthdayYear" &&
                              user.birthdayYear > new Date().getFullYear() - 18
                            ? "Возраст должен быть больше 18"
                            : null}
                    </p>
                ) : null}
            </label>
        </>
    );
};

export default MyInput;

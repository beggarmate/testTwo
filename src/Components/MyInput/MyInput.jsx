import React, { useState } from "react";

const MyInput = ({ children, user, setUser, inpType }) => {
    const [correct, setCorrect] = useState(false);

    function inputChangeHandler(e) {
        setCorrect(false);

        if (inpType === "FullName") {
            setUser({ ...user, fullName: e.target.value });
        }
        if (inpType === "BirthdayYear") {
            setUser({ ...user, birthdayYear: e.target.value });
        }
    }

    function inputBlurHandler(e) {
        setCorrect(true);

        if (inpType === "FullName" && e.target.value.split(" ").length >= 3) {
            setCorrect(false);
            setUser({ ...user, fullName: e.target.value });
        }

        if (
            inpType === "BirthdayYear" &&
            e.target.value >= 1900 &&
            e.target.value <= new Date().getFullYear() - 18
        ) {
            setCorrect(false);
            setUser({ ...user, birthdayYear: e.target.value });
        }
    }

    const inputValue =
        inpType === "FullName"
            ? user.fullName
            : inpType === "BirthdayYear"
            ? user.birthdayYear
            : "";
    const inputClassName = correct ? "not-valid" : null;
    const correctErrorMessage =
        inpType === "FullName" && user.fullName === ""
            ? "Обязательно к заполнению"
            : inpType === "FullName"
            ? "Поле должно содержать не меньше трёх слов"
            : inpType === "BirthdayYear" && user.birthdayYear === ""
            ? "Обязательно к заполнению"
            : inpType === "BirthdayYear" && user.birthdayYear < 1900
            ? "Год рождения не может быть меньше 1900"
            : inpType === "BirthdayYear" &&
              user.birthdayYear > new Date().getFullYear() - 18 &&
              user.birthdayYear <= new Date().getFullYear()
            ? "Возраст должен быть больше 18"
            : user.birthdayYear > new Date().getFullYear()
            ? "Дата рождения не может быть больше текущего года"
            : null;

    const inputType =
        inpType === "FullName" ? "text" : "BirthdayYear" ? "number" : "text";

    return (
        <>
            <label>
                <input
                    required
                    onChange={inputChangeHandler}
                    onBlur={inputBlurHandler}
                    value={inputValue}
                    className={inputClassName}
                    type={inputType}
                />
                {children}
                {correct ? (
                    <p style={{ color: "red" }}>{correctErrorMessage}</p>
                ) : null}
            </label>
        </>
    );
};

export default MyInput;

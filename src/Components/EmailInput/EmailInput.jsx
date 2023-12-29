import React, { useState } from "react";

const EmailInput = ({ setUser, user }) => {
    const [notValid, setNotValid] = useState(false);
    const validMessage =
        user.email.trim() === "" && notValid
            ? "Обязательно к заполнению"
            : !/\w{1,}@\w{1,}/.test(user.email)
            ? 'почта должна быть в формате "text@domain.ru" или "text@domain.com"'
            : "";

    function emailInputBlurHandler(e) {
        if (e.target.value.trim() === "") {
            setNotValid(true);
            return;
        }

        if (
            !/\w{1,}@\w{1,}/.test(e.target.value) ||
            !/(\.ru|\.com)$/.test(e.target.value)
        ) {
            setNotValid(true);
            return;
        }
        setNotValid(false);
    }

    return (
        <>
            <label>
                <input
                    className={notValid ? "not-valid" : ""}
                    required
                    type="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                    onBlur={emailInputBlurHandler}
                />
                email
            </label>
            <p style={{ color: "red" }}>{validMessage}</p>
        </>
    );
};

export default EmailInput;

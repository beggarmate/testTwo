import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyRadio from "../MyRadio/MyRadio";
import WorkPlaces from "../WorkPlaces/WorkPlaces";
import EmailInput from "../EmailInput/EmailInput";

export const defaultWorkPlace = {
    organization: "",
    startYear: "",
    endYear: "",
};
const emptyUser = {
    fullName: "",
    gender: "",
    birthdayYear: "",
    email: "",
    workPlaces: [],
};

const MyForm = () => {
    const [user, setUser] = useState(emptyUser);

    function formSubmitHandler(e) {
        e.preventDefault();
        if (user.fullName && user.birthdayYear && user.gender && user.email) {
            console.log(user);
        }
    }

    const buttonResetHandler = () => {
        setUser({
            ...emptyUser,
            workPlaces: [],
        });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <MyInput inpType="FullName" user={user} setUser={setUser}>
                Фамилия Имя Отчество
            </MyInput>
            <div>
                <MyRadio
                    user={user}
                    setUser={setUser}
                    name={"gender"}
                    value={"М"}
                />
                <MyRadio
                    user={user}
                    setUser={setUser}
                    name={"gender"}
                    value={"Ж"}
                />
            </div>
            <MyInput inpType="BirthdayYear" user={user} setUser={setUser}>
                Год рождения
            </MyInput>
            <EmailInput setUser={setUser} user={user} />
            <WorkPlaces user={user} setUser={setUser} />
            <button type="reset" onClick={buttonResetHandler}>
                Очистить
            </button>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default MyForm;

import React, { useEffect, useState } from "react";
import MyInput from "../MyInput/MyInput";
import MyRadio from "../MyRadio/MyRadio";
import WorkPlaces from "../WorkPlaces/WorkPlaces";

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
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (
                    user.fullName &&
                    user.birthdayYear &&
                    user.gender &&
                    user.email
                ) {
                    console.log(user);
                }
            }}
        >
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
            <label>
                <input
                    required
                    type="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                    onBlur={(e) => {
                        if (e.target.value.trim === "") {
                        }
                    }}
                />
                email
            </label>
            <WorkPlaces user={user} setUser={setUser} />
            <button
                type="reset"
                onClick={() => {
                    setUser({
                        ...emptyUser,
                        workPlaces: [],
                    });
                }}
            >
                Очистить
            </button>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default MyForm;

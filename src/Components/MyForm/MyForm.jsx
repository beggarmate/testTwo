import React, { useState } from "react";
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
    console.log("render form");
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(user);
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
                    type="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }}
                    onBlur={(e) => {
                        if (e.target.value.trim === "") {
                            e.target.className = "not-valid";
                        } else {
                            e.target.className = "";
                        }
                    }}
                />
                email
            </label>
            <WorkPlaces user={user} setUser={setUser} />
            <button
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

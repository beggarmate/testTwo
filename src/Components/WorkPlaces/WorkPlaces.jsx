import React from "react";
import { defaultWorkPlace } from "../MyForm/MyForm.jsx";

const WorkPlaces = ({ user, setUser }) => {
    function handleOrganizationChange(organization, index) {
        user.workPlaces[index].organization = organization;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function handleEndYearChange(endYear, index) {
        user.workPlaces[index].endYear = endYear;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function handleStartYearChange(startYear, index) {
        user.workPlaces[index].startYear = startYear;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function handleAddWorkplace() {
        setUser({
            ...user,
            workPlaces: [...user.workPlaces, { ...defaultWorkPlace }],
        });
    }

    function handleRemoveWorkplace(index) {
        setUser({
            ...user,
            workPlaces: user.workPlaces.filter(
                (elem, elemIndex) => elemIndex !== index
            ),
        });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Организация</th>
                        <th>Год начала работы</th>
                        <th>Год окончания работы</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {user.workPlaces.map((workplace, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    onBlur={(e) => {
                                        if (e.target.value.trim() === "") {
                                            e.target.className = "not-valid";
                                        } else {
                                            e.target.className = "";
                                        }
                                    }}
                                    value={workplace.organization}
                                    onChange={(e) =>
                                        handleOrganizationChange(
                                            e.target.value,
                                            index
                                        )
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    onBlur={(e) => {
                                        console.log(user.birthdayYear + 18);
                                        if (
                                            e.target.value < 1900 ||
                                            e.target.value <
                                                +user.birthdayYear + 18 ||
                                            e.target.value >=
                                                new Date().getFullYear()
                                        ) {
                                            e.target.className = "not-valid";
                                        } else {
                                            e.target.className = "";
                                        }
                                    }}
                                    value={workplace.startYear}
                                    onChange={(e) => {
                                        handleStartYearChange(
                                            e.target.value,
                                            index
                                        );
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    onBlur={(e) => {
                                        if (
                                            e.target.value <=
                                                user.workPlaces[index]
                                                    .startYear ||
                                            e.target.value >
                                                new Date().getFullYear()
                                        ) {
                                            e.target.className = "not-valid";
                                        } else {
                                            e.target.className = "";
                                        }
                                    }}
                                    value={workplace.endYear}
                                    onChange={(e) => {
                                        handleEndYearChange(
                                            e.target.value,
                                            index
                                        );
                                    }}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => handleRemoveWorkplace(index)}
                                >
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddWorkplace}>Добавить место работы</button>
        </>
    );
};

export default WorkPlaces;

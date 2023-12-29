import React, { useState } from "react";

const NewWorkPlace = ({ index, workplace, user, setUser }) => {
    const [correct, setCorrect] = useState({
        correctOrganization: true,
        correctStartYear: true,
        correctEndYear: true,
    });

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

    function handleRemoveWorkplace(index) {
        setUser({
            ...user,
            workPlaces: user.workPlaces.filter(
                (elem, elemIndex) => elemIndex !== index
            ),
        });
    }

    return (
        <tr key={index}>
            <td>
                <input
                    required
                    type="text"
                    className={!correct.correctOrganization ? "not-valid" : ""}
                    onBlur={(e) => {
                        setCorrect({
                            ...correct,
                            correctOrganization: true,
                        });
                    }}
                    value={workplace.organization}
                    onChange={(e) =>
                        handleOrganizationChange(e.target.value, index)
                    }
                />
                <p style={{ color: "red" }}>
                    {user.workPlaces[index].organization.trim() === "" &&
                    !correct.correctOrganization
                        ? "Поле обязательно к заполнению"
                        : ""}
                </p>
            </td>
            <td>
                <input
                    type="number"
                    className={!correct.correctStartYear ? "not-valid" : ""}
                    onBlur={(e) => {
                        if (
                            e.target.value < +user.birthdayYear + 18 ||
                            e.target.value > new Date().getFullYear()
                        ) {
                            setCorrect({
                                ...correct,
                                correctStartYear: false,
                            });
                        } else
                            setCorrect({
                                ...correct,
                                correctStartYear: true,
                            });
                    }}
                    value={workplace.startYear}
                    onChange={(e) => {
                        handleStartYearChange(e.target.value, index);
                    }}
                />
                <p style={{ color: "red" }}>
                    {user.workPlaces[index].startYear <
                        +user.birthdayYear + 18 && !correct.correctStartYear
                        ? "работу до 18 нельзя указывать"
                        : user.workPlaces[index].startYear >
                              new Date().getFullYear() &&
                          !correct.correctStartYear
                        ? "Нельзя указывать текущий год и следующие после него"
                        : ""}
                </p>
            </td>
            <td>
                <input
                    type="number"
                    className={!correct.correctEndYear ? "not-valid" : ""}
                    onBlur={(e) => {
                        if (
                            (e.target.value < 1900 && e.target.value !== "") ||
                            e.target.value < user.workPlaces[index].startYear ||
                            e.target.value > new Date().getFullYear()
                        ) {
                            setCorrect({
                                ...correct,
                                correctEndYear: false,
                            });
                        } else
                            setCorrect({
                                ...correct,
                                correctEndYear: true,
                            });
                    }}
                    value={workplace.endYear}
                    onChange={(e) => {
                        handleEndYearChange(e.target.value, index);
                    }}
                />
                <p style={{ color: "red" }}>
                    {user.workPlaces[index].endYear <
                        user.workPlaces[index].startYear &&
                    !correct.correctEndYear
                        ? "Год окончания работы не может быть раньше её начала"
                        : user.workPlaces[index].endYear >=
                              new Date().getFullYear() &&
                          !correct.correctEndYear
                        ? "Нельзя указывать год больше текущего"
                        : ""}
                </p>
            </td>
            <td>
                <button onClick={() => handleRemoveWorkplace(index)}>
                    Удалить
                </button>
            </td>
        </tr>
    );
};

export default NewWorkPlace;

import React, { useState } from "react";

const NewWorkPlace = ({ index, workplace, user, setUser }) => {
    const [correct, setCorrect] = useState({
        correctOrganization: true,
        correctStartYear: true,
        correctEndYear: true,
    });

    function inputOrganizationChangeHandler(organization, index) {
        user.workPlaces[index].organization = organization;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function inputEndYearChangeHandler(endYear, index) {
        user.workPlaces[index].endYear = endYear;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function inputStartYearChangeHandler(startYear, index) {
        user.workPlaces[index].startYear = startYear;
        setUser({
            ...user,
            workPlaces: user.workPlaces,
        });
    }

    function buttonRemoveWorkplaceHandler(index) {
        setUser({
            ...user,
            workPlaces: user.workPlaces.filter(
                (elem, elemIndex) => elemIndex !== index
            ),
        });
    }

    function inputOrganizationBlurHandler(e) {
        if (e.target.value === "") {
            setCorrect({
                ...correct,
                correctOrganization: false,
            });
            return;
        }
        setCorrect({
            ...correct,
            correctOrganization: true,
        });
    }

    function inputStartYearBlurHandler(e) {
        if (
            +e.target.value < +user.birthdayYear ||
            +e.target.value < +user.birthdayYear + 18 ||
            (+e.target.value >= +user.birthdayYear &&
                +e.target.value < +user.birthdayYear + 18) ||
            e.target.value >= new Date().getFullYear() ||
            e.target.value < 1900
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
    }

    function inputEndYearBlurHandler(e) {
        if (user.workPlaces[index].startYear && e.target.value === "") {
            setCorrect({
                ...correct,
                correctEndYear: true,
            });
            return;
        }
        if (
            (+e.target.value < 1900 && e.target.value !== "") ||
            +e.target.value < +user.workPlaces[index].startYear ||
            +e.target.value > new Date().getFullYear()
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
    }

    const errorValidOrganizationText =
        user.workPlaces[index].organization.trim() === "" &&
        !correct.correctOrganization
            ? "Поле обязательно к заполнению"
            : "";

    const errorValidStartYearText =
        user.workPlaces[index].startYear.trim() === "" &&
        !correct.correctStartYear
            ? "Поле обязательно к заполнению"
            : +user.workPlaces[index].startYear < 1900 &&
              !correct.correctStartYear
            ? "Начало работы не раньше 1900 года"
            : +user.workPlaces[index].startYear < +user.birthdayYear &&
              !correct.correctStartYear
            ? "начало работы не может быть раньше рождения"
            : +user.workPlaces[index].startYear >= +user.birthdayYear &&
              +user.workPlaces[index].startYear < +user.birthdayYear + 18 &&
              !correct.correctStartYear
            ? "работу до 18 нельзя указывать"
            : user.workPlaces[index].startYear >= new Date().getFullYear() &&
              !correct.correctStartYear
            ? "Нельзя указывать текущий год и следующие после него"
            : "";

    const errorValidEndYearText =
        !user.workPlaces[index].startYear.trim() && !correct.correctEndYear
            ? "Начало работы обязательно"
            : +user.workPlaces[index].endYear <
                  +user.workPlaces[index].startYear && !correct.correctEndYear
            ? "Год окончания работы не может быть раньше её начала"
            : +user.workPlaces[index].endYear < 1900 && !correct.correctEndYear
            ? "не раньше 1900"
            : +user.workPlaces[index].endYear >= new Date().getFullYear() &&
              !correct.correctEndYear
            ? "Нельзя указывать год больше текущего"
            : "";

    return (
        <tr key={index}>
            <td>
                <input
                    required
                    type="text"
                    className={!correct.correctOrganization ? "not-valid" : ""}
                    onBlur={inputOrganizationBlurHandler}
                    value={workplace.organization}
                    onChange={(e) =>
                        inputOrganizationChangeHandler(e.target.value, index)
                    }
                />
                <p style={{ color: "red" }}>{errorValidOrganizationText}</p>
            </td>
            <td>
                <input
                    type="number"
                    className={!correct.correctStartYear ? "not-valid" : ""}
                    onBlur={inputStartYearBlurHandler}
                    value={workplace.startYear}
                    onChange={(e) => {
                        inputStartYearChangeHandler(e.target.value, index);
                    }}
                />
                <p style={{ color: "red" }}>{errorValidStartYearText}</p>
            </td>
            <td>
                <input
                    type="number"
                    className={!correct.correctEndYear ? "not-valid" : ""}
                    onBlur={inputEndYearBlurHandler}
                    value={workplace.endYear}
                    onChange={(e) => {
                        inputEndYearChangeHandler(e.target.value, index);
                    }}
                />
                <p style={{ color: "red" }}>{errorValidEndYearText}</p>
            </td>
            <td>
                <button
                    type="button"
                    onClick={() => buttonRemoveWorkplaceHandler(index)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

export default NewWorkPlace;

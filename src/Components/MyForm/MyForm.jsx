import React, { useState } from "react";
import WorkPlaces from "../WorkPlaces/WorkPlaces";
import EmailInput from "../EmailInput/EmailInput";
import FullNameInput from "../FullNameInput/FullNameInput";
import RadioPlace from "../RadioPlace/RadioPlace";
import BirthdayYear from "../BirthdayYear/BirthdayYear";

const result = {
    fullName: "",
    birthdayYear: "",
    email: "",
    gender: "",
    workPlaces: [],
};

const MyForm = () => {
    const [allReset, setAllReset] = useState(false);
    const [hasAllValid, setHasAllValid] = useState(true);

    function addResultPropertie(propertie, value) {
        result[propertie] = value;
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        if (hasAllValid) console.log(result);
    }

    const buttonResetHandler = (e) => {
        setTimeout(() => {
            setAllReset(false);
            setAllReset(true);
        }, 0);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FullNameInput
                allReset={allReset}
                setHasAllValid={setHasAllValid}
                addResultPropertie={addResultPropertie}
            />
            <BirthdayYear
                allReset={allReset}
                setHasAllValid={setHasAllValid}
                addResultPropertie={addResultPropertie}
            />
            <RadioPlace
                allReset={allReset}
                radioInfo={[
                    { name: "gender", value: "М" },
                    { name: "gender", value: "Ж" },
                ]}
                setHasAllValid={setHasAllValid}
                addResultPropertie={addResultPropertie}
            />
            <EmailInput
                allReset={allReset}
                setHasAllValid={setHasAllValid}
                addResultPropertie={addResultPropertie}
            />
            <WorkPlaces
                result={result}
                allReset={allReset}
                setHasAllValid={setHasAllValid}
            />
            <button
                type="reset"
                onClick={buttonResetHandler}
            >
                Очистить
            </button>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default MyForm;

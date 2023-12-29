export default function endYearInputValidate(endYear, result, id) {
    if (endYear === "") {
        return {
            hasValid: true,
        };
    }
    if (+endYear < 1900) {
        return {
            hasValid: false,
            validMessage: "Не может быть меньше 1900!",
        };
    }
    if (+endYear < +result.birthdayYear) {
        return {
            hasValid: false,
            validMessage: "Не может быть раньше года рождения!",
        };
    }
    if (
        +endYear < result.workPlaces.find((elem) => +elem.id === +id).startYear
    ) {
        return {
            hasValid: false,
            validMessage: "Не может быть раньше начала работы!",
        };
    }

    if (+endYear > new Date().getFullYear()) {
        return {
            hasValid: false,
            validMessage: "Не может быть больше текущего года!",
        };
    }
    return { hasValid: true };
}

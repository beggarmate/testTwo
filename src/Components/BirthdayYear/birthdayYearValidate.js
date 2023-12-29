export default function birthdayYearValidate(birthdayYear) {
    if (birthdayYear === "") {
        return {
            isValid: false,
            validMessage: "Обязательно к заполнению!",
        };
    }

    if (+birthdayYear < 1900) {
        return {
            isValid: false,
            validMessage: "Год рождения не может быть меньше 1900",
        };
    }

    if (
        +birthdayYear > new Date().getFullYear() - 18 &&
        +birthdayYear <= new Date().getFullYear()
    ) {
        return {
            isValid: false,
            validMessage: "Возраст не меньше 18!",
        };
    }

    if (+birthdayYear > new Date().getFullYear()) {
        return {
            isValid: false,
            validMessage: "Год рождения не может быть больше текущего года!",
        };
    }

    return { isValid: true };
}

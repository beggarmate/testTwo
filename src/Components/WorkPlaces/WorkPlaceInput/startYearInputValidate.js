export default function startYearInputValidate(startYear, result) {
    if (!result.birthdayYear) {
        return {
            hasValid: false,
            validMessage: "Заполните поле с годом рождения!",
        };
    }

    if (startYear === "") {
        return {
            hasValid: false,
            validMessage: "Поле обязательно к заполнению!",
        };
    }

    if (+startYear < 1900) {
        return {
            hasValid: false,
            validMessage: "Не может быть меньше 1900!",
        };
    }

    if (+startYear < +result.birthdayYear) {
        return {
            hasValid: false,
            validMessage: "Не может быть раньше года рождения!",
        };
    }

    if (
        +startYear >= +result.birthdayYear &&
        +startYear < +result.birthdayYear + 18
    ) {
        return {
            hasValid: false,
            validMessage: "Нельзя указать работу до 18 лет!",
        };
    }

    if (+startYear > new Date().getFullYear()) {
        return {
            hasValid: false,
            validMessage: "Не может быть больше текущего года!",
        };
    }
    return { hasValid: true };
}

export default function fullNameValidate(fullName) {
    if (fullName.trim() === "") {
        return {
            isValid: false,
            validMessage: "Поле обязательно к заполнению!",
        };
    }
    if (fullName.replace(/ +/g, " ").trim().split(" ").length < 3) {
        return {
            isValid: false,
            validMessage: "Поле должно состоять минимум из 3 слов",
        };
    }
    return { isValid: true };
}

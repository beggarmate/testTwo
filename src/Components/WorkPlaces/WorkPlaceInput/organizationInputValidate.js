export default function organizationInputValidate(organizationName) {
    if (organizationName.trim() === "") {
        return {
            hasValid: false,
            validMessage: "Поле обязательно к заполнению!",
        };
    }
    return { hasValid: true };
}

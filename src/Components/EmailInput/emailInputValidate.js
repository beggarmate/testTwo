export default function emailInputValidate(email) {
    if (email.trim() === "") {
        return { isValid: false, validMessage: "Обязательно к заполнению!" };
    }

    if (!/\w{1,}@\w{1,}(\.ru|\.com)$/.test(email.trim())) {
        return {
            isValid: false,
            validMessage:
                'почта должна быть в формате "text@domain.ru" или "text@domain.com"',
        };
    }

    return { isValid: true };
}

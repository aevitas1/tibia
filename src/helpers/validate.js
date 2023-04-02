export const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
}

export const containsOnlyLetters = (str) => {
    return /^[a-zA-Z]+$/.test(str);
}
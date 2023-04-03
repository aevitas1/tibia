export const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
}

export const containsOnlyLetters = (str) => {
    return /^[a-zA-Z]+$/.test(str);
}


// Add character validators
// Check if input values are correct (letters, numbers)
export const validateInput = (value, value1) => {
    let error;
    if (value === "letters") {
        if (value1 === "") {
            error = "You must fill in this field"
        } else if (!containsOnlyLetters(value1)) {
            error = "Can't contain numbers";
        }
    } else if (value === "numbers") {
        if (value1 === "") {
            error = "You must fill in this field"
        } else if (!containsOnlyNumbers(value1)) {
            error = "Can't contain letters";
        }
    }
    return error;
};

// Check if all fields have been filled
export const validateVocations = (value, value2, value3, value4, value5, value6) => {
    if (value === "druid" || value === "sorcerer") {
        if (value2 === undefined || value3 === undefined || value4 === undefined) {
            return false;
        } else {
            return true;
        }
    } else if (value === "paladin" || value === "knight") {
        if (value2 === undefined || value3 === undefined || value4 === undefined || value5 === undefined || value6 === undefined) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}
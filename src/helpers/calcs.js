export const calcExperience = (level) => {
    let currentLevelExp = 0;
    currentLevelExp =
        (50 * level * level * level) / 3 -
        100 * level * level +
        (850 * level) / 3 -
        200;

    return currentLevelExp;
}

export const calcExperienceLoss = (level, blessing, promoted) => {
    let expLoss;
    let expCalc;
    let percent;
    let blessingPercent = blessing * 0.08;

    if (level <= 23) {
        percent = 0.1;
        if (promoted) {
            percent = parseFloat(percent) - 0.03;
        }
        blessingPercent = blessing * 0.01;
        if (blessing >= 5) {
            blessingPercent = 0.05;
        }
        percent = parseFloat(percent) - blessingPercent;
        expCalc = (50 * ((parseFloat(level) - 1) * (parseFloat(level) - 1) * (parseFloat(level) - 1)) - 150 * ((parseFloat(level) - 1) * (parseFloat(level) - 1)) + (400 * (parseFloat(level) - 1))) / 3;
        expLoss = expCalc * percent;
    }
    if (level > 23) {
        percent = 0;
        let expCalc = (50 * ((level) * (level) - 5 * (level) + 8)) * ((parseFloat(level) + 49) / 100);
        if (promoted) {
            percent = parseFloat(percent) + 0.3;
        }
        percent = parseFloat(percent) + blessingPercent;
        percent = 1 - parseFloat(percent);
        console.log(percent)
        expLoss = expCalc * percent;
    }
    if (level <= 0) {
        expLoss = 0;
    }
    return expLoss;
}

export const calcBlessings = (level, blessing, type) => {
    let price = 0;
    let base = 2000;
    let baseEnhanced = 2600;
    let blessingCalc = base + ((level - 30) * 200);
    let enhancedBlessingCalc = baseEnhanced + ((level - 30) * 260);
    let highBlessingCalc = 20000 + ((level - 120) * 75);
    let enhancedHighBlessingCalc = 26000 + ((level - 120) * 100);

    if (type === "default") {
        if (level <= 30) {
            return price = (blessing * base);
        }
        if (level <= 120) {
            return price = blessing * blessingCalc;
        }
        if (level > 120) {
            return price = blessing * highBlessingCalc;
        }
        return price;
    } else if (type === "enhanced") {
        if (level <= 30) {
            return price = blessing * baseEnhanced;
        }
        if (level <= 120) {
            return price = blessing * enhancedBlessingCalc;
        }
        if (level > 120) {
            return price = blessing * enhancedHighBlessingCalc;
        }
        return price;
    }
}

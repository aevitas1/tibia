export const calcExperience = (level) => {
    let currentLevelExp = 0;
    currentLevelExp =
        (50 * level * level * level) / 3 -
        100 * level * level +
        (850 * level) / 3 -
        200;

    return currentLevelExp;
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
    }
}

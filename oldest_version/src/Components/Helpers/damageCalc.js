function dmgCalc(level, val1, skill, attack, val2) {
    return ((Math.floor(Number(level) * 0.2) + Math.round(Number(val1) * Number(skill * attack))) + Number(val2)).toFixed(0)
}

function calcMagic(level, val1, magic, val2) {
    return (Math.floor((Number(level) * 0.2) + Math.round(Number(val1) * Number(magic)) + (Number(val2))))
}

export {dmgCalc, calcMagic}

import './index.scss';
import {Table, Text} from '@nextui-org/react';
import {useContext} from 'react';
import {DataContext} from "../../data/DataProvider";
import {dmgCalc, calcMagic} from "../Helpers/damageCalc";

const VocationSpells = () => {
    const {
        data,
        level,
        magiclvl,
        skill,
        checked,
        attack
    } = useContext(DataContext);


    return (
        checked === 'paladin' ? (
            <>
                <Text h6 css={{textAlign: "center"}}>Paladin attack spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-damage</Table.Column>
                        <Table.Column>Max-damage</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Dmg/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.paladin.damage.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>


                <Text h6 css={{textAlign: "center"}}>Paladin healing spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-heal</Table.Column>
                        <Table.Column>Max-heal</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Healing/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.paladin.healing.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </>
        ) : checked === 'knight' ? (
            <>
                <Text h6 css={{textAlign: "center"}}>Knight attack spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-damage</Table.Column>
                        <Table.Column>Max-damage</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Dmg/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.knight.damage.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{Math.round(dmgCalc(level, spell.xMin, skill, attack, spell.yMin) * spell.balance)}</Table.Cell>
                                <Table.Cell>{Math.round(dmgCalc(level, spell.xMax, skill, attack, spell.yMax) * spell.balance)}</Table.Cell>
                                <Table.Cell>{Math.round((
                                    Math.round(dmgCalc(level, spell.xMin, skill, attack, spell.yMin) * spell.balance)
                                    +
                                    Math.round(dmgCalc(level, spell.xMax, skill, attack, spell.yMax) * spell.balance)
                                ) / 2)}</Table.Cell>
                                <Table.Cell>{
                                    (Math.ceil(Math.round((dmgCalc(level, spell.xMin, skill, attack, spell.yMin) * spell.balance) + (dmgCalc(level, spell.xMax, skill, attack, spell.yMax) * spell.balance)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>


                <Text h6 css={{textAlign: "center"}}>Knight healing spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-heal</Table.Column>
                        <Table.Column>Max-heal</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Healing/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.knight.healing.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </>
        ) : checked === 'druid' ? (
            <>
                <Text h6 css={{textAlign: "center"}}>Druid attack spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-damage</Table.Column>
                        <Table.Column>Max-damage</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Dmg/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.druid.damage.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>


                <Text h6 css={{textAlign: "center"}}>Druid healing spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-heal</Table.Column>
                        <Table.Column>Max-heal</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Healing/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.druid.healing.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </>
        ) : checked === 'sorcerer' ? (
            <>
                <Text h6 css={{textAlign: "center"}}>Sorcerer attack spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-damage</Table.Column>
                        <Table.Column>Max-damage</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Dmg/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.sorcerer.damage.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>


                <Text h6 css={{textAlign: "center"}}>Sorcerer healing spells</Text>
                <Table selectionMode="single">
                    <Table.Header>
                        <Table.Column>Spell</Table.Column>
                        <Table.Column>Min-heal</Table.Column>
                        <Table.Column>Max-heal</Table.Column>
                        <Table.Column>Average</Table.Column>
                        <Table.Column>Healing/mana</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.vocations.sorcerer.healing.map((spell) => (
                            <Table.Row key={spell.name}>
                                <Table.Cell>{spell.name}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMin, magiclvl, spell.yMin)}</Table.Cell>
                                <Table.Cell>{calcMagic(level, spell.xMax, magiclvl, spell.yMax)}</Table.Cell>
                                <Table.Cell>{Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2)}</Table.Cell>
                                <Table.Cell>{(Math.ceil(Math.round(calcMagic(level, spell.xMin, magiclvl, spell.yMin) + calcMagic(level, spell.xMax, magiclvl, spell.yMax)) / 2) / Number(spell.mana)).toFixed(1)} :
                                    1</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </>
        ) : ''
    )
}


export default VocationSpells;
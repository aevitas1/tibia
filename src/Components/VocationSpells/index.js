import './index.scss';
import {Table, Text} from '@nextui-org/react';
import {useContext} from 'react';
import {DataContext} from "../../data/DataProvider";


const VocationSpells = () => {
    const {
        data,
        level,
        magiclvl
    } = useContext(DataContext);
    return (
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
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))))}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax))))}</Table.Cell>
                            <Table.Cell>{Math.ceil((((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))) + ((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax)))) / 2)}</Table.Cell>
                            <Table.Cell>{Math.floor(((((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))) + ((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax)))) / 2) / Number(spell.mana))}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>


            <Text h6 css={{textAlign: "center"}}>Paladin healing spells</Text>
            <Table selectionMode="single">
                <Table.Header>
                    <Table.Column>Spell</Table.Column>
                    <Table.Column>Min-damage</Table.Column>
                    <Table.Column>Max-damage</Table.Column>
                    <Table.Column>Average</Table.Column>
                    <Table.Column>Dmg/mana</Table.Column>
                </Table.Header>
                <Table.Body>
                    {data.vocations.paladin.healing.map((spell) => (
                        <Table.Row key={spell.name}>
                            <Table.Cell>{spell.name}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))))}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax))))}</Table.Cell>
                            <Table.Cell>{Math.ceil((((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))) + ((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax)))) / 2)}</Table.Cell>
                            <Table.Cell>{Math.floor(((((Number(level) * 0.2) + (Number(spell.xMin) * Number(magiclvl)) + (Number(spell.yMin))) + ((Number(level) * 0.2) + (Number(spell.xMax) * Number(magiclvl)) + (Number(spell.yMax)))) / 2) / Number(spell.mana))}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    )
}


export default VocationSpells;
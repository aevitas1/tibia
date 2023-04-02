import './index.scss';
import {Table, Text} from '@nextui-org/react';
import {useContext} from 'react';
import {DataContext} from "../../data/DataProvider";

const Runes = () => {
    const {
        data,
        level,
        magiclvl
    } = useContext(DataContext);

    return (
        <>
            <Text h6 css={{textAlign: "center"}}>Attack runes</Text>
            <Table selectionMode="single">
                <Table.Header>
                    <Table.Column>Rune</Table.Column>
                    <Table.Column>Min-damage</Table.Column>
                    <Table.Column>Max-damage</Table.Column>
                    <Table.Column>Average</Table.Column>
                    <Table.Column>Price</Table.Column>
                    <Table.Column>Dmg/gp</Table.Column>
                </Table.Header>
                <Table.Body>
                    {data.runes.attack.map((rune) => (
                        <Table.Row key={rune.name}>
                            <Table.Cell>{rune.name}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))))}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax))))}</Table.Cell>
                            <Table.Cell>{Math.ceil((((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))) + ((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax)))) / 2)}</Table.Cell>
                            <Table.Cell>{rune.price}</Table.Cell>
                            <Table.Cell>{((((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))) + ((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax)))) / 2 / Number(rune.price)).toFixed(1)} :
                                1</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <Text h6 css={{textAlign: "center"}}>Healing runes</Text>
            <Table selectionMode="single">
                <Table.Header>
                    <Table.Column>Rune</Table.Column>
                    <Table.Column>Min-heal</Table.Column>
                    <Table.Column>Max-heal</Table.Column>
                    <Table.Column>Average</Table.Column>
                    <Table.Column>Price</Table.Column>
                    <Table.Column>Heal/gp</Table.Column>
                </Table.Header>
                <Table.Body>
                    {data.runes.healing.map((rune) => (
                        <Table.Row key={rune.name}>
                            <Table.Cell>{rune.name}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))))}</Table.Cell>
                            <Table.Cell>{(Math.floor((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax))))}</Table.Cell>
                            <Table.Cell>{Math.ceil((((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))) + ((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax)))) / 2)}</Table.Cell>
                            <Table.Cell>{rune.price}</Table.Cell>
                            <Table.Cell>{((((Number(level) * 0.2) + (Number(rune.xMin) * Number(magiclvl)) + (Number(rune.yMin))) + ((Number(level) * 0.2) + (Number(rune.xMax) * Number(magiclvl)) + (Number(rune.yMax)))) / 2 / Number(rune.price)).toFixed(1)} :
                                1</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    )
}

export default Runes;
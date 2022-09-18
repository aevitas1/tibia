import './index.scss';
import {Container, Row, Text, Spacer, Collapse} from '@nextui-org/react';
import {useContext} from 'react';
import {DataContext} from "../../data/DataProvider";
import RadioButtons from "../RadioButtons";
import CharStats from "../CharStats";
import Runes from "../Runes";
import VocationSpells from '../VocationSpells';
import CapitalizeFirstLetter from "../Helpers/CapitalizeFirstLetter";

const DamageCalc = () => {
    const {data, checked, level, magiclvl, skill, attack} = useContext(DataContext);


    return data.length === 0 ? ('') : (
        <>
            <Container display="flex" justify="center">
                <Text h4 css={{textAlign: "center"}}>Damage Calculator</Text>
                <Row justify="center">
                    {/*Select a vocation*/}
                    <RadioButtons/>
                    <Spacer y={4}/>
                </Row>
                {/*Insert character stats*/}
                <CharStats/>
                {(checked === 'paladin' && level > 0 && magiclvl > 0 && skill > 0 && attack > 0) || (checked === 'knight' && level > 0 && magiclvl > 0 && skill > 0 && attack > 0) || (checked === 'sorcerer' && level > 0 && magiclvl > 0) || (checked === 'druid' && level > 0 && magiclvl > 0) ?
                    <>
                        <Spacer y={1}/>
                        <Text h4 css={{textAlign: "center"}}>These values are without powerful crit / forge upgrades for
                            now.</Text>
                        <Spacer y={1}/>
                        <Collapse.Group>
                            {/*Runes*/}
                            <Collapse title="Runes">
                                <Runes/>
                            </Collapse>
                            {/*Voc spells*/}
                            <Collapse title={CapitalizeFirstLetter(checked) + ' spells'}>
                                <VocationSpells/>
                            </Collapse>
                        </Collapse.Group>
                    </>
                    : ''
                }
            </Container>
        </>
    )
}

export default DamageCalc;
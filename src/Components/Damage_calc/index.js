import './index.scss';
import {Container, Row, Text, Spacer, Collapse} from '@nextui-org/react';
import {useContext} from 'react';
import {DataContext} from "../../data/DataProvider";
import RadioButtons from "../RadioButtons";
import CharStats from "../CharStats";
import Runes from "../Runes";
import VocationSpells from '../VocationSpells';

const DamageCalc = () => {
    const {data} = useContext(DataContext);


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
                <Collapse.Group>
                    {/*Runes*/}
                    <Collapse title="Runes">
                        <Runes/>
                    </Collapse>
                    {/*Voc spells*/}
                    <Collapse title="Vocation Spells">
                        <VocationSpells/>
                    </Collapse>
                </Collapse.Group>
            </Container>
        </>
    )
}

export default DamageCalc;
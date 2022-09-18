import './index.scss';
import {Input, Row, Spacer} from "@nextui-org/react";
import {useContext} from 'react';
import {DataContext} from '../../data/DataProvider';

const CharStats = () => {
    const {checked, setLevel, setMagiclvl, setSkill, setAttack} = useContext(DataContext);

    return (
        <>
            <Row justify="center">
                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Level" width="120px"
                       onChange={(e) => {
                           setLevel(e.target.value)
                       }}/>
                <Spacer x={1}/>
                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Magic level" width="120px"
                       onChange={(e) => {
                           setMagiclvl(e.target.value)
                       }}/>
                {checked === 'knight' || checked === 'paladin' ? (
                    <>
                        <Spacer x={1}/>
                        <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Skill" width="120px"
                               onChange={(e) => {
                                   setSkill(e.target.value)
                               }}/>
                        <Spacer x={1}/>
                        <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Attack" width="120px"
                               onChange={(e) => {
                                   setAttack(e.target.value)
                               }}/>
                    </>
                ) : ''}
            </Row>
        </>
    )
}


export default CharStats;
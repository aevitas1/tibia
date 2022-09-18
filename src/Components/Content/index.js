import './index.scss';
import LevelShare from "../Level_share";
import DamageCalc from '../Damage_calc';
import {Spacer, Text} from '@nextui-org/react';

const Content = () => {
    return (
        <>
            <Text h4 css={{textAlign: "center"}}>Party share range</Text>
            <LevelShare/>
            <Spacer y={4}/>
            <DamageCalc/>
        </>
    )
}

export default Content;
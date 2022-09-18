import './index.scss';
import {Radio} from "@nextui-org/react";
import {useContext} from 'react';
import {DataContext} from '../../data/DataProvider';

const RadioButtons = () => {
    const {setChecked} = useContext(DataContext);
    return (
        <>
            <Radio.Group orientation="horizontal" label="Select a vocation" onChange={setChecked}>
                <Radio value="knight" color="primary" aria-label="knight">
                    Knight
                </Radio>
                <Radio value="paladin" color="primary" aria-label="paladin">
                    Paladin
                </Radio>
                <Radio value="sorcerer" color="primary" aria-label="sorcerer">
                    Sorcerer
                </Radio>
                <Radio value="druid" color="primary" aria-label="druid">
                    Druid
                </Radio>
            </Radio.Group>
        </>
    )
}


export default RadioButtons;
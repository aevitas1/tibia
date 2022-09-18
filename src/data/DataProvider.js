import {createContext, useState, useEffect} from 'react';
import json from './data.json';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState([]);
    const [checked, setChecked] = useState('');
    const [level, setLevel] = useState('');
    const [magiclvl, setMagiclvl] = useState('');
    const [skill, setSkill] = useState('');
    const [attack, setAttack] = useState('');

    useEffect(() => {
        if (json) {
            setData(json)
        }
    }, [])


    return (
        <DataContext.Provider
            value={{
                data,
                checked,
                setChecked,
                level,
                setLevel,
                magiclvl,
                setMagiclvl,
                skill,
                setSkill,
                attack,
                setAttack
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}
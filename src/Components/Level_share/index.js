import './index.scss';
import {Input, Container, Row, Spacer} from "@nextui-org/react";
import {useState} from 'react';

const LevelShare = () => {

    const [level, setLevel] = useState();
    const regexp = /^[[0-9]\b]+$/;

    const handleChange = event => {
        let value = event.target.value;
        if (value === '' || regexp.test(value)) {
            return
        }
        setLevel(value);
    };

    console.log(level, typeof level, Number(level))


    return (
        <>
            <Container display="flex" justify="center">
                <Row justify="center">
                    <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Fill in your level"
                           width="170px" onChange={handleChange} value={level}/>
                </Row>
                <Spacer y={1}/>
                <Row justify="center">
                    <Input labelLeft="Min level: " width="150px" pl="3" readOnly placeholder="0" initialValue="readOnly"
                           aria-label="min-level" value={isNaN(level) ? '-' : parseInt(Math.ceil(level * 2 / 3))}/>
                    <Spacer x={1}/>
                    <Input labelLeft="Max level: " width="150px" readOnly placeholder="0" initialValue="readOnly"
                           aria-label="max-level" value={isNaN(level) ? '-' : parseInt(Math.ceil(level * 3 / 2))}/>
                </Row>
            </Container>
        </>
    )
}

export default LevelShare;
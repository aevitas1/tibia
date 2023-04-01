import { useState } from 'react';
import { Input, Container, Spacer, Text, Row, Button, Dropdown } from '@nextui-org/react';

const AddChar = () => {
    const [newChar, setNewChar] = useState({
        charlevel: '',
        charmagic: '',
        charvocation: '',
        charskill: '',
        charattack: '',
    });


    const handleClick = () => {
        if (localStorage.getItem('character')) {
            localStorage.setItem(`character${localStorage.length + 1}`, JSON.stringify(newChar))
        } else {
            localStorage.setItem('character', JSON.stringify(newChar))
        }
    }

    return (<>
        <Container display="flex" justify="center">
            <Text h4 css={{ textAlign: "center" }}>Add a new char</Text>
            <Spacer y={2} />
            <Row justify="center">
                <Dropdown >
                    <Dropdown.Button flat css={{ color: '#fff' }}>{newChar.charvocation !== '' ? newChar.charvocation : 'Select'}
                    </Dropdown.Button>
                    <Dropdown.Menu onAction={(e) => { setNewChar({ ...newChar, charvocation: e }) }}>
                        <Dropdown.Item key="knight">Knight</Dropdown.Item>
                        <Dropdown.Item key="paladin">Paladin</Dropdown.Item>
                        <Dropdown.Item key="sorcerer">Sorcerer</Dropdown.Item>
                        <Dropdown.Item key="druid">Druid</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

            <Row justify="center" css={{ gap: '1.5rem' }}>
                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Level" width="80px"
                    onChange={(e) => {
                        setNewChar({ ...newChar, charlevel: e.target.value })
                    }} aria-label='level' />

                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Magic" width="80px"
                    onChange={(e) => {
                        setNewChar({ ...newChar, charmagic: e.target.value })
                    }} aria-label='Magic' />

                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Skill" width="80px"
                    onChange={(e) => {
                        setNewChar({ ...newChar, charskill: e.target.value })
                    }} aria-label='Skill' />

                <Input type="text" pattern="[0-9]*" clearable underlined placeholder="Attack" width="80px"
                    onChange={(e) => {
                        setNewChar({ ...newChar, charattack: e.target.value })
                    }} aria-label='Attack' />
                <Spacer y={4} />
            </Row>
            <Row justify="center">
                <Button flat onPress={handleClick}>Test</Button>
            </Row>
        </Container>
    </>)
}


export default AddChar;
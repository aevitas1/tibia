import './index.scss';
import {useTheme as useNextTheme} from 'next-themes'
import {Navbar, Text, Spacer, Switch, useTheme} from "@nextui-org/react";
import {BsSun, BsMoon} from 'react-icons/bs';

const Navigation = () => {
    const {setTheme} = useNextTheme();
    const {isDark} = useTheme();

    return (
        <>
            <Navbar shouldHideOnScroll isCompact isBordered variant="floating">
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        Tibia Calculators
                    </Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <div>
                        <Switch
                            checked={isDark}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            icon={isDark ? <BsSun/> : <BsMoon/>}
                            size="xl"
                        />
                    </div>

                </Navbar.Content>
            </Navbar>
            <Spacer y={2.5}/>
        </>
    )
}

export default Navigation;
import './index.scss';
import { useTheme as useNextTheme } from 'next-themes'
import { Navbar, Text, Spacer, Switch, useTheme, Image } from "@nextui-org/react";
import { BsSun, BsMoon } from 'react-icons/bs';
import Logo from '../../assets/logo.png'

const Navigation = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();

    return (
        <>
            <Navbar shouldHideOnScroll isCompact isBordered variant="floating">
                <Navbar.Toggle showIn='xs' aria-label='toggle navigation' />
                <Navbar.Collapse css={{ overflowY: 'hidden' }}>
                    <Navbar.CollapseItem>
                        <Navbar.Content css={{ flexDirection: 'column', overflowY: 'hidden', '&:scrollbar': { display: 'none' } }}>
                            <Navbar.Link>Test</Navbar.Link>
                            <Navbar.Link>Test</Navbar.Link>
                            <Navbar.Link>Test</Navbar.Link>
                            <Navbar.Link>Test</Navbar.Link>
                        </Navbar.Content>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>

                <Navbar.Content>
                    <Navbar.Brand>
                        <Image src={Logo} css={{ height: '1.5rem' }} />
                        <Text b color="inherit" css={{ paddingLeft: '0.5rem' }}>Calculators
                        </Text>
                    </Navbar.Brand>
                </Navbar.Content>
                <Navbar.Content hideIn='xs'>
                    <Navbar.Link>Test</Navbar.Link>
                    <Navbar.Link>Test</Navbar.Link>
                    <Navbar.Link>Test</Navbar.Link>
                    <Navbar.Link>Test</Navbar.Link>
                    <div>
                        <Switch
                            checked={isDark}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                            icon={isDark ? <BsSun /> : <BsMoon />}
                            size="sm"
                        />
                    </div>
                </Navbar.Content>
            </Navbar>
            <Spacer y={2.5} />
        </>
    )
}

export default Navigation;
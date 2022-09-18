import './index.scss';
import {Spacer, Container, Text} from "@nextui-org/react";

const Footer = () => {
    let d = new Date();
    let currentYear = d.getFullYear();

    return (
        <>
            <Spacer y={1}/>
            <Container fluid>
                <Container display="flex" justify="center">
                    <Text>&copy; Stephan van der Meijden {currentYear}</Text>
                </Container>
            </Container>
        </>
    )
}

export default Footer;

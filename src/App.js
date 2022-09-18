import './App.scss';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Content from "./Components/Content";
import {Container} from "@nextui-org/react";
import {DataProvider} from "./data/DataProvider";

function App() {
    return (
        <DataProvider>
            <Container xl>
                <Navigation/>
                <Content/>
                <Footer/>
            </Container>
        </DataProvider>
    );
}

export default App;
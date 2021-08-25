import { Header } from "./blocks/header/Header";
import { Container } from "./styled-component/shared.components";
import { MainBlock } from "./blocks/main-block/main-block";

function App() {
    return (
        <Container>
            <Header />
            <MainBlock />
        </Container>
    );
}

export default App;

import Card from "./components/layouts/Card";
import Container from "./components/layouts/Container";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
    return (
        <ThemeContextProvider>
            <Container>
                <Card />
            </Container>
        </ThemeContextProvider>
    );
};

export default App;

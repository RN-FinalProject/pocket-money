import React from "react";
import TabNavigation from "./components/Tab";
import styled from 'styled-components/native';

const Container = styled.View `
flex: 1;
background-color: #ffffff;
justify-content: center;
align-items: center;
`;

const App = () => {
    return (
        <Container>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </Container>
        
    )
}

export default App;
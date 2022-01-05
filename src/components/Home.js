import React from 'react';
import styled from 'styled-components'
import Section from "./Section";
import {carInfo} from "../assets/carInfo";

const Home = () => {
    return (
        <Container>
            {carInfo.map(item => <Section key={item.id} title={item.title} desc={item.description} image={item.image}
                                          rest={item}/>)}
         </Container>
    );
};

export default Home;

const Container = styled.div`
  height: 100vh;

`;
import React from 'react';
import styled, {css} from 'styled-components';
import Fade from 'react-reveal/Fade'

const Section = ({title, desc, image}) => {
    return (
        <Wrap bgImage={image}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </ItemText>
            </Fade>

            <ButtonGroup>
                <Fade bottom>
                    <SectionButton>
                        Custom Order
                    </SectionButton>
                    <SectionButton secondary>
                        Existing Inventory
                    </SectionButton>
                </Fade>
            </ButtonGroup>

            <DownArrow src={`/images/down-arrow.svg`}/>

        </Wrap>
    );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  //background-image: url("/images/model-s.jpg");
  background-image: ${props => `url("/images/${props.bgImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  border: none;
  cursor: pointer;
  margin: 8px;

  ${({secondary}) => secondary && css`
    background: white;
    opacity: 0.65;
    color: black;
  `}
`;

const DownArrow = styled.img`
  //margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;


import React, {useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from '../features/car/carSlice';
import {useSelector} from "react-redux";

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt={`logo`}/>
            </a>
            <Menu>
                {cars && cars.map((item, index) => <p key={index}><a href="#">{item}</a></p>)}
            </Menu>
            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Tesla Account</a></p>
                <CustomMenu onClick={() => setToggleMenu(prevState => !prevState)}/>

            </RightMenu>

            <BurgerNav show={toggleMenu}>
                <CloseWrapper>
                    <CustomCloseButton onClick={() => setToggleMenu(prevState => !prevState)}/>
                </CloseWrapper>
                {cars && cars.map((item, index) => <li key={index}>
                    <a href="#">{item}</a>
                </li>)}
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-in</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
                <li>
                    <a href="#">Roadaster</a>
                </li>
                <li>
                    <a href="#">Semi</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
            </BurgerNav>

        </Container>
    );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled(Menu)`
  @media screen and (max-width: 768px) {
    display: flex;
  }

  p {
    margin-right: 10px;
    padding-top: 0;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.ul`
  list-style: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${({show}) => show ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.4s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomCloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`;
import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/go.jpg';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
               <img src={logo} alt='' />
            </div>
            <ul>
                <li>
                    <a href=" ">Home</a>
                </li>
                <li>
                    <a href=" ">Features</a>
                </li>
                <li>
                    <a href=" ">Pricing</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 8vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
    .logo{
        position: relative;
        margin-top: 12px;
    }

    .logo img{
        width: 70px;
        height: 70px;
        border: 1px solid #eee;
        border-radius: 50%;
    } 
`;
export default Navigation

import styled, { keyframes } from 'styled-components';
import { device } from '../../Styles/global';
import { NavLink } from 'react-router-dom';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} { 
        grid-template-columns: repeat(4, 1fr);
        padding: 1rem 5rem;
    }
`;

export const StyledUL = styled.ul`
    text-decoration: none;
    padding: 0;
`;

export const StyledLi = styled.li`
    padding: .5rem;
    list-style-type: none;
    position: relative;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;

    &:hover { 
        text-decoration: none;
    }
`;

export const Img = styled.img`
    height: 15rem;
    width: 13rem;
    border-radius: .2rem;
`;

const skeleton = keyframes`
     0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
`;
export const Skeleton = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .65;
    animation: ${skeleton} 1s linear infinite alternate;

    @media ${device.laptop} {
        width: 20rem;
        height: 20rem;
        padding: .5rem;
    }
`;

export const H3 = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1rem; 
    color: #0C0032;
    padding: .1rem;
`;

export const Overlay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.8); 
    color: #C5C6C7;
    width: 13rem;
    height: 16rem;
    transition: .5s ease;
    opacity:0;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 1;
    }
`;
import styled, 
    { StyledComponent } from 'styled-components';
import { device } from '../../Styles/global';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Container: StyledComponent<"div", {}> = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const Wrapper: StyledComponent<"section", never> = styled.section`
    margin: 0rem;
    padding: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
    margin: 0rem 5rem;
    padding: 1rem;
}  
`;

export const Title: StyledComponent<"h2", {}> = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: #C5C6C7 solid .1rem;
`;

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

export const ImgContainer = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 13rem;
`;

export const Img = styled.img`
    height: 15rem;
    width: 13rem;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
`;

export const ImgCover = styled.div`
    height: 15rem;
    width: 13rem;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
    background: rgba(0, 0, 0, 0.6); 
    opacity: 1;
`;
   
export const Overlay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    position: absolute;
    top: .5rem;
    background: rgba(0, 0, 0, 0.8); 
    color: #C5C6C7;
    width: 13rem;
    height: 15rem;
    transition: .5s ease;
    opacity:0;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 1;
    }
`;

export const P = styled.h4`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.1rem;
    padding: .2rem .1rem;
`;

export const TitleContainer = styled.div`
    padding: 0 .3rem;
    padding-bottom: .2rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
`;

export const Button: StyledComponent<"button", {}> = styled.button`
    padding: .5rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border: #B1A296 solid .1rem;
    border-radius: .5rem;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    font-weight: bold;
    margin-bottom: .75rem;

    &:hover:not(:disabled),
    &:active:not(:disabled),
    &:focus {
        border-radius: .5rem;
        color: #B1A296;
        background-image: linear-gradient(to bottom right, #0C0032, #0C0032);;
        border: #B1A296 solid .1rem;
    }

    &:disabled {
        opacity: 0.5;
        filter: saturate(50%);
    }

    @media ${device.tablet} {
        padding: .65rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        padding: .5rem;
        width: 12rem;
    }
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export const StyledLink = styled(NavLink)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;
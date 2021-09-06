import styled, { 
    StyledComponent, keyframes} from 'styled-components';
import { device } from '../../Styles/global';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Container: StyledComponent<"div", {}> = styled.div`
    display: block;
    width: 100%;
    height: auto; 
`;

export const Wrapper: StyledComponent<"section", never> = styled.section`
    margin: 0rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
    margin: 0rem 5rem;
    padding: 1rem;
}  
`;

export const Slider: StyledComponent<"section", never> = styled.section`
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RButtonWrapper = styled.div`
    padding: 0;
    right: 1%;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 40%;

    @media ${device.laptop} {
        position: absolute;
        top: 40%;
        right: 17%;
    }
`;

export const LButtonWrapper = styled.div`
    padding: 0;
    position: absolute;
    top: 40%;
    left: 1%;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    @media ${device.laptop} {
        position: absolute;
        top: 40%;
        left: 17%;
    }
    
`;

export const Button:  StyledComponent<"button", {}> = styled.button`
    font-size: 2.8rem;
    color: #0C0032;
    z-index: 10;
    height: 3rem;
    width: 3rem;
    border: hidden;
    border-radius: 1rem;
    display: inline-block;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    padding: 0;

    &:hover:not(:disabled),
    &:active:not(:disabled),
    &:focus {
       color: #C5C6C7;
    }

    &:disabled {
        opacity: 0.5;
        filter: saturate(50%);
    }  
    
    @media ${device.laptop} {
        height: 3rem;
        width: 3rem;
        font-size: 2.8rem;
    }
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 1rem;
    width: 40rem;
    height: 25rem;
    border: #C5C6C7 solid .1rem;

    @media ${device.laptop} {
        width: 40rem;
        height: 20rem;
        flex-direction: row;
    }
`;

export const Image:  StyledComponent<"img",{}> = styled.img`
    display: none;
`;

export const ActiveImage = styled.img`
    width: 40rem;
    height: 40rem;
    border-radius: 1rem;
    opacity: 1;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
        width: 20rem;
        height: 20rem;
        border-radius: 1rem;
        padding: .5rem;
    }
    
`;

/*export const Overlay = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.7); 
    color: #C5C6C7;
    width: 100%;
    transition: .5s ease;
    opacity:0;
    font-size: 1.3rem;
    padding: 7.5rem 2rem;
    text-align: center;
    font-weight: bold;
    border-radius: 1rem;

    &:hover {
        opacity: 1;
    }
`;*/

const skeleton = keyframes`
     0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
`;

export const Skeleton = styled.div`
    width: 20rem;
    height: 24rem;
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

export const H2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.4rem;
    color: #0C0032;
    margin-bottom: .7rem;
    margin-top: .7rem;
`;

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: .5rem;
`;

export const H3 = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1rem; 
    color: #0C0032;
    padding: .1rem;
`;

export const WatchButton = styled.button`
    padding: .5rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border: #B1A296 solid .15rem;
    border-radius: .5rem;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    font-weight: bold;
    margin: .5rem 0rem;
    width: 100%;

    &:hover {
        border-radius: .5rem;
        border: #B1A296 solid .2rem;
        color: #B1A296;
        background-image: linear-gradient(to bottom right, #0C0032, #0C0032);
    }

    @media ${device.tablet} {
        padding: .65rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        padding: .75rem 4rem;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;  

    &:hover {
        text-decoration: none;
    }
`;



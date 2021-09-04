import styled, { StyledComponent }from 'styled-components';
import { device } from '../../Styles/global';
import PropTypes from 'prop-types';

export const Container: StyledComponent<"section", never> = styled.section`
    margin: 0rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
    margin: 0rem 5rem;
    padding: 1rem;
}
`;

export const StyledUL: StyledComponent<"ul", {}> = styled.ul`
    text-decoration: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledLI: StyledComponent<"li", {}> = styled.li`
    list-style-type: none;
    padding: .5rem;
`;

export const Button: StyledComponent<"button", {}> = styled.button`
    font-size: 2rem;
    color: #0C0032;
    z-index: 10;
    height: 2.4rem;
    width: 2.4rem;
    border: hidden;
    border-radius: 50%;
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
        height: 2.6rem;
        width: 2.6rem;
        font-size: 2.4rem;
    }
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export const StyledList: StyledComponent<"li", {}> = styled.li`
    list-style-type: none;
    padding: .5rem;
    height: 2rem;
    width: 2rem;
    border: hidden;
    border-radius: 50%;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #0C0032;
    margin: .1rem;

    &.active {
        color: #C5C6C7;
    }
`;

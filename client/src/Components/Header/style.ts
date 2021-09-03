import styled, {StyledComponent} from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { device } from '../../Styles/global';

export const Navbar: StyledComponent<"div", {}> = styled.div`
    display: block;
    width: 100%;
    height: auto;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
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

export const Title: StyledComponent<"div", {}> = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-weight: bold;
    color: #0C0032;
    margin-bottom: .2rem;
    padding: .5rem;
    display: block;
    width: 100%;
    font-size: 1.1rem;

    @media ${device.tablet} {
        font-size: 1.7rem;
        width: 80%;
        margin-bottom: .4rem;
    }

    @media ${device.laptop} {
        width: 50%;
    }   
`;

export const Form: StyledComponent<"form", {}> = styled.form`
    display: inline-block;
    position: relative;
`;

export const InputWrapper: StyledComponent<"div", {}> = styled.div`
    padding: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Input: StyledComponent<"input", {}> = styled.input`

    padding: .5rem;
    background: #0C0032;
    border: #B1A296 solid .15rem;
    border-radius: 1.3rem;
    color: #B1A296;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    width: 15rem;

    @media ${device.tablet} {
        padding: .65rem;
        width: 20rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        padding: .75rem;
        width: 40rem;
    }
`;

export const Button: StyledComponent<"button", {}> = styled.button`
    position: absolute;
    top: 0rem;
    right: 0rem;
    padding: .5rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border: #B1A296 solid .15rem;
    border-radius: 1.3rem;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    font-weight: bold;

    &:hover {
        border-radius: 1.3rem;
        border-bottom: #B1A296 solid .2rem;
        border-top: #B1A296 solid .2rem;
        color: #B1A296;
        background-image: linear-gradient(to bottom right, #0C0032, #0C0032);;
        border-left: #B1A296 solid .1rem;
        border-right: hidden;
    }

    @media ${device.tablet} {
        padding: .65rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        padding: .75rem;
    }
`;

export const StyledUL: StyledComponent<"ul", {}> = styled.ul`
    display: none;

    @media ${device.tablet} {
        padding: 0rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }   
`;

export const StyledList: StyledComponent<"li", {}> = styled.li`
    list-style-type: none;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1.2rem;
    padding: .75rem 1rem;
    font-weight: bold;
`;


export const StyledLink: StyledComponent<
(<S = unknown>(props: NavLinkProps<S> & React.RefAttributes<HTMLAnchorElement>) => 
React.ReactElement<any, string | React.JSXElementConstructor<any>> | null), {}> = styled(NavLink)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
        border-bottom: #B1A296 solid .15rem;
        border-top: #B1A296 solid .15rem;
        border-radius: .75rem;
    }

    &.${props => props.activeClassName} {
        text-decoration: none;
        border-bottom: #B1A296 solid .15rem;
        border-top: #B1A296 solid .15rem;
        border-radius: .75rem;
    }
`;

export const Burger: StyledComponent<"div",{}> = styled.div`
    padding: .5rem;

    @media ${device.tablet} {
        display: none;
    }
`;

export const CategoryWrapper: StyledComponent<"div", {}> = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: #B1A296 solid .1rem;
    background-color: #0C0032;
    margin: 0rem;
`;

export const Category: StyledComponent<"div", {}> = styled.div`
    padding: .5rem 2rem;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    color: #B1A296;
    font-weight: thin;

    @media ${device.tablet} {
        padding: .5rem 5rem;
    }
`;

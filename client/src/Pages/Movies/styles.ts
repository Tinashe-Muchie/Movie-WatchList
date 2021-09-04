import styled, { StyledComponent } from 'styled-components';
import { device } from '../../Styles/global';

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

export const Title: StyledComponent<"h2", {}> = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: #C5C6C7 solid .1rem;
    border-bottom: #C5C6C7 solid .1rem;

`;
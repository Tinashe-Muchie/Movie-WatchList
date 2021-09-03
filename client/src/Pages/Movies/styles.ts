import styled, { StyledComponent } from 'styled-components';
import { device } from '../../Styles/global';

export const Container: StyledComponent<"div", {}> = styled.div`
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
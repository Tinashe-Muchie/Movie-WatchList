import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupWrapper = styled.div`
  width: 25vw;
  height: 15vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
  color: #000;
  display: flex;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p {
        padding: .5rem;
        @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
        font-family: 'STIX+Two+Text', Georgia, serif;
        color: #0C0032;
        font-weight: bold;
    }
`;

export const ClosePopupButton = styled(MdClose)`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    color: #0C0032;
    cursor: pointer;
    position: absolute;
    top: .5rem;
    right: .5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    z-index: 10;
`;
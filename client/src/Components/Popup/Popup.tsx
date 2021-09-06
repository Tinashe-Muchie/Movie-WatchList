import React, { useCallback, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { 
    Background, PopupWrapper,
    PopupContent, ClosePopupButton} from './style';


export const Popup: React.FunctionComponent<{
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    title: string
}> =  ({showPopup, setShowPopup, title}) => {

    //const popupRef = useRef();
    const animation = useSpring({
        config: {
        duration: 250
        },
        opacity: showPopup ? 1 : 0,
        transform: showPopup ? `translateY(0%)` : `translateY(-100%)`
    });

    /*const closePopup = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
          setShowPopup(false);
        }
    };*/
    
    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showPopup) {
            setShowPopup(false);
          }
        },
        [setShowPopup, showPopup]
    );
    
    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
        {
            showPopup? (
                <Background 
                    //onClick={closePopup}
                >
                <animated.div style={animation}>
                    <PopupWrapper>
                    <PopupContent>
                        <p> {title} </p>
                    </PopupContent>
                    <ClosePopupButton
                        aria-label='Close modal'
                        onClick={() => setShowPopup(prev => !prev)}
                    />
                    </PopupWrapper>
                </animated.div>
                </Background>
            )
            : null
        }
        </>
    );
}
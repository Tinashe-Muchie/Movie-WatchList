import React, { useContext, useState, useRef,
    useCallback, useEffect, ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import { QueryQuery } from '../../generated/search';
import { Context } from '../../Context/GlobalContext';
import { 
    Container, Wrapper, Title, GridContainer, 
    StyledUL, Img, StyledLi, Skeleton, 
    ImgContainer, Overlay, P, TitleContainer,
    Button, StyledLink, ImgCover, Background,
    PopupWrapper, PopupContent, ClosePopupButton} from './style';
import { Movies, TvShows } from '../../generated/gql';
import { useSpring, animated } from '@react-spring/web';

function Search() {

    const { SEARCH, addToWatchlist, addToWatched, myState } = useContext(Context);
    const { loading, error, data } = useQuery<QueryQuery>(SEARCH);
    const dataSearch = data?.search;
    /*create a new array that will be used to display skeletons 
    while a search is loading*/
    const newArray: number[] = [];
    for(let i:number = 1; i <= 20; i++) {
        newArray.push(i);
    }

    type T = Movies | TvShows;
    interface PopupIF {
        showPopup: boolean;
        setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
        title: string
    }

    const  [title, setTitle] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const Popup =  ({showPopup, setShowPopup, title}: PopupIF) => {

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

    return (
        <Container>
            <Wrapper>
            <Title>
                Searched Results
            </Title>
            <StyledUL>
                <GridContainer>
                    {
                        loading ? newArray.map((item, index)=> {
                            return(
                                <StyledLi key={index}>
                                    <Skeleton />
                                </StyledLi>
                            );
                        })
                        : error ? <P>Oh no! {error.message}. Try the search again.</P>
                        : dataSearch?.map((item) => {
                            return (
                                <StyledLi key={item.id}>
                                <Overlay>
                                    <Button
                                        onClick={() => {
                                            addToWatchlist(item)
                                            setShowPopup(true)
                                            setTitle(
                                                (item.__typename === 'TvShow') ? 
                                                `${item.name} has been added to Watchlist`
                                                : (item.__typename === 'Movie') ?
                                                `${item.title} has been added to Watchlist`
                                                : ''
                                            )
                                        }}
                                        disabled={
                                            myState?.Watchlist?.find((w: T) => w.id === item.id)? true
                                            : myState?.Watched?.find((w: T) => w.id === item.id)? true
                                            : false
                                        }
                                    >
                                        Add to Watchlist
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            addToWatched(item)
                                            setShowPopup(true)
                                            setTitle(
                                                (item.__typename === 'TvShow') ? 
                                                `${item.name} has been added to Watchlist`
                                                : (item.__typename === 'Movie') ?
                                                `${item.title} has been added to Watchlist`
                                                : ''
                                            )
                                        }}
                                        disabled={
                                            myState?.Watched?.find((w: T) => w.id === item.id)? true
                                            : false
                                        }
                                    >
                                        Add to Watched
                                    </Button>
                                    {
                                        (item.__typename === 'Movie')? <StyledLink
                                        to={{
                                            pathname: '/moviedetails',
                                            state: {
                                                details: item.details,
                                                credits: item.credits,
                                                videos: item.videos,
                                                id: item.id,
                                                reviews: item.reviews
                                            }
                                        }}
                                    >
                                        <Button>More Info</Button>
                                    </StyledLink>
                                    : (item.__typename === 'TvShow') ? <StyledLink
                                        to={{
                                            pathname: '/tvshowdetails',
                                            state: {
                                                details: item.details,
                                                reviews: item.reviews,
                                                videos: item.videos,
                                                id: item.id,
                                                credits: item.credits
                                            }
                                        }}
                                    >
                                        <Button>More Info</Button>
                                    </StyledLink>
                                    : null
                                    }    
                                </Overlay>
                                <ImgContainer>
                                    {
                                        (item.poster_path)? <Img 
                                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                            alt='poster image'
                                        />
                                        : <ImgCover></ImgCover>
                                    }
                                    
                                    <TitleContainer>
                                    {
                                        (item.__typename === 'Movie')? <P>
                                            {item.title}
                                        </P>
                                        : (item.__typename === 'TvShow') ? <P>
                                            {item.name}
                                        </P>
                                        : null
                                    }
                                    {
                                        (item.__typename === 'Movie')? <P>
                                            {item.release_date}
                                        </P>
                                        : (item.__typename === 'TvShow') ? <P>
                                            {item.first_air_date}
                                        </P>
                                        : null
                                    } 
                                    </TitleContainer>  
                                </ImgContainer>
                                </StyledLi>
                            );
                        })
                    }
                </GridContainer>
            </StyledUL>
            <Popup showPopup={showPopup} setShowPopup={setShowPopup} title={title}/>
            </Wrapper>
        </Container>
    );
}

export default Search;
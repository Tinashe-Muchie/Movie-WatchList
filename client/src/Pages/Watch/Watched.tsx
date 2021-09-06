import React, {useContext} from 'react';
import { 
    Container, Wrapper, Title, Img,
    GridContainer, StyledUL, StyledLi,
    Overlay, Button, StyledLink, P, 
    TitleContainer, ImgContainer, ImgCover} from './style';
import { Context } from '../../Context/GlobalContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Popup } from '../../Components/index';

export const Watched: React.FunctionComponent = () => {

    const {myState, removeFromWatched, title, showPopup,
        setShowPopup, setTitle } = useContext(Context);
    console.log(myState);
    return (
        <Container> 
            <Wrapper>
                <Title>
                    Watched Movies
                </Title>
                <StyledUL>
                    <GridContainer>
                    { 
                        myState.Watched?.map((item: any)=> {
                            return (
                                <StyledLi key={item.id}>
                                 <Overlay>
                                    <Button
                                        onClick={() => {
                                            removeFromWatched(item.id)
                                            setShowPopup(true)
                                            setTitle(
                                                (item.__typename === 'TvShows') ? 
                                                `${item.name} has been deleted from Watched`
                                                : (item.__typename === 'Movies') ?
                                                `${item.title} has been deleted from Watched`
                                                : (item.__typename === 'TvShow') ? 
                                                `${item.name} has been deleted from Watched`
                                                : (item.__typename === 'Movie') ?
                                                `${item.title} has been deleted from Watched`
                                                : ''
                                            )
                                        }}
                                    >
                                        <RiDeleteBin5Line />
                                    </Button>
                                    {
                                        (item.__typename === 'Movies')? <StyledLink
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
                                    : (item.__typename === 'Movie')? <StyledLink
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
                                    :(item.__typename === 'TvShows') ? <StyledLink
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
                                        (item.__typename === 'Movies')? <P>
                                            {item.title}
                                        </P>
                                        : (item.__typename === 'TvShows') ? <P>
                                            {item.name}
                                        </P>
                                        : (item.__typename === 'Movie')? <P>
                                            {item.title}
                                        </P>
                                        : (item.__typename === 'TvShow') ? <P>
                                            {item.name}
                                        </P>
                                        : null
                                    }
                                    {
                                        (item.__typename === 'Movies')? <P>
                                            {item.release_date}
                                        </P>
                                        : (item.__typename === 'TvShows') ? <P>
                                            {item.first_air_date}
                                        </P>
                                        : (item.__typename === 'Movie')? <P>
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
                <Popup 
                    title={title} 
                    showPopup={showPopup} 
                    setShowPopup={setShowPopup} />
            </Wrapper>
        </Container>
    );
}
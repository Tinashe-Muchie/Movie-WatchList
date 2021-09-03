import { FunctionComponent, useState } from 'react';
import {
    Navbar, Wrapper, Burger,
    Title, Input, StyledLink,
    InputWrapper, Form, 
    Button, StyledUL, StyledList,
    CategoryWrapper, Category} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header: FunctionComponent = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [activeClassName, setActiveClassName] = useState<string>('');

    return (
        <Navbar>
            <Wrapper>
            <Title>
                Welcome. Explore various movies and tv shows available and save the ones you like.
            </Title>
            <InputWrapper>
                <Form>
                    <Input placeholder='Search for movies and tv shows....' />
                    <Button>search</Button>
                </Form>
                <Burger>
                    <GiHamburgerMenu onClick={()=> setOpen(!open)}/>
                </Burger>
                <StyledUL>
                    <StyledLink 
                        to='watchlist'
                        onClick={()=> setActiveClassName('active')}
                        activeClassName={activeClassName}
                    >
                        <StyledList>
                            Watchlist
                        </StyledList>
                    </StyledLink>
                    <StyledLink 
                        to='/watched' 
                        onClick={()=> setActiveClassName('active')}
                        activeClassName={activeClassName}
                    >
                        <StyledList>
                            Watched
                        </StyledList>
                    </StyledLink>
                </StyledUL>
            </InputWrapper>
            </Wrapper> 
            <CategoryWrapper>
                <StyledLink 
                    to="/movies"
                    onClick={()=> setActiveClassName('active')}
                    activeClassName={activeClassName}
                >
                    <Category>
                        Movies
                    </Category>
                </StyledLink>
                <StyledLink 
                    to="/tvshows"
                    onClick={()=> setActiveClassName('active')}
                    activeClassName={activeClassName}
                >
                    <Category>
                        Tv Shows
                    </Category>
                </StyledLink>   
            </CategoryWrapper>   
        </Navbar>
    );
}
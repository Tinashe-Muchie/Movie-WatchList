import { 
    ChangeEvent, FunctionComponent, 
    useState, useContext } from 'react';
import {
    Navbar, Wrapper, Burger,
    Title, Input, StyledLink,
    InputWrapper, Form, LinkStyled,
    Button, StyledUL, StyledList,
    CategoryWrapper, Category} from './style';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Context } from '../../Context/GlobalContext';

export const Header: FunctionComponent = () => {

    const { setSearch } = useContext(Context);

    //open is for opening the burger menu options
    const [open, setOpen] = useState<boolean>(false);
    const [activeClassName, setActiveClassName] = useState<string>('');
    const [query, setQuery] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.currentTarget.value)
    };

    return (
        <Navbar>
            <Wrapper>
            <Title>
                Welcome. Explore various movies and tv shows available and save the ones you like.
            </Title>
            <InputWrapper>
                <Form>
                    <Input 
                        placeholder='Search for movies and tv shows by name....' 
                        value={query}
                        onChange={onChange}
                    />
                    <LinkStyled 
                        to ={{
                            pathname: '/search'
                        }}
                    >
                        <Button
                            onClick={()=> {
                                setSearch(query);
                                setQuery('');
                            }}
                        >
                            search
                        </Button>
                    </LinkStyled>
                </Form>
                <Burger>
                    <GiHamburgerMenu onClick={()=> setOpen(!open)}/>
                </Burger>
                <StyledUL>
                    <StyledLink 
                        to='/watchlist'
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
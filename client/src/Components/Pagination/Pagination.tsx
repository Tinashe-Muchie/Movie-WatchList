import React, { useState } from 'react';
import { 
    Container, StyledUL, StyledLI,
    Button, StyledList } from './style';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'; 

export const Pagination: React.FunctionComponent = () => {
    const data = ['hello', 'hi', 'okay']

    //set the current Page that is displayed
    const [currentPage, setCurrentPage] = useState<number>(1);
    //this it the number of items that a user will see on a single page
    const itemsPerPage: number = 20;
    
    const pageNumberLimit: number = 10;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

    /*Calculate the total number of pages that are available by dividing
    the data you get from the server with the number of items on a page*/
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const rdisabled:boolean = (currentPage === pages[pages.length - 1]) ? true : false;
    const ldisabled:boolean = (currentPage === pages[0]) ? true : false;

    /*Calculate the index of the last item on a page by multiplying the number
    of items on a page by the page number e.g page 2* 20= 40*/ 
    //const indexOfLastItem: number = currentPage * itemsPerPage;
    /*Calculate the index of the first item on a page by subtracting the number
    of items per page from the index of the last item*/
    //const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    //const currentItems: string[] = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
    
        if (currentPage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    
    const handlePrevButton = () => {
        setCurrentPage(currentPage - 1);
    
        if ((currentPage - 1) % pageNumberLimit === 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <StyledList 
                key={number}
                onClick={()=> setCurrentPage(number)}
            >
                {number}
            </StyledList>
          );
        } else {
          return null;
        }
      });

    let pageIncrementButton = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementButton = <li onClick={handleNextButton}> &hellip; </li>;
    }

    let pageDecrementButton = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementButton = <li onClick={handlePrevButton}> &hellip; </li>;
    }

    return (
        <Container>
            <StyledUL>
                <StyledLI>
                    <Button 
                        onClick={handlePrevButton}
                        disabled={ldisabled}
                    >
                    <GoArrowSmallLeft />
                    </Button>
                </StyledLI>
                { pageDecrementButton }
                { renderPageNumbers }
                { pageIncrementButton }
                <StyledLI>
                    <Button 
                        onClick={handleNextButton}
                        disabled={rdisabled}
                    >
                    <GoArrowSmallRight />
                    </Button>
                </StyledLI>
            </StyledUL>
        </Container>
    );
}
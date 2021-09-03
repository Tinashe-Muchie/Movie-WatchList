import React from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../../Queries/index';
import { QueryQuery } from '../../generated/search';

function Search() {

    const { loading, error, data } = useQuery<QueryQuery>(SEARCH);
    return (
        <div>

        </div>
    );
}

export default Search;
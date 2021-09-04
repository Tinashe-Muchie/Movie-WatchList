import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QueryQuery } from '../../generated/search';
import { Context } from '../../Context/GlobalContext';

function Search() {

    const { SEARCH } = useContext(Context);

    const { loading, error, data } = useQuery<QueryQuery>(SEARCH);
    return (
        <div>

        </div>
    );
}

export default Search;
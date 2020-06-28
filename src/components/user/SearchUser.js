import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';

const Search = ({ onSearch }) => {

  const history = useHistory();
  let query = useRef(null);
  
  const handleOnSubmit = () => {
    const username = query.current.value;
    if (_canCallSearchApi(username)){
      history.push(`/users/${username}`);
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl>
        <InputLabel htmlFor="username">GitHub Username:</InputLabel>
        <Input
          id="username"
          placeholder="Type the github username"
          inputRef={query}
        />
        <Button>Search</Button>
      </FormControl>
    </form>
  );
}

export default Search;

const _canCallSearchApi = (query) => {
    return (query && query.length > 0);
}
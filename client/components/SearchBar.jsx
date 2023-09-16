import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';

import { useState } from "react";

import { setList, setSearch } from "../reducers/searchSlice";
import { useDispatch, useSelector } from "react-redux";

// import axios from 'axios';


const SearchBar = () => {
  const searchText = useSelector(state => state.searches.search);
  // const [search, setSearch] = useState('');

  // const [listSearches, setListSearches] = useState([]);

  // GET REQUEST API 

  // setListSearches(fetch(`http://www.omdbapi.com/?apikey=d20b14af&page=3&s=${search}`).then(data => data.json()))

  // res = `http://www.omdbapi.com/?apikey=d20b14af&page=3&s=${search}`
  // set state listsearches ( response )

  const dispatch = useDispatch();

  // onChangeHandler
  const onChangeHandler = (e) => {
    dispatch(setSearch(e.currentTarget.value));
  }

  async function onClickHandler(e) {
    console.log('searchText is :', searchText);
    e.preventDefault();
    const list = await fetch(`http://www.omdbapi.com/?apikey=d20b14af&page=1&type=movie&s=${searchText}`)
      .then(data => data.json())
    dispatch(setList(list.Search));
  }
  
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Search For Movie" onChange={(e) => onChangeHandler(e)}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => onClickHandler(e)}>
          Submit
        </Button >
      </Form>
    </div>
  )
}

export default SearchBar;
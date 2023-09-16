import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';

import { useState } from "react";

const SearchBar = () => {

  const [search, setSearch] = useState('');

  // GET REQUEST 
  
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Control type="text" placeholder="Search For Movie" onChange={(e)=> setSearch(e.currentTarget.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SearchBar;
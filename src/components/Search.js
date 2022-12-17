import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import RecipeList from "./RecipeList";
import SearchIcon from '@mui/icons-material/Search';


function Search({ dish }) {
    const [searchField, setSearchField] = useState("");
    // filter by name and ingredients
    const filtered = dish.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            entry.ingredientList.toLowerCase().includes(searchField.toLowerCase());
        //|| entry.allergy.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (

        <Container>
            <Typography variant="h5" component="p" >
                Search by recipe or ingredient
            </Typography>
            <Form className="d-flex">
                <SearchIcon
                    fontSize="large"
                    color="primary" />
                <Form.Control
                    size="lg"
                    type="search"
                    placeholder="Search..."
                    className="me-5"
                    aria-label="Search"
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </Form>
            <br></br>

            <RecipeList dishes={filtered} />

        </Container>

    );

};

export default Search;
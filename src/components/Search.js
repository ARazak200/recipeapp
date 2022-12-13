import { Container } from "@mui/material";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import RecipeList from "./RecipeList";

import DisplayNutrition from "./DisplayNutrition";


function Search({ dish }) {
    const [searchField, setSearchField] = useState("");
    // filter by name and ingredients
    const filtered = dish.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
            entry.ingredientList.toLowerCase().includes(searchField.toLowerCase());
    });

    return (

        <Container>

            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    // change width to half width
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </Form>

            <RecipeList dishes={filtered} />

            {/* <DisplayNutrition recipes={searchField} /> */}

        </Container>

    );

};

export default Search;
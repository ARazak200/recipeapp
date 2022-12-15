import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

//import Accordion from "react-bootstrap/Accordion";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Typography
} from '@mui/material';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//import MUIAccordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
//import AccordionDetails from '@mui/material/AccordionDetails';

// import Btn from '@mui/material/Button';
//import FoodDish from "./FoodDish";
//import Item from "./Item";
//import { useParams } from "react-router-dom";

const RecipeList = ({ dishes }) => {
    const [searchField, setSearchField] = useState("");

    const handleClick = (e) => {
        setSearchField(e.target.innerHTML);
        console.log(searchField);
    };

    return (
        <>
            {/* TODO Style sub menu   */}

            <Container>

                <Accordion sx={{ maxWidth: 700 }}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" component="p">
                            Filtered Search
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Checkbox of allergy */}

                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Dietary requirements</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="GlutenFree" control={<Radio />} label="Gluten Free" />
                                <FormControlLabel value="vegetarian" control={<Radio />} label="Vegetarian" />
                                <FormControlLabel value="vegan" control={<Radio />} label="Vegan" />
                                <FormControlLabel value="DairyFree" control={<Radio />} label="Dairy Free" />
                            </RadioGroup>
                        </FormControl>


                    </AccordionDetails>
                </Accordion>

                <div >
                    {dishes.map((dish) => (
                        <p key={dish.id}>
                            <Button variant="outlined">
                                <Link to={dish.id} onClick="window.location.reload();">{dish.name} </Link>
                            </Button>
                            <br></br>
                        </p>
                    ))}
                </div>

            </Container>

            <Outlet />
        </>
    );
};
export default RecipeList;

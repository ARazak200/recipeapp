import React from "react";
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
    RadioGroup,
    FormControlLabel, FormGroup, FormLabel,
    Checkbox,
    Typography
} from '@mui/material';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const RecipeList = ({ dishes, props }) => {

    const handleGlutenChange = (e) => {
        //props.onGlutenChange(e.target.checked);
        console.log("checked box GlutenFree")
    };
    const handleVegChange = () => {
        console.log("checked box Veg")
    };
    const handleVeganChange = () => {
        console.log("checked box vegan")
    };
    const handleDairyChange = () => {
        console.log("checked box dairy")
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

                        <FormGroup>
                            <FormLabel id="demo-row-radio-buttons-group-label">Dietary Requirements</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group">

                                <FormControlLabel value="GlutenFree" control={
                                    <Checkbox onChange={handleGlutenChange} />} label="Gluten Free" />

                                <FormControlLabel value="vegetarian" control={
                                    <Checkbox onChange={handleVegChange} />}
                                    label="Vegetarian" />

                                <FormControlLabel value="vegan" control={
                                    <Checkbox onChange={handleVeganChange} />}
                                    label="Vegan" />

                                <FormControlLabel value="DairyFree" control={
                                    <Checkbox onChange={handleDairyChange} />}
                                    label="Dairy Free" />

                            </RadioGroup>
                        </FormGroup>


                    </AccordionDetails>
                </Accordion>
                <br></br>

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

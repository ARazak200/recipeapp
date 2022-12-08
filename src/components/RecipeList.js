import React from "react";
import { Link, Outlet } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Accordion from "react-bootstrap/Accordion";

import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import muiBtn from '@mui/material/Button';
import FoodDish from "./FoodDish";
import Item from "./Item";


const RecipeList = ({ dishes }) => {

    // const availableList = dishList.filter((entry) => {
    //     return entry.available === "yes";
    // })


    return (
        <>
            {/* TODO Style sub menu   */}

            <Container>


                {/* <Accordion >
                    {availableList.map((dish, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={index}>
                                <Item dish={dishes} />
                            </Accordion.Item>
                        );
                    })}
                </Accordion> */}
                <MUIAccordion sx={{ maxWidth: 500 }}>

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}>

                        Filter Search
                    </AccordionSummary>
                    <AccordionDetails>
                        Checkbox of allergy
                    </AccordionDetails>
                </MUIAccordion>

                <ul>
                    {dishes.map((dish) => (
                        <li key={dish.id}>
                            {/* <a href='Recipe/:itemId'>{dish.name}</a> */}
                            <Link to={dish.id}>{dish.name} </Link>
                        </li>

                    ))}
                </ul>


            </Container>

            <Outlet />
        </>
    );
};
export default RecipeList;


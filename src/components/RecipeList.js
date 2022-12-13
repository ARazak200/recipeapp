import React from "react";
import { Link, Outlet } from "react-router-dom";

//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

//import Accordion from "react-bootstrap/Accordion";

import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Btn from '@mui/material/Button';
//import FoodDish from "./FoodDish";
//import Item from "./Item";
//import { useParams } from "react-router-dom";

const RecipeList = ({ dishes }) => {

    // const { itemId } = useParams();
    // const currentItem = dishes.filter((entry) => {
    //     //console.log(entry);
    //     return entry.id === itemId;
    // });

    //const { name, description } = currentItem[0];
    return (
        <>
            {/* TODO Style sub menu   */}

            <Container>

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
                        <span key={dish.id}>
                            <Btn>
                                <Link to={dish.id}>{dish.name} </Link>
                            </Btn>

                        </span>
                    ))}
                </ul>
                <br></br>

                {/* <Accordion >

                    {dishes.map((dish) => (
                        <AccordionSummary key={dish.id}>
                            <Link to={dish.id}>{dish.name} </Link>
                        </AccordionSummary>

                    ))}
                    <AccordionDetails>
                        {description}
                    </AccordionDetails>
                </Accordion> */}

            </Container>

            <Outlet />
        </>
    );
};
export default RecipeList;

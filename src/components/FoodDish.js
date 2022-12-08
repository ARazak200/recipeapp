import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
// import Accordion from '@mui/material/Accordion';

// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FoodDish = ({ dish }) => {
    return (
        <Container>


            <Accordion.Header>{dish.name}</Accordion.Header>
            <Accordion.Body>
                <p>{dish.description}</p>
                {/* <p>{dishes.price}</p> */}
            </Accordion.Body>


        </Container>

    );
};
export default FoodDish;


{/* <Accordion>
                <AccordionSummary>
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    {dishes.name}
                </AccordionSummary>
                <AccordionDetails>
                    {dishes.description}
                </AccordionDetails>
            </Accordion> */}
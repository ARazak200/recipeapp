import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FoodDish from "./FoodDish";

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Item from "./Item";

//import Accordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
//import AccordionDetails from '@mui/material/AccordionDetails';

const DisplayFoodItems = ({ dishList }) => {

    const availableList = dishList.filter((entry) => {
        return entry.available === "yes";
    })

    return (
        <Accordion style={{ width: 50 + '%' }}>
            {/* Changed foodlist to availableList*/}
            {availableList.map((dish, index) => {
                return (
                    <Accordion.Item eventKey={index} key={index}>
                        <FoodDish dish={dish} />
                    </Accordion.Item>
                );
            })}
        </Accordion>
    );
};
export default DisplayFoodItems;






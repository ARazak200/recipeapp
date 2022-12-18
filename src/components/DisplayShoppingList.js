import React from 'react';
//import ShoppingList from './ShoppingList';
import {
    Container, Typography
}
    from '@mui/material';


export default function DisplayShoppingList() {
    return (
        <>
            <Container>
                <Typography variant="h3" component="h2" textAlign="center" >Shopping List</Typography>
                {/* currently not working */}
                <p>Currently under construction</p>
                {/* <ShoppingList /> */}
            </Container>

        </>
    );
}
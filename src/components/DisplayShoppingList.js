import React from 'react';
//import shoppingList from './ShoppingList';
import {
    Container, Typography
}
    from '@mui/material';
export default function Menu() {
    return (
        <>
            <Container>
                <Typography variant="h3" component="h2" textAlign="center" >Shopping List</Typography>
                {/* currently not working */}
                <shoppingList />
            </Container>

        </>
    );
}
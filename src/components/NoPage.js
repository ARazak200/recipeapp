import React from "react";
import { Container, Typography } from '@mui/material/';
import img from '../assets/NOPage.png';

const NoPage = () => {
    return (
        <>
            <Container textAlign="center">
                <Typography variant="h3" component="h2" >
                    ERROR 404 NO PAGE
                </Typography>
                <img
                    width="200"
                    height="200"
                    alt="NOPAGE IMG"
                    src={img} />

            </Container>

        </>
    );
};
export default NoPage;

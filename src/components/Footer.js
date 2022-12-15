import * as React from 'react';

import {
    Box,
    Typography,
    Container,
    Link
} from '@mui/material/';

import img from '../assets/fork_w.png'
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">

            <Link color="inherit" target="_blank" href="https://www.instagram.com/aadamrazak/">
                Aadam R. {new Date().getFullYear()}
            </Link>
        </Typography>
    );
}

export default function StickyFooter() {
    return (

        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                textAlign: 'center',

            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h5">
                    Where the Magic Recipes are Placed
                </Typography>
                <Copyright />
                <img
                    src={img}
                    height="100"
                    width="100"
                    alt='logo' />
            </Container>

        </Box >

    );
}



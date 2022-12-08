import React from "react";

import {
    styled,
    Typography,
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
} from '@mui/material/';

import img from '../assets/fork_w.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Home = () => {
    return (
        <>
            <Container>

                <Typography variant="h3" component="h2" textAlign="center" >
                    Welcome
                </Typography>
                {/* moved to /Product 
                TODO work from ReciptList and Item for css */}


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="RECIPE"
                                    height="190"
                                    image={img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        SEARCH RECIPES
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Button href='Product'>CLICK HERE</Button>
                                </CardActions>
                            </Card >

                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            < Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="WELCOME"
                                    height="280"
                                    image="https://cdn.dribbble.com/users/2556713/screenshots/7569532/media/266e0452b1ce6ebebee6d3d8871d6ddd.gif"
                                />

                            </Card >
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            < Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="RECIPE"
                                    height="140"
                                    image="https://media3.giphy.com/media/EJTlvBBMluIZ2hVvYm/giphy.gif?cid=6c09b952f6b20d6a1bde4e391d875cd6a574cd7562769881&rid=giphy.gif&ct=s"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Rate Recipes
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href='Product'>CLICK HERE</Button>
                                </CardActions>
                            </Card >
                        </Item>
                    </Grid>

                </Grid>

            </Container>

        </>
    );
};
export default Home;



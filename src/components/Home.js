import React from "react";
import {
    Typography, Container, Grid,
    Card, CardContent, CardMedia, CardActions,
    Button,
} from '@mui/material/';
import img from '../assets/fork_w.png'

const Home = () => {
    return (
        <>
            <Container>

                <Typography variant="h3" component="h2" textAlign="center" >
                    Welcome
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="RECIPE"
                                height="200"
                                image={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    SEARCH RECIPES
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button href='Product'>CLICK HERE</Button>
                            </CardActions>
                        </Card >
                    </Grid>
                    <Grid item xs={4}>
                        < Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="WELCOME"
                                height="200"
                                image="https://cdn.dribbble.com/users/2556713/screenshots/7569532/media/266e0452b1ce6ebebee6d3d8871d6ddd.gif"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    DISCOVER THE CHEF
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button href='About'>CLICK HERE</Button>
                            </CardActions>
                        </Card >
                    </Grid>
                    <Grid item xs={4}>
                        < Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="RECIPE"
                                height="200"
                                image="https://media3.giphy.com/media/EJTlvBBMluIZ2hVvYm/giphy.gif?cid=6c09b952f6b20d6a1bde4e391d875cd6a574cd7562769881&rid=giphy.gif&ct=s"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rate Recipes
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href='Product'>CLICK HERE</Button>
                            </CardActions>
                        </Card >
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default Home;
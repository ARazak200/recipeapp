import * as React from 'react';

import {
    styled,
    Grid,
    Paper,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Container,
    Button,
    Typography
} from '@mui/material/';

import img from '../assets/Glasgow_Skyline.png';

export default function About() {
    return (
        <Container >

            < Typography variant="h3" component="h2" textAlign="center" >
                About Me
            </Typography >

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Food"
                            height="140"
                            image="https://media.tenor.com/LLLJYVQJNVAAAAAM/chefs-kiss-french-chef.gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Aadam
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                I make sure to bring smiles to whom I cook.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href='https://github.com/arazak200' target='_blank'>See My Other Projects</Button>
                        </CardActions>
                    </Card >


                </Grid>
                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Glasgow city"
                            height="200"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                From Glasgow, Scotland
                            </Typography>
                        </CardContent>

                    </Card >



                </Grid>
                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Jelebi"
                            height="140"
                            image="https://64.media.tumblr.com/97941011293d61fc26c916162532c8f5/tumblr_nyc5fv81eo1sb2waoo4_400.gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pakistani Cuisine
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                This dish is called an Jelebi, Sweet recipe that can be addictive.
                                <br></br>
                                This is my inspiration to my recipe book. My grandma, she help me gift me with these diverse pakistani recipes.
                            </Typography>
                        </CardContent>

                    </Card >


                </Grid>

                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="GCU"
                            height="140"
                            image="https://media0.giphy.com/media/JqzjBH56fEhC8sqSwK/200w.gif?cid=6c09b952h1whbp8ohq6dteq8ly4ivm841isp4nnfi2wzslbv&rid=200w.gif&ct=g"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Glasgow Caledonian University
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                This is my University, it is ranked 1st in Scotland for environmental and ethical performance in the People & Planet University League.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href='https://www.gcu.ac.uk/' target='_blank'>See More</Button>
                        </CardActions>

                    </Card >

                </Grid>
                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt=""
                            height="140"
                            image="https://cdn.dribbble.com/users/1912990/screenshots/6129020/cloud_computing.gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bsc(Hons) Computing
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                I am currently in 4th and final year. This Web Application is part of it, In the module of Front-end Web Development.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href='https://www.gcu.ac.uk/study/courses/undergraduate-computing-glasgow' target='_blank'>See More</Button>
                        </CardActions>
                    </Card >


                </Grid>
                <Grid item xs={4}>


                    < Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Pakistani Cuisine"
                            height="140"
                            image="https://thumbs.gfycat.com/GrouchyFrankLeveret-max-1mb.gif"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pakistani Cuisine
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                This dish is called an Chapli Kebab, Shallow fried kebab that is rich with sharp spices.
                                <br></br>
                                This is one of my favorites pakistani dishes.
                            </Typography>
                        </CardContent>
                    </Card >

                </Grid>
            </Grid>
        </Container >
    );
}
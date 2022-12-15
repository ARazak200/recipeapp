import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container, Typography, Grid,
  Card, CardContent, CardMedia, CardActions,
  Button,
  CardActionArea,
} from '@mui/material/';

import StarRating from "./starRating";

import DisplayNutrition from "./DisplayNutrition";
import FetchData from "./FetchNutrition";

const Item = ({ Dishes }) => {
  const { itemId } = useParams();
  const currentItem = Dishes.filter((entry) => {
    //console.log(entry);
    return entry.id === itemId;
  });


  //console.log(itemId);
  const { name, apiName, description, category, method, ingredient, allergy, img } = currentItem[0];
  //allergy, ingredient,

  const [searchField] = useState([apiName]);



  return (
    <>


      <Container>

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid textAlign="center">


            <Typography variant="h3" component="h2"  >
              {name}
            </Typography>
            <Typography variant="h5" component="p" >
              {description}
            </Typography>
          </Grid>

          <Grid item xs={5} textAlign="center" sx={{ maxWidth: 450 }} >


            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={img}
                  alt={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category}
                  </Typography>
                  <StarRating />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">Add To shopping list</Button>
                <Button size="small" color="primary">Add Favorites</Button>
              </CardActions>
            </Card>

          </Grid>



          <Grid item xs={5} >
            <Card sx={{ maxWidth: 1000 }} >
              <CardContent>

                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                  Ingredient
                </Typography>

                <Typography variant="body1" component="span">
                  <ol>
                    {ingredient.map((ingredients) => (
                      <span key={ingredients.name}>
                        <li>{ingredients.amount} {ingredients.name}</li>
                      </span>
                    ))}
                  </ol>
                </Typography>
              </CardContent>


            </Card>


          </Grid>
          <Grid item xs={2} >

            <Typography variant="body2" component="div" textAlign="center">
              {allergy.map((allergies) => (
                <span key={allergies.name}>

                  <Typography variant="h6" component="div">
                    {allergies.name}
                  </Typography>

                </span>
              ))}
            </Typography>



            <Typography variant="body2" component="div" textAlign="center">
              <h3>Recipe : {name}</h3>

              <FetchData query={searchField} />
              {/* <DisplayNutrition dishes={name} /> */}
            </Typography>


          </Grid>

          <Grid item xs={20} >
            <Card sx={{ maxWidth: 1000 }}>
              {method.map((methods) => (
                <ul key={methods.step}>
                  <Typography variant="h4" component="span">
                    Step {methods.step}
                  </Typography>
                  <Typography variant="body1" component="div" textAlign="center">
                    {methods.instruction}
                  </Typography>

                </ul>
              ))}

            </Card>
          </Grid>

          <Grid item xs={10} >


          </Grid>

        </Grid>

      </Container>

    </>
  );
};

export default Item;

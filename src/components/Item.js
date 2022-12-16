import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container, Typography, Grid,
  Card, CardContent, CardMedia, CardActions,
  Button,
  CardActionArea,
} from '@mui/material/';

import StarRating from "./starRating";

//import DisplayNutrition from "../../../temp/DisplayNutrition";
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


            <Typography variant="h3" component="h2" sx={{ textDecoration: 'underline' }} >
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

            <Card>
              {allergy.map((allergies) => (
                <span key={allergies.name}>
                  <Typography variant="h5" component="div" textAlign="center">
                    {allergies.name}
                  </Typography>
                </span>
              ))}

            </Card>

            <Card sx={{ maxWidth: 700 }} >
              <CardContent>

                <Typography variant="h5" component="div" textAlign="center" sx={{ textDecoration: 'underline' }}>
                  Ingredients
                </Typography>

                <Typography variant="body1" component="div">
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

          {/* <Grid item xs={2} >
            {/* something
        </Grid> */}

          <Grid item xs={9} >
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

          <Grid item xs={3} >

            <Typography variant="body2" component="div" textAlign="center" >

              <FetchData query={searchField} />
              {/* <DisplayNutrition dishes={name} /> */}
            </Typography>




          </Grid>

        </Grid>

      </Container>

    </>
  );
};

export default Item;

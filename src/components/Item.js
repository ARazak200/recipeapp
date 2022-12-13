import React from "react";
import { useParams } from "react-router-dom";

import {
  styled, Container, Typography, Grid, Paper,
  //  Card,
  // CardContent,
  // CardMedia,
  // CardActions,
  Button
  // Box
} from '@mui/material/';

//Recipe rating
//import RecipeRating from "./RecipeRating";

//nut

import ShowReviews from "./DisplayNutrition";

import { dishes } from "../data/data";



const Item = ({ Dishes }) => {
  const { itemId } = useParams();
  const currentItem = Dishes.filter((entry) => {
    //console.log(entry);
    return entry.id === itemId;
  });


  //Style for item - Grid
  const MUIItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    // textAlign: 'center',
    color: theme.palette.text.primary,
  }));
  //console.log(itemId);
  const { name, description, category, method, ingredient, allergy } = currentItem[0];
  //allergy, ingredient,
  return (
    <>


      <Container>

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid>

            <MUIItem>
              <Typography variant="h3" component="h2" textAlign="center" >
                {name}
              </Typography>
              <Typography variant="h5" component="span" textAlign="center">
                {description}
              </Typography>

            </MUIItem>
          </Grid>


          <Grid item xs={5} textAlign="center">


            <MUIItem sx={{ maxWidth: 450 }} >
              {/* bullet list */}

              <Typography variant="h4" component="span">
                Dietary Allowance
              </Typography>

              <Typography variant="body2" component="span">
                {allergy.map((allergies) => (
                  <span key={allergies.name}>
                    <li>{allergies.name}</li>
                  </span>
                ))}


              </Typography>
            </MUIItem>

            <Typography variant="h4" component="span">
              ingredient
            </Typography>

            <Typography variant="body2" component="span">

              {ingredient.map((ingredients) => (
                <span key={ingredients.name}>
                  <li>{ingredients.amount} {ingredients.name}</li>
                </span>
              ))}
            </Typography>


          </Grid>
          <Grid item xs={2} textAlign="center">
            <Button>Add To shopping list</Button>
            <Button>Add Favorites</Button>
          </Grid>

          <Grid item xs={5} textAlign="center" sx={{ maxWidth: 450 }} >

            <Typography variant="h4" component="span">
              {category}
            </Typography>
            img

          </Grid>

          <Grid item xs={20} >
            <MUIItem sx={{ maxWidth: 2000 }}>
              {method.map((methods) => (
                <ul key={methods.step}>
                  <Typography variant="h4" component="span">
                    Step {methods.step}
                  </Typography>
                  <Typography variant="body2" component="span">
                    {methods.instruction}
                  </Typography>

                </ul>
              ))}

            </MUIItem>
          </Grid>

          <Grid item xs={10} >
            <MUIItem sx={{ maxWidth: 450 }}>
              rating

              {/* <RecipeRating dishes={(dish)} /> */}





            </MUIItem>
          </Grid>

        </Grid>

      </Container>

    </>
  );
};

export default Item;

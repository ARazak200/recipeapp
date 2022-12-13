import React from "react";
import { useParams } from "react-router-dom";

import {
  styled, Container, Typography, Grid, Paper,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea
  // Box
} from '@mui/material/';

//Recipe rating
//import RecipeRating from "./RecipeRating";

//import DisplayNutrition from "./DisplayNutrition";



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
  const { name, description, category, method, ingredient, allergy, img } = currentItem[0];
  //allergy, ingredient,
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

                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">Add To shopping list</Button>
                <Button size="small" color="primary">Add Favorites</Button>
              </CardActions>
            </Card>





          </Grid>



          <Grid item xs={5} >
            <MUIItem sx={{ maxWidth: 400 }} >
              <Typography variant="h4" component="h2" textAlign="center">
                Ingredient
              </Typography>


              <Typography variant="body1" component="span">

                {ingredient.map((ingredients) => (
                  <span key={ingredients.name}>
                    <li>{ingredients.amount} {ingredients.name}</li>
                  </span>
                ))}
              </Typography>
            </MUIItem>


          </Grid>
          <Grid item xs={2} sx={{ maxWidth: 40 }}>

            <Typography variant="h4" component="h2">
              Dietary Allowance
            </Typography>

            <Typography variant="body2" component="div" textAlign="center">
              {allergy.map((allergies) => (
                <span key={allergies.name}>

                  <Typography gutterBottom variant="h5" component="div">
                    {allergies.name}
                  </Typography>

                </span>
              ))}
            </Typography>





          </Grid>



          <Grid item xs={20} >
            <MUIItem sx={{ maxWidth: 2000 }}>
              {method.map((methods) => (
                <ul key={methods.step}>
                  <Typography variant="h4" component="span">
                    Step {methods.step}
                  </Typography>
                  <Typography variant="body1" component="div" textAlign="justify">
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

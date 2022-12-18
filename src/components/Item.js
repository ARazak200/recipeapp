import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container, Typography, Grid,
  Card, CardContent, CardMedia,
  Button,
  CardActionArea,
} from '@mui/material/';

import StarRating from "./starRating";

import FetchData from "./FetchNutrition";

const Item = ({ Dishes }) => {
  const { itemId } = useParams();
  const currentItem = Dishes.filter((entry) => {
    //console.log(entry);
    return entry.id === itemId;
  });

  //console.log(itemId);
  const { name, apiName, description, category, method, ingredient, allergy, img } = currentItem[0];

  const [searchField] = useState([apiName]);

  // <ShoppingList />
  // const ShoppingListClick = props => {
  //   <Button onClick={props.AddList}>hello</Button>
  // }

  return (
    <>

      <Container>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid textAlign="center">
            <Typography variant="h3" component="h3" sx={{ textDecoration: 'underline' }} >
              {name}
            </Typography>
            <Typography variant="h5" component="p" >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={5} textAlign="center" sx={{ maxWidth: 450 }} >
            <Card sx={{ maxWidth: 500 }}>
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
              <CardActionArea>
                {/* <ShoppingListClick doIt={AddList} />*/}
                <Button size="small" color="primary" >Add To Shopping List</Button>
              </CardActionArea>
              <CardActionArea>
                <Button size="small" color="primary">Add To Menu</Button>
              </CardActionArea>
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
            </Typography>
          </Grid>
        </Grid>
      </Container>

    </>
  );
};

export default Item;

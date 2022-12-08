import React from "react";
import { useParams } from "react-router-dom";

import {
  styled, Container, Typography, Grid, Paper, Card,
  CardContent,
  // CardMedia,
  // CardActions,
  Button
  // Box
} from '@mui/material/';


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
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
  //console.log(itemId);
  const { name, description, category, methodList, ingredientList } = currentItem[0];
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
              <Typography variant="h5" component="div" textAlign="center">
                {description}
              </Typography>

            </MUIItem>
          </Grid>

          <Grid item xs={5} >
            <MUIItem sx={{ maxWidth: 450 }}>
              <Typography variant="h4" component="div">
                {category}
              </Typography>
              img
            </MUIItem>
          </Grid>
          <Grid item xs={5} >
            <MUIItem sx={{ maxWidth: 450 }}>
              {/* bullet list */}
              <Typography variant="body4" component="div">
                {ingredientList}
              </Typography>

            </MUIItem>
          </Grid>
          <Grid item xs={2}>
            <MUIItem>
              <Typography variant="body4" component="div">
                rating
              </Typography>
              <Button>Add To shopping list</Button>
              <Button>Add Favorites</Button>
            </MUIItem>
          </Grid>
        </Grid>

        <Card>
          <CardContent>

            {methodList}
          </CardContent>
        </Card>

      </Container>

    </>
  );
};

export default Item;

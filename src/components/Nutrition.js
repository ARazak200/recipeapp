import React from "react";
import {
  Typography
} from '@mui/material/';
import Table from 'react-bootstrap/Table';
const Nutrition = ({ item }) => {
  return (
    <>
      <Typography variant="h5" component="div" sx={{ textDecoration: 'underline' }}>Nutritional Information</Typography>

      <Table responsive striped hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>Serving size</td>
            <td>{item.serving_size_g} g</td>
          </tr>
          <tr>
            <td>Calories</td>
            <td>{item.calories}</td>
          </tr>
          <tr>
            <td>Sugar Content</td>
            <td>{item.sugar_g} g</td>
          </tr>
          <tr>
            <td>Total Fat Content</td>
            <td>{item.fat_total_g} g</td>
          </tr>
          <tr>
            <td>Saturated fat content</td>
            <td>{item.fat_saturated_g} g</td>
          </tr>
          <tr>
            <td>Protein content</td>
            <td>{item.protein_g} g</td>
          </tr>
          <tr>
            <td>Total carbohydrates</td>
            <td>{item.carbohydrates_total_g} g</td>
          </tr>
          <tr>
            <td>Fiber</td>
            <td>{item.fiber_g} g</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{item.sodium_mg} mg</td>
          </tr>
          <tr>
            <td>Potassium</td>
            <td>{item.potassium_mg} mg</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{item.cholesterol_mg} mg</td>
          </tr>

        </tbody>
      </Table>

      {/* <ul style={{ listStyle: "none" }}>
        <p>Serving size:{item.serving_size_g} g</p>
        <li>Calories:{item.calories}</li>
        <li>Sugar content: {item.sugar_g} g</li>
        <li>Total fat content:{item.fat_total_g} g</li>
        <li>Saturated fat content:{item.fat_saturated_g}g</li>
        <li>Protein content: {item.protein_g}g</li>
        <li>Total carbohydrates:{item.carbohydrates_total_g}g</li>
        <li>Fiber: {item.fiber_g}g</li>
        <li>Sodium:{item.sodium_mg}mg</li>
        <li>Potassium :{item.potassium_mg}mg</li>
        <li>Cholesterol:{item.cholesterol_mg}mg</li>
      </ul> */}

    </>

  );
};
export default Nutrition;

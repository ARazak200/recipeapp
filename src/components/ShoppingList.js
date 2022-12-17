import React from "react";
//import ShoppingContext from "./ShoppingContext";
//import { Button } from "react-bootstrap";

const shoppingList = () => {
    const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

    return (
        <>
            <h1>Shopping List</h1>
            <ul>
                {shoppingList.map((item, index) => (
                    <li key={item.index}>
                        <h3>{item.name}</h3>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default shoppingList;
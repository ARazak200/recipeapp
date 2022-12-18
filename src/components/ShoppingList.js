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

// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import { toast } from 'react-toastify'
// import Item from './Item';


// const ListContext = createContext(null)


// export default function ListProvider({ children }) {
//     const [list, setList] = useState(JSON.parse(localStorage.getItem('List')) || [])

//     const handleAddToList = async (items) => {
//         items = items.map(i => ({
//             label: i,
//             id: uuidv4()
//         }))

//         const newList = [...list, ...items]
//         setList(newList)

//         toast('Ingredients has been added to shopping list');
//     }

//     // const handleRemoveFromList = (id) => {
//     //     const newList = [...list].filter(c => c.id !== id)
//     //     setList(newList)
//     // }

//     // const handleClearList = () => {
//     //     setList([])
//     // }


//     useEffect(() => {
//         localStorage.setItem('list', JSON.stringify(list))

//     }, [list])

//     return (
//         <>
//             <Item AddList={handleAddToList} />


//             <ListContext.Provider value={{ list, handleAddToList }}>{/* , handleRemoveFromList, handleClearList */}
//                 {children}
//             </ListContext.Provider>
//         </>

//     )
// }


// export const useList = () => useContext(ListContext)
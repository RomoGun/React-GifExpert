import React, { useState } from 'react';
import { AddCategory } from './Components';
import { GifGrid } from './Components/GifGrid';

//N5eypH6gHRrjR4dG5CnqFDdcE7Qc7789
export const GifexpertApp = () => {

  const [Categories, setCategories] = useState(['One Punch']);
  // console.log(Categories);

  const onAddCategory = (newCategory) =>{
    if(Categories.includes(newCategory)) return;

    // console.log(newCategory);
    setCategories([newCategory, ...Categories]);
    //setCategories(Cat => [...Cat, 'Valorant']);
  }

  return (
    <>
    <h1>GifexpertApp</h1>

    <AddCategory 
    // setCategories={setCategories}
    onNewCategory={ (value) => onAddCategory(value) }
    />

    
    { 
    Categories.map( Category =>  (
        <GifGrid key={ Category } category={ Category }/>
      )) 
    }
   
    </>
  )
}

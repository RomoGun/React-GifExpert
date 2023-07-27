import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( InputValue.trim().length <= 1) return;
        // setCategories( categories => [ InputValue, ...categories ] );
        setInputValue('');
        onNewCategory( InputValue.trim() );
    }

  return (
    <form onSubmit={ onSubmit }>

        <input 
            type="text" 
            placeholder="Buscar Gifs" 
            value={ InputValue }
            onChange={ onInputChange }
        />
        
    </form>
  )
}

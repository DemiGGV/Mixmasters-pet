import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';

import { fetchCategories, fetchIngerients } from './DrinkSearchApi';

export const DrinksSearch = ({ query, category, ingredient, onChange }) => {
  const [categories, setCategories] = useState([]);
  const categorySelectOptions = categories.map(category => {
    return { value: category, label: category };
  });
  categorySelectOptions.unshift({ value: '', label: '...' });
  const [ingredients, setIngredients] = useState([]);
  const ingredientSelectOptions = ingredients.map(ingredient => {
    return { value: ingredient.title, label: ingredient.title };
  });
  ingredientSelectOptions.unshift({ value: '', label: '...' });
  console.log('✋😎👉 ~ ingredient:', ingredient);
  console.log('✋😎👉 ~ category:', category);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await fetchCategories();
        setCategories(response);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    async function loadIngredients() {
      try {
        const response = await fetchIngerients();

        setIngredients(response);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadCategories();
    loadIngredients();
  }, []);

  return (
    <label htmlFor="categorySelect">
      <StyledFilterContainer>
        <StyledTextInput
          type="text"
          placeholder="Enter the text"
          name="query"
          value={query}
          onChange={e => {
            e.preventDefault();
            onChange('q', e.target.value);
          }}
        />
        {/* <select
          value={selectedFruit} // ...force the select's value to match the state variable...
          onChange={e => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select> */}
        <StyledSelectInput
          name="category"
          classNamePrefix="Select"
          placeholder="..."
          defaultValue={category}
          options={categorySelectOptions}
          onChange={e => onChange('category', e.value)}
        />
        <StyledSelectInput
          name="ingredient"
          classNamePrefix="Select"
          placeholder="..."
          defaultValue={ingredient}
          options={ingredientSelectOptions}
          onChange={e => onChange('ingredient', e.value)}
        ></StyledSelectInput>
      </StyledFilterContainer>
    </label>
  );
};

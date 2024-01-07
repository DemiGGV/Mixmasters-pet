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
  const [ingredients, setIngredients] = useState([]);
  const ingredientSelectOptions = ingredients.map(ingredient => {
    return { value: ingredient.title, label: ingredient.title };
  });

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
          onChange={e => onChange('q', e.target.value)}
        />
        <StyledSelectInput
          classNamePrefix="Select"
          onChange={e => onChange('category', e.target.value)}
          placeholder="All categories"
          name="category"
          defaultValue={category}
          isClearable
          options={categorySelectOptions}
        />
        <StyledSelectInput
          onChange={e => onChange('ingredient', e.target.value)}
          classNamePrefix="Select"
          name="ingredient"
          placeholder="Ingredients"
          defaultValue={ingredient}
          isClearable
          options={ingredientSelectOptions}
        ></StyledSelectInput>
      </StyledFilterContainer>
    </label>
  );
};

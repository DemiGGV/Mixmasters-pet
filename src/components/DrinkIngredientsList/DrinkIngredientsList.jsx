import {
  Subtitle,
  IngredientsContainer,
  IngredientItem,
  ContainerImage,
  Image,
  CaptionContainer,
  IngredientName,
  IngredientAmount,
} from './DrinkIngredientsList.styled';
import defaultImage from '../../assets/rectangle-2.png';

export function DrinkIngredientsList({ ingredients }) {
  return (
    <>
      <Subtitle>Ingredients</Subtitle>
      <IngredientsContainer>
        {ingredients.map(({ title, ingredientId, measure }) => {
          const { ingredientThumb, _id } = ingredientId;
          return (
            <IngredientItem key={_id}>
              <ContainerImage>
                {ingredientThumb ? (
                  <Image $img={ingredientThumb} />
                ) : (
                  <Image $img={defaultImage} />
                )}
              </ContainerImage>

              <CaptionContainer>
                <IngredientName>{title}</IngredientName>
                <IngredientAmount>{measure}</IngredientAmount>
              </CaptionContainer>
            </IngredientItem>
          );
        })}
      </IngredientsContainer>
    </>
  );
}

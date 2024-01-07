import { useState, useEffect, useMemo } from 'react';
// import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { fetchDrinks } from '../../components/DrinksSearch/DrinkSearchApi';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { useSearchParams } from 'react-router-dom';

export const DrinksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams;
  const paramsObj = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { q, category, ingredient, page, limit } = paramsObj;

  const [count, setCount] = useState(0);
  const [restPages, setRestPages] = useState(0);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const totalPages = Math.ceil(count / limit);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 1440 && limit !== 10) {
      setLimit(10);
    } else if (windowWidth >= 1440 && limit !== 9) {
      setLimit(9);
    }
  }, [windowWidth, limit]);

  useEffect(() => {
    async function loadDrinks() {
      try {
        const response = await fetchDrinks({
          params: {
            q: q,
            category: category,
            ingredient: ingredient,
            page: page,
            limit: limit,
          },
        });
        if (!response.result.length) {
          return toast.error(
            `Sorry, there are no drinks matching your search query. Please try again.`
          );
        }
        setFilteredDrinks(response.result);
        setCount(response.count);
        setRestPages(response.restPages);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadDrinks();
  }, [q, category, ingredient, page, limit]);

  const updateQueryPage = ({ parameter, value }) => {
    const nextParams = value !== '' ? { parameter } : {};
    setSearchParams(...searchParams, [nextParams, value]);
  };

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch
        query={q}
        category={category}
        ingredient={ingredient}
        onChange={updateQueryPage}
      />
      <Drinks drinks={filteredDrinks} />
      <Paginator
        page={page}
        onChange={updateQueryPage}
        totalPages={totalPages}
        restPages={restPages}
      />
    </StyledMainContainer>
  );
};

export default DrinksPage;

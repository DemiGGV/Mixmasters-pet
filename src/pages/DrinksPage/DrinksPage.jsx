import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearch } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';
import Paginator from 'components/Paginator/Paginator';
import { StyledMainContainer } from './DrinksPage.styled';
import { fetchDrinks } from 'components/DrinksSearch/DrinkSearchApi';
import { useWindowWidth } from 'hooks/useWindowWidth';

export const DrinksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsObj = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const windowWidth = useWindowWidth();
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(() => {
    if (windowWidth > 0 && windowWidth < 1440) return 10;
    else if (windowWidth >= 1440) return 9;
  });
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const totalPages = Math.ceil(count / limit);

  useEffect(() => {
    if ((+paramsObj?.page > +totalPages) & (+totalPages > 0)) {
      paramsObj.page = +totalPages;
      setSearchParams(paramsObj);
      return;
    }
    if (paramsObj?.page) return;
    setSearchParams({ page: 1 });
  }, [paramsObj, setSearchParams, totalPages]);

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
        const { q = '', category = '', ingredient = '', page = 1 } = paramsObj;
        const response = await fetchDrinks({
          params: {
            q,
            category,
            ingredient,
            page,
            limit,
          },
        });
        if (!response.result.length) {
          return toast.error(
            `Sorry, there are no drinks matching your search query. Please try again.`
          );
        }
        setFilteredDrinks(response.result);
        setCount(response.count);
      } catch (error) {
        if (error.code) {
          return toast.error(`Oops, something went wrong.`);
        }
      }
    }
    loadDrinks();
  }, [paramsObj, limit]);

  const updateQueryPage = (parameter, value) => {
    console.log('✋😎👉 ~ value:', value);
    console.log('✋😎👉 ~ parameter:', parameter);
    console.log('✋😎👉 ~ searchParams:', searchParams);

    if (value === '') {
      if (!delete paramsObj[parameter]) {
        console.log('Error delete search parameter!');
      }
    } else {
      paramsObj[parameter] = value;
    }
    setSearchParams(paramsObj);
  };

  return (
    <StyledMainContainer>
      <PageTitle title="Drinks" />
      <DrinksSearch
        query={paramsObj.q ?? ''}
        category={paramsObj.category}
        ingredient={paramsObj.ingredient}
        onChange={updateQueryPage}
      />
      <Drinks drinks={filteredDrinks} />
      <Paginator
        page={+paramsObj.page}
        totalPages={+totalPages}
        onChange={updateQueryPage}
      />
    </StyledMainContainer>
  );
};

export default DrinksPage;

import { useState, useEffect } from 'react';
import {
  StyledArrows,
  StyledPagination,
  StyledList,
  StyledItem,
} from './Paginator.module';
import sprite from 'assets/sprite.svg';
import { useWindowWidth } from 'hooks/useWindowWidth';

const Paginator = ({ page = 1, totalPages = 1, onChange }) => {
  const [pagesToShow, setPagesToShow] = useState(5);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 768 && pagesToShow !== 5) {
      setPagesToShow(5);
    } else if (windowWidth >= 768 && pagesToShow !== 8) {
      setPagesToShow(8);
    }
  }, [windowWidth, pagesToShow]);

  const getVisiblePageNumbers = () => {
    const minNum = page > pagesToShow ? page - pagesToShow + 1 : 1;
    const maxNum =
      totalPages < pagesToShow ? totalPages + 1 : pagesToShow + minNum;
    return Array.from({ length: maxNum - minNum }, (_, i) => i + minNum);
  };

  return (
    <StyledPagination>
      <StyledArrows
        type="button"
        onClick={() => onChange('page', 1)}
        disabled={page === 1}
      >
        <svg style={{ width: 14, height: 20, marginRight: 30 }}>
          <use href={sprite + '#icon-arrow-left'} />
        </svg>
      </StyledArrows>
      <StyledArrows
        type="button"
        onClick={() => onChange('page', page - 1)}
        disabled={page === 1}
      >
        <svg style={{ width: 14, height: 20, marginRight: 30 }}>
          <use href={sprite + '#icon-arrow-left'} />
        </svg>
      </StyledArrows>
      <StyledList>
        {getVisiblePageNumbers().map((number, index) => (
          <li key={index}>
            <StyledItem
              key={index}
              onClick={() => onChange('page', number)}
              className={number === page ? 'active' : ''}
            >
              {number}
            </StyledItem>
          </li>
        ))}
      </StyledList>
      <StyledArrows
        type="button"
        onClick={() => onChange('page', page + 1)}
        disabled={page === totalPages}
      >
        <svg style={{ width: 14, height: 20 }}>
          <use href={sprite + '#icon-arrow-right'} />
        </svg>
      </StyledArrows>
      <StyledArrows
        type="button"
        onClick={() => onChange('page', totalPages)}
        disabled={page === totalPages}
      >
        <svg style={{ width: 14, height: 20 }}>
          <use href={sprite + '#icon-arrow-right'} />
        </svg>
      </StyledArrows>
    </StyledPagination>
  );
};

export default Paginator;

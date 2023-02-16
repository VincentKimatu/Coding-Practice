import React from 'react';
import { StyledCard } from './Card.style';

function Card({ item }) {
  return (
    <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>

      <div>
        <img src={`${item.image}`} alt='' />
      </div>
    </StyledCard>
  );
}

export default Card;

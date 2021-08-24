import React, { FC } from 'react';

import { createFullGrid } from 'utils';
import Block from './block';
import { Container, Row } from './styles';

const Grid: FC = () => {
  const grid = createFullGrid();
  console.log('11styles', grid);

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container" key={rowIndex}>
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} data-cy="block">
                  {colIndex}
                </Block>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;

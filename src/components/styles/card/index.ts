import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    max-height: fit-content;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
  `}
`;

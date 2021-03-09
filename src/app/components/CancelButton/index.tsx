import styled from 'styled-components/macro';

export const CancelButton = styled.a`
  flex: 1;
  text-decoration: none;
  color: rgba(220, 120, 95, 1);
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #fff5f2;
    border: 1px solid #fff5f2;
    border-radius: 0.5rem;
    min-height: 2rem;
  }
`;

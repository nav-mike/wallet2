import styled from 'styled-components/macro';

export const SubmitButton = styled.button`
  flex: 1;
  background-color: rgba(220, 120, 95, 1);
  border: 1px solid rgba(220, 120, 95, 1);
  border-radius: 0.5rem;
  min-height: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #fab9a9;
  }
`;

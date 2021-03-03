import * as React from 'react';
import styled from 'styled-components/macro';

export function Nav() {
  return (
    <Wrapper>
      <Item href="/add-charge" title="Add charge">
        Add Charge
      </Item>
      <Item href="/define-budget" title="Define budget">
        Define budget
      </Item>
      <Item href="/my-budgets" title="My Budgets">
        My Budgets
      </Item>
      <Item href="/my-charges" title="My Charges">
        My Charges
      </Item>
      <Item href="/logout" title="logout">
        Logout
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

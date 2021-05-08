import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBag>
            <Icon id={"shopping-bag"} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </ShoppingBag>
          <UnstyledButton>
            <Icon id={"search"} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id={"menu"} />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${QUERIES.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }

  @media (max-width: ${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`;

const ShoppingBag = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Side = styled.div`
  flex: 1;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;

/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogContent, DialogOverlay } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss} isOpen={isOpen}>
      <Content aria-label={"Menu"}>
        <CloseButton onClick={onDismiss}>
          <Icon id={"close"} />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: none;
  background: var(--color-backdrop);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;
  background: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: calc(18 / 16 * 1rem);
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal};
  font-size: calc(14 / 16 * 1rem);
`;

export default MobileMenu;

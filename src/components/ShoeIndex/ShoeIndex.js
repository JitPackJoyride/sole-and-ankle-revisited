import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";
import ShoeBreadcrumbs from "../ShoeBreadcrumbs";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <SortFilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const DesktopBreadcrumbs = styled.div`
  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: revert;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const SortFilterWrapper = styled.div`
  @media (max-width: ${QUERIES.phoneAndSmaller}) {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${QUERIES.tabletAndSmaller}) {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;

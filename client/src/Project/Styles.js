import styled from 'styled-components';

import { height, sizes } from 'shared/utils/styles';

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;
const paddingTop = height.header + 40;
export const ProjectPage = styled.div`
  padding: ${paddingTop}px 32px 50px ${paddingLeft}px;

  @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  }
  @media (max-width: 999px) {
    padding-left: ${paddingLeft - 20 - sizes.secondarySideBarWidth}px;
  }
`;

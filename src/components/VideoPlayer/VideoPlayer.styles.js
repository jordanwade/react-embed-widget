import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const VideoPlayer = styled.div`
  background-color: ${themeGet('colors.fill.screen')};
  border-radius: ${themeGet('radii.base')};
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  > iframe {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }

  ${system}
`;

export default VideoPlayer;

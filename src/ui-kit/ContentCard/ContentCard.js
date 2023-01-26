import React from 'react';
import { withTheme } from 'styled-components';

import { BodyText, Box, H3, systemPropTypes } from '../../ui-kit';

function ContentCard(props = {}) {
  return (
    <Box display="flex" {...props}>
      {/* Content */}
      <Box
        position="relative"
        backgroundColor="material.regular"
        borderRadius="l"
        overflow="hidden"
      >
        {/* Image */}
        <img
          alt={props.title}
          src={props.image?.sources[0].uri ? props.image.sources[0].uri : null}
          width="100%"
        />
        {/* Masthead */}
        <Box
          padding="base"
          background="material.regular"
          backdrop-filter="blur(64px)"
        >
          <H3>{props.title}</H3>
          <BodyText>{props.summary}</BodyText>
        </Box>
      </Box>
    </Box>
  );
}

ContentCard.propTypes = {
  ...systemPropTypes,
};

export default withTheme(ContentCard);

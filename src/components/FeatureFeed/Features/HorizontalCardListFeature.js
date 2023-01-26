import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getURLFromType } from '../../../utils';
import { ContentCard, Box, H3, systemPropTypes } from '../../../ui-kit';

function HorizontalCardListFeature(props = {}) {
  const navigate = useNavigate();

  const handleActionPress = (item) => {
    navigate({
      pathname: '/',
      search: `?id=${getURLFromType(item.relatedNode)}`,
    });
  };

  return (
    <Box pb="l" {...props}>
      <H3 mb="xs">{props.feature.title}</H3>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
        {props.feature?.cards?.map((item, index) => (
          <ContentCard
            key={item.title}
            image={item.coverImage}
            title={item.title}
            summary={item.summary}
            onClick={() => handleActionPress(item)}
          />
        ))}
      </Box>
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  ...systemPropTypes,
};

export default HorizontalCardListFeature;

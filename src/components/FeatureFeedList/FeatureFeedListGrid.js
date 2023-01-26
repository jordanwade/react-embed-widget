// import { useNavigation } from '@apollosproject/tv-shared/router';
// import { ContentItemCard } from '@apollosproject/tv-shared/ui-kit';
// import { getPathFromType } from '@apollosproject/tv-shared/utils';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';

import { Box, H3 } from '../../ui-kit';

function FeatureFeedListGrid(props = {}) {
  // const router = useNavigation();

  // const [viewWidth, setViewWidth] = React.useState(0);
  // const boxWidth = viewWidth * 0.25 - 66;

  // const handleActionPress = (item) => {
  //   router.push(getPathFromType(item.relatedNode), {
  //     itemId: item.relatedNode.id,
  //   });
  // };

  return (
    <Box pb="l" backgroundColor="#323233" {...props}>
      <H3 mb="xs">
        {'This is a grid of Feature Feed items for view more clicks'}
      </H3>
      {/* {props.feature?.cards?.map((item, index) => (
        <Box key={index} width="200px" mr="16px">
          <img
            alt="Content Title"
            src={item.coverImage?.sources[0]?.uri}
            width="100%"
          />
        </Box>
      ))} */}
    </Box>
  );
}

FeatureFeedListGrid.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  loading: PropTypes.bool,
};

export default withTheme(FeatureFeedListGrid);

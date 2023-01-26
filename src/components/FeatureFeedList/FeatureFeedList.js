import React from 'react';
import PropTypes from 'prop-types';

import { Feed } from '..';
import { Box, Loader } from '../../ui-kit';

import FeatureFeedListGrid from './FeatureFeedListGrid';

const FeatureFeedList = (props) => {
  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Loader />
      </Box>
    );
  }

  const FeatureListComponent =
    props.data?.features?.length > 1 ? Feed : FeatureFeedListGrid;

  return <FeatureListComponent {...props} />;
};

FeatureFeedList.propTypes = {
  loading: PropTypes.bool,
};

export default FeatureFeedList;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Loader } from '../../ui-kit';

import FeatureFeedComponentMap from './FeatureFeedComponentMap';

function renderFeature(feature, index) {
  // Lookup the component responsible for rendering this Feature
  const FeatureComponent = FeatureFeedComponentMap[feature.__typename];

  if (FeatureComponent) {
    return <FeatureComponent key={feature.id} feature={feature} />;
  }

  // eslint-disable-next-line no-console
  console.log(
    `⚠️  FeatureFeed could not render feature of type "${feature.__typename}"`
  );

  return null;
}

const Feed = (props) => {
  // Clunky, silly workaround for an Apollo query `loading` prop problem.
  // We don't want cache updates or background refetch calls to trigger
  // the loading state when we have data... that unmounts the VideoPlayer.
  // To avoid a flicker of "error" state, also show loader on first query.
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad && !props.loading) {
      setIsFirstLoad(false);
    }
  }, [props.loading, isFirstLoad]);

  if (isFirstLoad || (props.loading && !props.data)) {
    return (
      <Box
        display="flex"
        flex={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        flexGrow={1}
      >
        <Loader />
      </Box>
    );
  }

  const features = props.data?.features;
  const renderedFeatures = features?.map(renderFeature);

  if (props.error || !renderedFeatures || !renderedFeatures.length) {
    return (
      <Box
        display="flex"
        flex={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        flexGrow={1}
      >
        <h4>Sorry, something went wrong.</h4>
        <p>No features found in this feed.</p>
      </Box>
    );
  }

  return renderedFeatures;
};

Feed.propTypes = {
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};

export default Feed;

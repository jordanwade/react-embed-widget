import React from 'react';
import { TabFeedProvider } from '../providers';
import { Feed } from '../components';

const FeatureFeed = (props) => {
  return (
    <TabFeedProvider
      Component={Feed}
      options={{
        variables: {
          tab: 'TV',
        },
      }}
      {...props}
    />
  );
};

FeatureFeed.propTypes = {};

export default FeatureFeed;

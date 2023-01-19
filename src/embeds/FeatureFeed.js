import React from 'react';
import { TabFeedProvider } from '../providers';
import { Feed } from '../components';

const FeatureFeed = (props) => {
  return (
    <div>
      <p>This is a FeatureFeed embed for {props.church} church</p>
      <TabFeedProvider
        Component={Feed}
        options={{
          variables: {
            tab: 'TV',
          },
        }}
        {...props}
      />
    </div>
  );
};

FeatureFeed.propTypes = {};

export default FeatureFeed;

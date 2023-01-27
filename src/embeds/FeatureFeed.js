import React from 'react';
import {
  TabFeedProvider,
  ContentItemProvider,
  FeatureFeedProvider,
} from '../providers';
import { Feed, ContentSingle, FeatureFeedList } from '../components';
import { Box } from '../ui-kit';
import { useSearchParams } from 'react-router-dom';

const FeatureFeed = (props) => {
  const [searchParams] = useSearchParams();
  const _id = searchParams.get('id');

  const [type, randomId] = _id?.split(/-(.*)/s) ?? [];

  switch (type) {
    case 'EventContentItem':
    case 'InformationalContentItem':
    case 'MediaContentItem':
    case 'WeekendContentItem':
    case 'UniversalContentItem': {
      const options = {
        variables: { id: `${type}:${randomId}` },
      };

      return (
        <ContentItemProvider Component={ContentSingle} options={options} />
      );
    }
    case 'ContentChannel': {
      return <h1>Content Channel Component</h1>;
    }
    case 'Url': {
      return <h1>External Url</h1>;
    }
    case 'FeatureFeed': {
      const options = {
        variables: { id: `${type}:${randomId}` },
      };
      return (
        <FeatureFeedProvider Component={FeatureFeedList} options={options} />
      );
    }
    default: {
      return (
        <Box padding="40px">
          <TabFeedProvider
            Component={Feed}
            options={{
              variables: {
                tab: 'TV',
              },
            }}
            {...props}
          />
        </Box>
      );
    }
  }
};

FeatureFeed.propTypes = {};

export default FeatureFeed;

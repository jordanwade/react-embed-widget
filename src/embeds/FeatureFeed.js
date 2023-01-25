import React from 'react';
import { TabFeedProvider, ContentItemProvider } from '../providers';
import { Feed, ContentSingle } from '../components';
import { useSearchParams } from 'react-router-dom';

const FeatureFeed = (props) => {
  const [searchParams] = useSearchParams();
  const _id = searchParams.get('id');

  const [type, randomId] = _id?.split('-');

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
    case 'FeatureFeed':
    default: {
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
    }
  }
};

FeatureFeed.propTypes = {};

export default FeatureFeed;

import { gql, useQuery } from '@apollo/client';
import { VIDEO_MEDIA_FIELDS } from '../fragments';

export const TAB_FEED_FEATURES = gql`
  ${VIDEO_MEDIA_FIELDS}

  query tabFeed($tab: Tab!) {
    tabFeedFeatures(tab: $tab) {
      id
      features {
        id
        __typename
        order

        # TODO :: The fields being queried are hard coded/incomplete.
        ... on HeroListFeature {
          id
          title
          subtitle
          heroCard {
            id
            title
            labelText
            summary
            coverImage {
              name
              sources {
                uri
              }
            }
            hasAction
            action
            actionIcon
            relatedNode {
              id
              __typename

              ... on ContentItem {
                title
                videos {
                  ...VideoMediaFields
                }
              }
            }
          }
          # These can be card-like items, not just buttons
          actions {
            id
            title
            subtitle
            action
            relatedNode {
              id
              __typename
              ... on ContentItem {
                title
              }
            }
            image {
              sources {
                uri
              }
            }
          }
          primaryAction {
            title
            action
            relatedNode {
              id
              __typename
              ... on ContentItem {
                title
              }
            }
          }
        }

        ... on HorizontalCardListFeature {
          id
          title
          subtitle
          cards {
            id
            title
            labelText
            summary
            coverImage {
              name
              sources {
                uri
              }
            }
            hasAction
            action
            actionIcon
            relatedNode {
              id
              __typename
              ... on ContentItem {
                title
                videos {
                  ...VideoMediaFields
                }
              }
            }
          }
          primaryAction {
            title
            action
            relatedNode {
              id
              __typename
              ... on ContentItem {
                title
                videos {
                  ...VideoMediaFields
                }
              }
            }
          }
        }

        ... on VerticalCardListFeature {
          id
          title
          subtitle
          cards {
            id
            title
            labelText
            summary
            coverImage {
              name
              sources {
                uri
              }
            }
            hasAction
            action
            actionIcon
            relatedNode {
              id
              __typename
            }
          }
        }
      }
    }
  }
`;

function useTabFeed(options = {}) {
  const query = useQuery(TAB_FEED_FEATURES, {
    fetchPolicy: 'cache-and-network',
    ...options,
  });

  return {
    tabFeedFeatures: query?.data?.tabFeedFeatures || {},
    ...query,
  };
}

export default useTabFeed;

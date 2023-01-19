import { gql } from '@apollo/client';

export const VIDEO_MEDIA_FIELDS = gql`
  fragment VideoMediaFields on VideoMedia {
    __typename
    id
    key
    name
    sources {
      uri
    }
    duration
    userProgress {
      playhead
      complete
    }
    embedHtml
  }
`;

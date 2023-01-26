import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import format from 'date-fns/format';
import addMinutes from 'date-fns/addMinutes';

import { apollosPropTypes } from 'shared/lib';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';
import { GET_CONTENT_ITEM } from 'shared/hooks/useContentItem';

import {
  FeatureFeed,
  InteractWhenLoaded,
  TrackEventWhenLoaded,
} from 'shared/components';
import {
  Box,
  ContentItemCard,
  H2,
  H4,
  Loader,
  Longform,
  utils,
  Button,
} from 'shared/ui-kit';
import VideoPlayer from 'shared/components/VideoPlayer';

import { SEO, CardCarousel } from 'tvappweb/components';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `WeekendContentItem:${id}`;
}

const DEFAULT_CONTENT_WIDTH = utils.rem('1280px');

function ContentSingle(props = {}) {
  const router = useNavigation();

  const invalidPage = !props.loading && !props.data;

  useEffect(() => {
    if (invalidPage) {
      router.push('/');
    }
  }, [invalidPage, router]);

  if (props.loading || invalidPage) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        flexGrow={1}
      >
        <Loader />
      </Box>
    );
  }

  const coverImage = props?.data?.coverImage;
  const edges = props?.data?.childContentItemsConnection?.edges;
  const htmlContent = props?.data?.htmlContent;
  const title = props?.data?.title;
  const publishDate = new Date(props?.data?.publishDate);
  const formatedPublishDate = props?.data?.publishDate
    ? format(
        addMinutes(publishDate, publishDate.getTimezoneOffset()),
        'MMMM do, yyyy'
      )
    : null;

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  const handleActionPress = (node) => {
    router.push(getURLFromType(node));
  };

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <>
      <SEO
        description={htmlContent}
        image={coverImage?.sources[0]?.uri}
        title={title}
        url={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      <InteractWhenLoaded
        loading={props.loading}
        nodeId={props.data?.id}
        action={'COMPLETE'}
      />
      <TrackEventWhenLoaded
        loading={props.loading}
        eventName={'View Content'}
        properties={{
          itemId: props.data?.id,
          parentId: props.data?.parentChannel?.id,
          parentName: props.data?.parentChannel?.name,
          publishDate,
          title,
        }}
      />
      <Box width="100%" maxWidth={props.contentMaxWidth} margin="0 auto">
        <Box mb="l">
          <Button
            py="xs"
            title="← Back"
            type="link"
            onClick={handleGoBack}
            mb="xs"
          />
          {props.data?.videos[0]?.embedHtml ? (
            <VideoPlayer
              dangerouslySetInnerHTML={props.data?.videos[0]?.embedHtml}
            />
          ) : (
            <Box
              backgroundSize="cover"
              paddingBottom="56.25%"
              backgroundPosition="center"
              backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
            />
          )}
        </Box>

        <Box mb="l">
          {formatedPublishDate ? (
            <H4 color="text.secondary">{formatedPublishDate}</H4>
          ) : null}
          {title ? <H2 mb="s">{title}</H2> : null}
          {htmlContent ? (
            <Longform dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          ) : null}
        </Box>

        {edges?.length > 0 ? (
          <Box mb="l">
            <CardCarousel
              data={edges}
              peek={false}
              iconSize="42px"
              iconOffset="-11px"
              renderItem={({ item }) => (
                <ContentItemCard
                  image={item.node.coverImage}
                  title={item.node.title}
                  onPress={() => handleActionPress(item.node)}
                />
              )}
            />
          </Box>
        ) : null}

        {props?.data?.featureFeed?.features && (
          <FeatureFeed data={props?.data?.featureFeed} />
        )}
      </Box>
    </>
  );
}

ContentSingle.propTypes = {
  contentMaxWidth: PropTypes.string,
  data: PropTypes.shape({
    childContentItemsConnection: PropTypes.shape(),
    coverImage: PropTypes.shape({}),
    featureFeed: apollosPropTypes.FeatureFeed,
    htmlContent: PropTypes.string,
    id: PropTypes.string,
    parentChannel: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    publishDate: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
  }),
  loading: PropTypes.bool,
};

ContentSingle.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
};

export default ContentSingle;
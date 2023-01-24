import React from 'react';
import { withTheme } from 'styled-components';

// import { useNavigation } from '../../router';
// import { getURLFromType } from '../../../utils';

import { Box, Button, H1, H2, H3, H4, systemPropTypes } from '../../../ui-kit';

function HeroListFeature(props = {}) {
  // const router = useNavigation();

  // // Event Handlers
  // const handleWatchNowPress = () => {
  //   router.push(getURLFromType(props.feature.heroCard.relatedNode));
  // };

  // const handlePrimaryActionClick = () => {
  //   router.push(
  //     getURLFromType(
  //       props.feature.primaryAction.relatedNode,
  //       props.feature.primaryAction.title
  //     )
  //   );
  // };

  return (
    <Box {...props}>
      {/* Content */}
      <Box
        position="relative"
        backgroundColor="#323233"
        borderRadius="20px"
        overflow="hidden"
      >
        {/* Image */}
        <img
          src={props.feature.heroCard.coverImage?.sources[0]?.uri}
          width="100%"
        />
        {/* Masthead */}
        <Box padding="20px">
          <H3>{props.feature.heroCard.title}</H3>
          <H4 fontWeight="400">{props.feature.heroCard.summary}</H4>

          {/* CTAs */}
          <Box
            display="flex"
            alignSelf="flex-start"
            flexDirection="row"
            mt="base"
          >
            <Button
              mr="8px"
              title="Watch now"
              // onPress={handleWatchNowPress}
            />
            {props.feature.primaryAction ? (
              <Button
                title={props.feature.primaryAction.title}
                // onPress={handlePrimaryActionClick}
                type="secondary"
              />
            ) : null}
          </Box>
        </Box>

        {/* Actions / Cards list */}
        {props.feature.actions?.length ? (
          <Box>
            {/* List Header */}
            {props.feature.title || props.feature.subtitle ? (
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                mb="s"
                px="base"
              >
                <Box>
                  <H4 color="text.secondary">{props.feature.subtitle}</H4>
                  <H3>{props.feature.title}</H3>
                </Box>
              </Box>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
};

export default withTheme(HeroListFeature);

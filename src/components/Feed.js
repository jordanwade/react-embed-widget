import React from 'react';

const Feed = (props) => {
  console.log(props);
  return (
    <div>
      <p>This is a Feed component for {props.church} church</p>
      {JSON.stringify(props.data.features)}
    </div>
  );
};

Feed.propTypes = {};

export default Feed;

import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'

const videoResponsive = {
  overflow: 'hidden',
  paddingBottom: '56.25%',
  position: 'relative',
  height: 0,
}

const YouTube = ({ videoId }) => (
  <div style={videoResponsive}>
    <ReactPlayer
      style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
      width="853"
      height="480"
      url={`https://youtu.be/${videoId}`}
    />
  </div>
)

YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
}

export default YouTube

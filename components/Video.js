import PropTypes from 'prop-types'

const videoResponsive = {
  overflow: 'hidden',
  paddingBottom: '56.25%',
  position: 'relative',
  height: 0,
}

const Video = ({ embedId }) => (
  <div style={videoResponsive}>
    <iframe
      style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
      width="853"
      height="480"
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Embedded youtube"
      type="text/html"
    />
  </div>
)

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default Video

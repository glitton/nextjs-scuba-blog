import ReactPlayer from 'react-player/lazy'
import PropTypes from 'prop-types'

const videoResponsive = {
  overflow: 'hidden',
  paddingBottom: '56.25%',
  position: 'relative',
  height: 0,
}

const ReactVideo = ({ embedId }) => {
  return (
    <div style={videoResponsive}>
      <ReactVideo src={`https://www.youtube.com/watch?${embedId}`} />
    </div>
  )
}
export default ReactVideo

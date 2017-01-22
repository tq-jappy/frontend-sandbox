import { connect } from 'react-redux'
import GoogleMap from '../../components/map/GoogleMap';

export default connect(
  (state, ownProps) => ({
    lat: state.map.lat,
    lng: state.map.lng,
    width: state.map.width,
    height: state.map.height
  }),
  (dispatch, ownProps) => ({

  })
)(GoogleMap)
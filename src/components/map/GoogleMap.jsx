import React, { PropTypes } from 'react';
import * as ReactDOM from 'react-dom';

export default class GoogleMap extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log('componentDidMount', this.props, this.state);

    const map = new google.maps.Map(
      ReactDOM.findDOMNode(this.refs['top']),
      {
        center: new google.maps.LatLng(this.props.lat, this.props.lng),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
    );

    this.setState({ map: map });
  }

  render() {
    console.log('render map', this.state, this.props.markerPositions);

    return (
      <div ref="top" style={{ width: this.props.width, height: this.props.height }}></div>
    );
  }
}

GoogleMap.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
}
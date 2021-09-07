import { Marker } from 'google-maps-react';

class CustomMarker extends Marker {
  componentDidUpdate(prevProps) {
    if (
      // @ts-ignore
      this.props.map !== prevProps.map ||
      // @ts-ignore I need to check this later. Not sure how to fix ts errors here
      this.props.icon.url !== prevProps.icon.url ||
      // @ts-ignore
      this.props.position.lat !== prevProps.position.lat ||
      // @ts-ignore
      this.props.position.lng !== prevProps.position.lng
    ) {
      // @ts-ignore I need to check this later. Not sure how to fix ts errors here
      if (this.marker) {
        // @ts-ignore I need to check this later. Not sure how to fix ts errors here
        this.marker.setMap(null);
      }
      // @ts-ignore I need to check this later. Not sure how to fix ts errors here
      this.renderMarker();
    }
  }
}

export default CustomMarker;

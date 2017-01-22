export const addMarker = (lat, lng) => {
  return {
    type: 'ADD_MARKER',
    lat,
    lng
  };
}
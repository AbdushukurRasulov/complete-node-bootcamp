

export const displayMap = locations => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkdXNodWt1ciIsImEiOiJja2FzYjE3Y3EwZm9kMzRxZHAwZ3p6YTJjIn0.YU1CxDvrQGltoKIS3J9Z4Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/abdushukur/ckasb4d5600rq1iqv25fvbqcu',
    scrollZoom: false
  });
  
  const bounds = new mapboxgl.LngLatBounds();
  
  locations.forEach(loc => {
    // Add Marker
    const el = document.createElement('div')
    el.className = 'marker';
  
      new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
      })
      .setLngLat(loc.coordinates)
      .addTo(map);
    
    // Add popup
      new mapboxgl.Popup({
        offset: 30
      })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${ loc.day }: ${ loc.description }</p>`)
      .addTo(map)
    
    bounds.extend(loc.coordinates);
  })
  
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
}
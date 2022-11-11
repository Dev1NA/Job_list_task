import GoogleMapReact from 'google-map-react';
import React from 'react';

function Map({ center }) {
  return (
    <div className="max-w-full h-[300px] mr-[15px] rounded">
      <GoogleMapReact
        options={{ mapId: '624c545343341e2' }}
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={3}
        zoom={15}
      />
    </div>
  );
}

export default Map;

import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ geography, agency }) => {
  const [selectedProperty, setSelectedProperty] = useState("");

  const [viewPort, setViewport] = useState({
    latitude: geography.lat,
    longitude: geography.lng,
    zoom: 15,
    width: "100%",
    height: "100%",
  });

  return (
    <ReactMapGL
      mapStyle={process.env.MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.MAPBOX_API_PK}
      {...viewPort}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      className="rounded-lg w-full"
    >
      <Marker
        longitude={geography.lng}
        latitude={geography.lat}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <p
          onClick={() => setSelectedProperty(agency.name)}
          role="img"
          className="cursor-pointer text-2xl"
          aria-label="push-pin"
        >
          📍
        </p>
      </Marker>

      {selectedProperty === agency.name && (
        <Popup
          latitude={geography.lat}
          longitude={geography.lng}
          onClose={() => setSelectedProperty("")}
        >
          {selectedProperty}
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default Map;

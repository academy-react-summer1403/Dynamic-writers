import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateLocationInProf from '../../core/services/api/Panel/UpdateLocationInProf';
import { motion } from 'framer-motion';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

const AddAddress = () => {
  const [profile, setRerender] = useOutletContext();
  const notifySuccess = (message) => toast.success(message, { position: "top-center", theme: "dark" });
  const notifyError = (message) => toast.error(message, { position: "top-center", theme: "dark" });

  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const hasCoordinates = profile.latitude !== null && profile.longitude !== null;
  const initialPosition = hasCoordinates ? [profile.latitude, profile.longitude] : [0, 0];
  const [position, setPosition] = useState(initialPosition);
  const [address, setAddress] = useState(hasCoordinates ? `Lat:${profile.latitude}, Lng:${profile.longitude}` : '');
  const [popupVisible, setPopupVisible] = useState(false);   

  const updateMarkerPosition = async (event) => {
    const { lat, lng } = event.latlng;
    if (Math.abs(lat.toFixed(5)) > 120 || Math.abs(lng.toFixed(5)) > 120) {
      return notifyError("موقعیت مکانی نا معتبر است");
    }
    setPosition([lat, lng]);
    const newAddress = `Lat: ${lat.toFixed(5)}, Lng:${lng.toFixed(5)}`; 
    setAddress(newAddress);
    let message = await UpdateLocationInProf(profile, lat.toString(), lng.toString());
    notifySuccess(message.message);
    setRerender(prev => !prev);
  };

  const MapEventHandler = () => {
    useMapEvents({
      click: updateMarkerPosition,
      dblclick: (event) => {
        const { lat, lng } = event.latlng; 
        setPosition([lat, lng]);
        const newAddress = `Lat: ${lat.toFixed(5)}, Lng:${lng.toFixed(5)}`;
        setAddress(newAddress); 
        setPopupVisible(true); 
      },
    });
    return null;
  };

  const MapControl = () => {
    const map = useMap();
    useEffect(() => {
      const geocoder = L.Control.Geocoder.nominatim();
      const geocoderControl = L.Control.geocoder({
        geocoder,
        position: 'topright',
        placeholder: 'جستجوی مکان...',
        onComplete: (results) => {
          if (results && results.length > 0) {
            const { lat, lng } = results[0].center;
            setPosition([lat, lng]);
            const newAddress = `Lat: ${lat.toFixed(5)}, Lng:${lng.toFixed(5)}`;
            setAddress(newAddress);
          }
        }
      });

      geocoderControl.addTo(map);

      const searchInput = document.querySelector('.leaflet-control-geocoder-input');
      if (searchInput) {
        searchInput.classList.add('form-control', 'rounded-3', 'p-2', 'shadow-sm');
      }

      return () => {
        map.removeControl(geocoderControl);
      };
    }, [map]);

    return null;
  };

  return (
    <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }} className="w-[100%] h-[800px] flex flex-col justify-start items-end p-[40px] pr-[60px] gap-8">
      <span className="text-[16px] font-[500] text-[#3772FF] text-right">
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
      </span>

      <div className="md:w-[90%] md:h-[500px] w-[90%] max-w-[1016px] relative z-10 lg:w-[90%] rounded-[16px] bg-slate-500 overflow-hidden">
        <MapContainer center={position} zoom={15} style={{ height: '500px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          <MapEventHandler />
          <MapControl />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              موقعیت انتخاب شده:<br />
              {address}
            </Popup>
          </Marker>

          {popupVisible && (
            <Marker position={position} icon={markerIcon}>
              <Popup onClose={() => setPopupVisible(false)}></Popup>
            </Marker>
          )}
        </MapContainer>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default AddAddress;

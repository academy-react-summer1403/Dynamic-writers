import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateLocationInProf from '../../core/services/api/Panel/UpdateLocationInProf';
const AddAddress = () => {
  const [profile] = useOutletContext();
  const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});

  const markerIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const [position, setPosition] = useState([profile.latitude, profile.longitude]);
  const [address, setAddress] = useState(`Lat:${profile.latitude},Lng:${profile.longitude}`); 
  const [popupVisible, setPopupVisible] = useState(false); 

  const updateMarkerPosition =async (event) => {
    const { lat, lng } = event.latlng; 
    setPosition([lat, lng]);
    const newAddress = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`; 
    setAddress(newAddress);
    let massage=await UpdateLocationInProf(profile,lat.toString(),lng.toString())
    notifySuccess(massage.message)
  };

  const MapEventHandler = () => {
    useMapEvents({
      click: updateMarkerPosition, 
      dblclick: (event) => {
        const { lat, lng } = event.latlng; 
        setPosition([lat, lng]); 
        const newAddress = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
        setAddress(newAddress); 
        setPopupVisible(true); 
      },
    });
    return null;
  };

  return (
    <div className='w-[100%] h-[800px] flex flex-col justify-start items-end p-[40px] pr-[60px] gap-8'>
      <span className='text-[16px] font-[500] text-[#3772FF]'>
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
      </span>
      <div className='w-[1016px] h-[500px] rounded-[16px] bg-slate-500 overflow-hidden'>
        <MapContainer 
          center={position} 
          zoom={20} 
          style={{ height: '500px', width: '100%' }} 
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <MapEventHandler /> 
          
          <Marker position={position} icon={markerIcon}>
            <Popup>
              موقعیت انتخاب شده:<br />
              {address} 
            </Popup>
          </Marker>

          {popupVisible && (
            <Marker position={position} icon={markerIcon}>
              <Popup onClose={() => setPopupVisible(false)}>
              </Popup>
            </Marker>
          )}
        </MapContainer>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default AddAddress;

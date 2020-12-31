import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import '../../index.css';

import { LocationIcon } from './Icon'

export const Mapa = () => {
    return (
        <div>
            <MapContainer center={[15.6723, -96.4867]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[15.6723, -96.4867]} icon={ LocationIcon } >
                    <Popup>
                        Cooperativa SCPP Bahía La Tijera S.C.DE R.L. DE C.V.
                    </Popup>
                </Marker>
            </MapContainer>
            <small>Carretera Puerto Ángel Pochutla km 246.5 SN San Martin Puerto Ángel a 20 mts de la cruz de San Martin, San Pedro Pochutla, Oaxaca C.P. 70902.</small>
        </div>
    )
}

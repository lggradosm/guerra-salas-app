import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
export default function Footer() {
  return (
    <footer className=" h-20 flex flex-col">
      <div className="bg-primary text-sm text-white p-20">
        <div>
          <div>
            <h3>Horario de atención</h3>
            <p>Lunes a Viernes: 09:00 - 13:30 15:00 - 18:00</p>
            <p>Sábados: 09:00 - 13:30</p>
          </div>
          <div>
            <h3>Contacto</h3>
            <p>Av.Larco 1098 - Urb.San Andrés III Etapa, Trujillo - Perú</p>
          </div>
        </div>
        {/* <LoadScript googleMapsApiKey='AIzaSyC0ubYI6yrmAFXpIKBYWtbb1TGl2IeY-t8'>
            <GoogleMap mapContainerStyle={{width:"400px",height:"400px"}} center={{lat:-8.1240248,lng:-79.0384848}} zoom={18} >
            <Marker position={{  lat: 37.772, lng: -122.214}}/>
            </GoogleMap>

            </LoadScript> */}
      </div>

      <p className="text-center text-sm p-2 text-primary">
        Todos los derechos reservados &copy; 2022 Notaría Guerra Salas
      </p>
    </footer>
  );
}

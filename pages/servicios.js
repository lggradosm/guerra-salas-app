import React from 'react'
import Image from 'next/image'
import asuntos_no_contenciosos from '../public/images/asuntos_no_contenciosos.webp'
import autorizacion_viaje from '../public/images/autorizacion_viaje.webp'
import cartas_notariales from '../public/images/cartas_notariales.webp'
import certificacion_actas from '../public/images/certificacion_actas.webp'
import escrituras_publicas from '../public/images/escrituras_publicas.webp'
import legalizacion from '../public/images/legalizacion.webp'
import protestos from "../public/images/protestos.webp"
import transferencias_vehiculares from "../public/images/transferencias_vehiculares.webp"
import Link from 'next/link'
import ServiceItem from '../components/ServiceItem'
export default function Servicios() {
  return (
    <section className='block w-full container'>
      <div className='flex gap-10 flex-wrap justify-center 2xl:justify-start'>

        <ServiceItem image={escrituras_publicas}  title={"Escrituras Públicas"} 
        text={"Compra-Ventas de Inmuebles, Inmovilización de Partidas, Poderes, Constitución de Sociedades, Hipotecas, Anticipo de Legítima, Creaciones y modificaciones de Empresas, Donaciones y Contratos Privados."}
        />

        <ServiceItem image={transferencias_vehiculares}  title={"Transferencia Vechiculares"} 
        text={"Hacemos un acta con todos los aspectos de la transferencia, inscribimos en Registros Públicos el nuevo cambio de dueño del vehículo. La compraventa se hará efectiva y serás el propietario del vehículo oficialmente."}
        />

        <ServiceItem image={asuntos_no_contenciosos}  title={"Asuntos no Contenciosos"} 
        text={"Solucionamos tus procesos sin controversia fuera de la Corte, como Sucesiones Intestadas, Rectificaciones, Divorcios, Uniones de Hecho, Convocatorias a junta de Accionistas y Directorios, Adopción, Prescripciones, Inventarios y similares."}
        />

        <ServiceItem image={autorizacion_viaje}  title={"Autorización de Viaje"} 
        text={"Las Autorizaciones de viaje de menores, las otorga el notario mediante acta a fin de dar fe que la persona que autoriza el viaje de un menor de edad sea el Padre o la persona legalmente idónea."}
        />

        <ServiceItem image={certificacion_actas}  title={"Certificación de Actas"} 
        text={"Se da fe de las Actas contenidas en los Libros de las Sociedades o Asociaciones, transcribiendo su contenido en documentos certificados."}
        />

        <ServiceItem image={legalizacion}  title={"Legalizaciones"} 
        text={"Legalización de firmas da fe que es auténtica y pertenece al que ha firmado frente al notario, identificado a la persona con documento identidad. Legalización de Copias, certificando que es igual al original. Legalización de Libros se da al sellar las hojas de un libro de actas o contable."}
        />


        <ServiceItem image={protestos}  title={"Protestos"} 
        text={"El protesto es un acto notarial en el que se acredita que no se ha realizado el pago de una letra de cambio o un Título Valor, para el cual se hace un procedimiento de protesto del Titulo Valor en la notaría para poder realizar el cobro de la misma."}
        />

        <ServiceItem image={cartas_notariales}  title={"Cartas Notariales"} 
        text={"La carta notarial es aquella carta remitida por un notario, el cual debe certificar la fecha de emisión y recepción. Evitando discusiones sobre si la carta llegó o no a tiempo. El notario, en todo momento indicara la fecha de recepción de la carta."}
        />
      </div>
    </section>
  )
}

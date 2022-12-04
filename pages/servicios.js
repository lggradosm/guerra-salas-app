import React from "react";
import Image from "next/image";
import asuntos_no_contenciosos from "../public/images/asuntos_no_contenciosos.webp";
import autorizacion_viaje from "../public/images/autorizacion_viaje.webp";
import cartas_notariales from "../public/images/cartas_notariales.webp";
import certificacion_actas from "../public/images/certificacion_actas.webp";
import escrituras_publicas from "../public/images/escrituras_publicas.webp";
import legalizacion from "../public/images/legalizacion.webp";
import protestos from "../public/images/protestos.webp";
import transferencias_vehiculares from "../public/images/transferencias_vehiculares.webp";
import Link from "next/link";
export default function Servicios() {
  return (
    <section className="block w-full">
      <div className="flex gap-10 flex-wrap justify-center 2xl:justify-start">
        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="escrituras publica"
            src={escrituras_publicas}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Escrituras Públicas
          </h2>
          <p className="text-sm  md:text-lg">
            Compra-Ventas de Inmuebles, Inmovilización de Partidas, Poderes,
            Constitución de Sociedades, Hipotecas, Anticipo de Legítima,
            Creaciones y modificaciones de Empresas, Donaciones y Contratos
            Privados.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="transferencia vehiculares"
            src={transferencias_vehiculares}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Transferencia Vechiculares
          </h2>
          <p className="text-sm md:text-lg">
            Hacemos un acta con todos los aspectos de la transferencia,
            inscribimos en Registros Públicos el nuevo cambio de dueño del
            vehículo. La compraventa se hará efectiva y serás el propietario del
            vehículo oficialmente.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="asuntos no contenciosos"
            src={asuntos_no_contenciosos}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Asuntos no Contenciosos
          </h2>
          <p className="text-sm md:text-lg">
            Solucionamos tus procesos sin controversia fuera de la Corte, como
            Sucesiones Intestadas, Rectificaciones, Divorcios, Uniones de Hecho,
            Convocatorias a junta de Accionistas y Directorios, Adopción,
            Prescripciones, Inventarios y similares.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="autorización de viaje"
            src={autorizacion_viaje}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Autorización de Viaje
          </h2>
          <p className="text-sm md:text-lg">
            Las Autorizaciones de viaje de menores, las otorga el notario
            mediante acta a fin de dar fe que la persona que autoriza el viaje
            de un menor de edad sea el Padre o la persona legalmente idónea.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="certificacion de actas"
            src={certificacion_actas}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Certificación de Actas
          </h2>
          <p className="text-sm md:text-lg">
            Se da fe de las Actas contenidas en los Libros de las Sociedades o
            Asociaciones, transcribiendo su contenido en documentos
            certificados.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="legalizacion"
            src={legalizacion}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Legalizaciones
          </h2>
          <p className="text-sm md:text-lg">
            Legalización de firmas da fe que es auténtica y pertenece al que ha
            firmado frente al notario, identificado a la persona con documento
            identidad. Legalización de Copias, certificando que es igual al
            original. Legalización de Libros se da al sellar las hojas de un
            libro de actas o contable.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="protestos"
            src={protestos}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Protestos
          </h2>
          <p className="text-sm md:text-lg">
            El protesto es un acto notarial en el que se acredita que no se ha
            realizado el pago de una letra de cambio o un Título Valor, para el
            cual se hace un procedimiento de protesto del Titulo Valor en la
            notaría para poder realizar el cobro de la misma.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>

        <div className="flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between">
          <Image
            alt="cartas notariales"
            src={cartas_notariales}
            className="w-full rounded-[.2rem]"
          />
          <h2 className="text-lg md:text-2xl text-primary font-semibold py-3">
            Cartas Notariales
          </h2>
          <p className="text-sm md:text-lg">
            La carta notarial es aquella carta remitida por un notario, el cual
            debe certificar la fecha de emisión y recepción. Evitando
            discusiones sobre si la carta llegó o no a tiempo. El notario, en
            todo momento indicara la fecha de recepción de la carta.
          </p>
          <Link
            href={"#"}
            className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6"
          >
            Ver requisitos
          </Link>
        </div>
      </div>
    </section>
  );
}

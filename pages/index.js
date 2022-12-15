import Image from "next/image";
import ServiceItem from "../components/ServiceItem";
import notario from "../public/images/Notario.webp";
import { equipo } from "../src/equipoImg";
import { Navigation } from "swiper";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const equipoList = equipo;
  const nextRef = useRef();
  const prevRef = useRef();
  const [swiper, setSwiper] = useState();
  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef?.current;
      swiper.params.navigation.nextEl = nextRef?.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="container flex flex-col justify-center items-center scroll-smooth">
      <section className="w-full h-screen bg-[url('../public/images/edificio.webp')] bg-cover bg-bottom"></section>

      <section
        id="servicios-notariales"
        className="w-full relative pt-32 lg:px-14 box-border"
      >
        <Swiper
          navigation={{ prevEl: prevRef?.current, nextEl: nextRef }}
          modules={[Navigation]}
          onSwiper={setSwiper}
          slidesPerView={"auto"}
          spaceBetween={60}
          observer
          className="w-full swiper"
        >
          <SwiperSlide className="swiper-slide">
            <ServiceItem
              title={"Escrituras Públicas"}
              text={
                "Compra-Ventas de Inmuebles, Inmovilización de Partidas, Poderes, Constitución de Sociedades, Hipotecas, Anticipo de Legítima, Creaciones y modificaciones de Empresas, Donaciones y Contratos Privados."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              title={"Transferencia Vechiculares"}
              text={
                "Hacemos un acta con todos los aspectos de la transferencia, inscribimos en Registros Públicos el nuevo cambio de dueño del vehículo. La compraventa se hará efectiva y serás el propietario del vehículo oficialmente."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Asuntos no Contenciosos"}
              text={
                "Solucionamos tus procesos sin controversia fuera de la Corte, como Sucesiones Intestadas, Rectificaciones, Divorcios, Uniones de Hecho, Convocatorias a junta de Accionistas y Directorios, Adopción, Prescripciones, Inventarios y similares."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Autorización de Viaje"}
              text={
                "Las Autorizaciones de viaje de menores, las otorga el notario mediante acta a fin de dar fe que la persona que autoriza el viaje de un menor de edad sea el Padre o la persona legalmente idónea."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Certificación de Actas"}
              text={
                "Se da fe de las Actas contenidas en los Libros de las Sociedades o Asociaciones, transcribiendo su contenido en documentos certificados."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Legalizaciones"}
              text={
                "Legalización de firmas da fe que es auténtica y pertenece al que ha firmado frente al notario, identificado a la persona con documento identidad. Legalización de Copias, certificando que es igual al original. Legalización de Libros se da al sellar las hojas de un libro de actas o contable."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Protestos"}
              text={
                "El protesto es un acto notarial en el que se acredita que no se ha realizado el pago de una letra de cambio o un Título Valor, para el cual se hace un procedimiento de protesto del Titulo Valor en la notaría para poder realizar el cobro de la misma."
              }
            />
          </SwiperSlide>

          <SwiperSlide>
            <ServiceItem
              title={"Cartas Notariales"}
              text={
                "La carta notarial es aquella carta remitida por un notario, el cual debe certificar la fecha de emisión y recepción. Evitando discusiones sobre si la carta llegó o no a tiempo. El notario, en todo momento indicara la fecha de recepción de la carta."
              }
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute lg:top-[calc(50%+2rem)] left-0" ref={prevRef}>
          <ArrowLeftShort className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="absolute lg:top-[calc(50%+2rem)] right-0" ref={nextRef}>
          <ArrowRightShort className="w-10 h-10 cursor-pointer" />
        </div>
      </section>
      <section id="nosotros" className="w-full pt-32">
        <h2 className="text-3xl  text-primary mb-10">Nosotros</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
          <Image alt="notario" src={notario} className="rounded-sm w-80" />
          <p className="text-center text-md md:text-lg tracking-[0.01em]">
            Quiero darles la bienvenida, soy el Dr. Guillermo Guerra Salas,
            egresado de la Universidad Nacional de Trujillo de la Facultad de
            Derecho, con Maestría de Derecho en la Universidad Antenor Orrego,
            abogado con una vasta experiencia en sector privado y
            público.Nombrado como Notario de Trujillo desde Junio del 2007.
            <br className="mb-3" />
            Estoy autorizado por ley, a dar fe de los actos y contratos que
            celebren ante mí, formalizando la voluntad de los otorgantes,
            redactando los instrumentos, a los que confiero autenticidad, y
            también me corresponde la comprobación de los hechos y tramitación
            de asuntos no contenciosos.
            <br className="mb-3" />
            Garantizamos un servicio de alta calidad, tenemos un equipo joven
            con excelentes conocimientos en temas notariales y registrales que
            aseguran que se concreten los objetivos de todos clientes de manera
            rápida y eficiente.
          </p>
        </div>
        <div className="my-20 ">
          <h3 className="text-3xl text-primary mb-4">Nuestro Equipo</h3>
          <p>
            En Notaría Guerra Salas mas que un equipo de Trabajo, somos una
            familia dispuestos a atenderte con calidad, calidez y prontitud,
            para que tu trámite sea lo mas satisfactorio para tí.
          </p>
          <div className="w-full flex flex-wrap gap-2 md:gap-6 justify-center mt-10">
            {equipoList.map((employee, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/4 xl:w-1/6 text-center border-2 rounded-lg group cursor-pointer p-2"
              >
                <Image
                  alt={employee.nombre}
                  src={employee.foto}
                  className="w-full grayscale duration-300 group-hover:filter-none"
                />
                <h4 className="my-0 md:my-2">{employee.nombre}</h4>
                <p>{employee.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

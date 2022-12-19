// import requisito1 from "../public/images/requisitos/REQUISITOS_ANTICIPO_DE_LEGITIMA.jpg";
import requisito2 from "../public/images/requisitos/REQUISITOS_APOYOS_Y_SALVAGUARDAS.jpg";
import requisito3 from "../public/images/requisitos/REQUISITOS_ARRENDAMIENTO_DE_BIEN_INMUEBLE_POR_ESCRITURA_PUBLICA.jpg";
import requisito4 from "../public/images/requisitos/REQUISITOS_AUMENTO_DE_CAPITAL_DE_SOCIEDADES_POR_CAPITALIZACION.jpg";
import requisito5 from "../public/images/requisitos/REQUISITOS_AUMENTO_DE_CAPTAL_DE_SOCIEDADES_POR_NUEVO_APORTE.jpg";
import requisito6 from "../public/images/requisitos/REQUISITOS_CAMBIO_DE_DENOMINACION.jpg";
import requisito7 from "../public/images/requisitos/REQUISITOS_COMPRA_VENTA_DE_INMUEBLES.jpg";
import requisito8 from "../public/images/requisitos/REQUISITOS_COMPRAVENTA_DE_MOTOR_O_MAQUINARIA.jpg";
import requisito9 from "../public/images/requisitos/REQUISITOS_CONSTITUCION_DE_ASOCIACION.jpg";
import requisito10 from "../public/images/requisitos/REQUISITOS_CONSTITUCION_DE_EMPRESAS_SOCIEDADES.jpg";
import requisito11 from "../public/images/requisitos/REQUISITOS_CREACION_DE_SUCURSAL_EN_EL_PERU_DE_UNA_EMPRESA_EXTRANJERA.jpg";
// import requisito12 from "../public/images/requisitos/REQUISITOS_CURATELA_ESPECIAL_PARA_PERSONAS_ADULTA_MAYORES.jpg";
import requisito13 from "../public/images/requisitos/REQUISITOS_DACION_EN_PAGO_DE_INMUEBLES.jpg";
import requisito14 from "../public/images/requisitos/REQUISITOS_DACION_EN_PAGO_DE_VEHICULOS.jpg";
import requisito15 from "../public/images/requisitos/REQUISITOS_DESALOJO_NOTARIAL.jpg";
import requisito16 from "../public/images/requisitos/REQUISITOS_DISOLUCION_DE_UNION_DE_HECHO.jpg";
import requisito17 from "../public/images/requisitos/REQUISITOS_DIVISION_Y_PARTICION.jpg";
import requisito18 from "../public/images/requisitos/REQUISITOS_DIVORCIO_NOTARIAL.jpg";
import requisito19 from "../public/images/requisitos/REQUISITOS_DONACION_DE_DINERO.jpg";
import requisito20 from "../public/images/requisitos/REQUISITOS_DONACION_DE_INMUEBLES.jpg";
import requisito21 from "../public/images/requisitos/REQUISITOS_FUSION_POR_ABSORCION_DE_SOCIEDAD.jpg";
import requisito22 from "../public/images/requisitos/REQUISITOS_INMOVILIZACION_TEMPORAL_DE_PARTIDA.jpg";
import requisito23 from "../public/images/requisitos/REQUISITOS_LEVANTAMIENTO_DE_HIPOTECA_PARTICULARES.jpg";
import requisito24 from "../public/images/requisitos/REQUISITOS_LIQUIDACION_DE_SOCIEDAD.jpg";
import requisito25 from "../public/images/requisitos/REQUISITOS_MODIFICACION_DE_ESTATUTOS_DE_ASOCIACION.jpg";
import requisito26 from "../public/images/requisitos/REQUISITOS_MODIFICACION_AMPLIACION_DE_OBJETO.jpg";
import requisito27 from "../public/images/requisitos/REQUISITOS_MUTUO_CONSTITUCIÓN_DE_GARANTÍA.jpg";
import requisito28 from "../public/images/requisitos/REQUISITOS_PATRIMONIO_FAMILIAR.jpg";
import requisito29 from "../public/images/requisitos/REQUISITOS_PODER_POR_ESCRITURA_PUBLICA.jpg";
import requisito30 from "../public/images/requisitos/REQUISITOS_PRESCRIPCION_ADQUISITIVA_DE_DOMINIO.jpg";
import requisito31 from "../public/images/requisitos/REQUISITOS_PRESCRIPCION_ADQUISITIVA_VEHICULAR.jpg";
import requisito32 from "../public/images/requisitos/REQUISITOS_RECONOCIMIENTO_DE_PATERNIDAD_DE_MAYOR_DE_EDAD.jpg";
import requisito33 from "../public/images/requisitos/REQUISITOS_RECONOCIMIENTO_DE_PATERNIDAD_DE_MENOR_DE_EDAD.jpg";
import requisito34 from "../public/images/requisitos/REQUISITOS_RECTIFICACION_DE_AREAS_Y_LINDEROS.jpg";
import requisito35 from "../public/images/requisitos/REQUISITOS_RECTIFICACION_DE_AREAS_Y_LINDEROS_POR_ESCRITURA_PUBLICA.jpg";
import requisito36 from "../public/images/requisitos/REQUISITOS_RECTIFICACION_DE_CALIDAD_DE_BIEN.jpg";
import requisito37 from "../public/images/requisitos/REQUISITOS_RECTIFICACION_DE_PARTIDA.jpg";
import requisito38 from "../public/images/requisitos/REQUISITOS_REDUCCION_DE_CAPITAL_DE_SOCIEDAD.jpg";
import requisito39 from "../public/images/requisitos/REQUISITOS_SERVIDUMBRE.jpg";
import requisito40 from "../public/images/requisitos/REQUISITOS_SUCESION_INTESTADA.jpg";
import requisito41 from "../public/images/requisitos/REQUISITOS_SUSTITUCIÓN_DE_REGIMEN_PATRIMONIAL_POR_SEPARACION_DE_PATRIMONIOS.jpg";
import requisito42 from "../public/images/requisitos/REQUISITOS_TRANFERENCIA_DE_PARTICIPACIONES.jpg";
import requisito43 from "../public/images/requisitos/REQUISITOS_TRANSFERENCIA_DE_ACCIONES_DE_SOCIEDAD_ANONIMA_CAMBIO_DE_GERENTE.jpg";
import requisito44 from "../public/images/requisitos/REQUISITOS_TRANSFERENCIA_DE_CONCESION_MINERA.jpg";
import requisito45 from "../public/images/requisitos/REQUISITOS_TRANSFERENCIA_DE_DERECHOS_DE_PROMOTOR.jpg";
import requisito46 from "../public/images/requisitos/REQUISITOS_TRANSFERENCIA_DE_DERECHOS_DE_TITULAR.jpg";
import requisito47 from "../public/images/requisitos/REQUISITOS_TRANSFERENCIA_VEHICULAR.jpg";
import requisito48 from "../public/images/requisitos/REQUISITOS_TRANSFORMACION_DE_SOCIEDAD_EN_EIRL.jpg";
import requisito49 from "../public/images/requisitos/REQUISITOS_TRASFORMACION_DE_EIRL_EN_SOCIEDAD.jpg";
import requisito50 from "../public/images/requisitos/REQUISITOS_TRASPASO_DE_POSESION_POR_ESCRITURA_PUBLICA.jpg";
import requisito51 from "../public/images/requisitos/REQUISITOS_UNION_DE_HECHO.jpg";

const ASUNTOS_NO_CONTENCIOSOS = "ASUNTOS_NO_CONTENCIOSOS";
const ESCRITURAS_PUBLICAS = "ESCRITURAS_PUBLICAS";
const VEHICULAR = "VEHICULAR";
export const requisitosList = [
  {
    id: "001",
    nombre: "ANTICIPO DE LEGITIMA",
    // image: requisito1,
    imageUrl: "REQUISITOS_ANTICIPO_DE_LEGITIMA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "002",
    nombre: "APOYOS Y SALVAGUARDAS",
    image: requisito2,
    imageUrl: "REQUISITOS_APOYOS_Y_SALVAGUARDAS",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "003",
    nombre: "ARRENDAMIENTO DE BIEN INMUEBLE POR ESCRITURA PUBLICA",
    image: requisito3,
    imageUrl: "REQUISITOS_ARRENDAMIENTO_DE_BIEN_INMUEBLE_POR_ESCRITURA_PUBLICA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "004",
    nombre: "AUMENTO DE CAPITAL DE SOCIEDADES POR CAPITALIZACION",
    image: requisito4,
    imageUrl: "REQUISITOS_AUMENTO_DE_CAPITAL_DE_SOCIEDADES_POR_CAPITALIZACION",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "005",
    nombre: "AUMENTO DE CAPTAL DE SOCIEDADES POR NUEVO APORTE",
    image: requisito5,
    imageUrl: "REQUISITOS_AUMENTO_DE_CAPTAL_DE_SOCIEDADES_POR_NUEVO_APORTE",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "006",
    nombre: "CAMBIO DE DENOMINACION",
    image: requisito6,
    imageUrl: "REQUISITOS_CAMBIO_DE_DENOMINACION",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "007",
    nombre: "COMPRA VENTA DE INMUEBLES",
    image: requisito7,
    imageUrl: "REQUISITOS_COMPRA_VENTA_DE_INMUEBLES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "008",
    nombre: "COMPRAVENTA DE MOTOR O MAQUINARIA",
    image: requisito8,
    imageUrl: "REQUISITOS_COMPRAVENTA_DE_MOTOR_O_MAQUINARIA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "009",
    nombre: "CONSTITUCION DE ASOCIACION",
    image: requisito9,
    imageUrl: "REQUISITOS_CONSTITUCION_DE_ASOCIACION",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "010",
    nombre: "CONSTITUCION DE EMPRESAS/SOCIEDADES",
    image: requisito10,
    imageUrl: "REQUISITOS_CONSTITUCION_DE_EMPRESAS_SOCIEDADES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "011",
    nombre: "CREACION DE SUCURSAL EN EL PERU DE UNA EMPRESA EXTRANJERA",
    image: requisito11,
    imageUrl:
      "REQUISITOS_CREACION_DE_SUCURSAL_EN_EL_PERU_DE_UNA_EMPRESA_EXTRANJERA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "012",
    nombre: "CURATELA ESPECIAL PARA PERSONAS ADULTA MAYORES ",
    // image: requisito12,
    imageUrl: "REQUISITOS_CURATELA_ESPECIAL_PARA_PERSONAS_ADULTA_MAYORES",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "013",
    nombre: "DACION EN PAGO DE INMUEBLES",
    image: requisito13,
    imageUrl: "REQUISITOS_DACION_EN_PAGO_DE_INMUEBLES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "014",
    nombre: "DACION EN PAGO DE VEHICULOS",
    image: requisito14,
    imageUrl: "REQUISITOS_DACION_EN_PAGO_DE_VEHICULOS",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "015",
    nombre: "DESALOJO NOTARIAL",
    image: requisito15,
    imageUrl: "REQUISITOS_DESALOJO_NOTARIAL",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "016",
    nombre: "DISOLUCION DE UNION DE HECHO",
    image: requisito16,
    imageUrl: "REQUISITOS_DISOLUCION_DE_UNION_DE_HECHO",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "017",
    nombre: "DIVISION Y PARTICION",
    image: requisito17,
    imageUrl: "REQUISITOS_DIVISION_Y_PARTICION",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "018",
    nombre: "DIVORCIO NOTARIAL",
    image: requisito18,
    imageUrl: "REQUISITOS_DIVORCIO_NOTARIAL",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "019",
    nombre: "DONACION DE DINERO",
    image: requisito19,
    imageUrl: "REQUISITOS_DONACION_DE_DINERO",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "020",
    nombre: "DONACION DE INMUEBLES",
    image: requisito20,
    imageUrl: "REQUISITOS_DONACION_DE_INMUEBLES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "021",
    nombre: "FUSION POR ABSORCION DE SOCIEDAD",
    image: requisito21,
    imageUrl: "REQUISITOS_FUSION_POR_ABSORCION_DE_SOCIEDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "022",
    nombre: "INMOVILIZACION TEMPORAL DE PARTIDA",
    image: requisito22,
    imageUrl: "REQUISITOS_INMOVILIZACION_TEMPORAL_DE_PARTIDA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "023",
    nombre: "LEVANTAMIENTO DE HIPOTECA PARTICULARES",
    image: requisito23,
    imageUrl: "REQUISITOS_LEVANTAMIENTO_DE_HIPOTECA_PARTICULARES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "024",
    nombre: "LIQUIDACION DE SOCIEDAD",
    image: requisito24,
    imageUrl: "REQUISITOS_LIQUIDACION_DE_SOCIEDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "025",
    nombre: "MODIFICACION DE ESTATUTOS DE ASOCIACION",
    image: requisito25,
    imageUrl: "REQUISITOS_MODIFICACION_DE_ESTATUTOS_DE_ASOCIACION",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "026",
    nombre: "MODIFICACION/AMPLIACION DE OBJETO",
    image: requisito26,
    imageUrl: "REQUISITOS_MODIFICACION_AMPLIACION_DE_OBJETO",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "027",
    nombre: "MUTUO/CONSTITUCIÓN DE GARANTÍA",
    image: requisito27,
    imageUrl: "REQUISITOS_MUTUO_CONSTITUCIÓN_DE_GARANTÍA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "028",
    nombre: "PATRIMONIO FAMILIAR",
    image: requisito28,
    imageUrl: "REQUISITOS_PATRIMONIO_FAMILIAR",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "029",
    nombre: "PODER POR ESCRITURA PUBLICA",
    image: requisito29,
    imageUrl: "REQUISITOS_PODER_POR_ESCRITURA_PUBLICA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "030",
    nombre: "PRESCRIPCION ADQUISITIVA DE DOMINIO",
    image: requisito30,
    imageUrl: "REQUISITOS_PRESCRIPCION_ADQUISITIVA_DE_DOMINIO",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "031",
    nombre: "PRESCRIPCION ADQUISITIVA VEHICULAR",
    image: requisito31,
    imageUrl: "REQUISITOS_PRESCRIPCION_ADQUISITIVA_VEHICULAR",
    type: VEHICULAR,
  },
  {
    id: "032",
    nombre: "RECONOCIMIENTO DE PATERNIDAD DE MAYOR DE EDAD",
    image: requisito32,
    imageUrl: "REQUISITOS_RECONOCIMIENTO_DE_PATERNIDAD_DE_MAYOR_DE_EDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "033",
    nombre: "RECONOCIMIENTO DE PATERNIDAD DE MENOR DE EDAD",
    image: requisito33,
    imageUrl: "REQUISITOS_RECONOCIMIENTO_DE_PATERNIDAD_DE_MENOR_DE_EDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "034",
    nombre: "RECTIFICACION DE AREAS Y LINDEROS",
    image: requisito34,
    imageUrl: "REQUISITOS_RECTIFICACION_DE_AREAS_Y_LINDEROS",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "035",
    nombre: "RECTIFICACION DE AREAS Y LINDEROS POR ESCRITURA PUBLICA",
    image: requisito35,
    imageUrl:
      "REQUISITOS_RECTIFICACION_DE_AREAS_Y_LINDEROS_POR_ESCRITURA_PUBLICA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "036",
    nombre: "RECTIFICACION DE CALIDAD DE BIEN",
    image: requisito36,
    imageUrl: "REQUISITOS_RECTIFICACION_DE_CALIDAD_DE_BIEN",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "037",
    nombre: "RECTIFICACION DE PARTIDA ",
    image: requisito37,
    imageUrl: "REQUISITOS_RECTIFICACION_DE_PARTIDA",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "038",
    nombre: "REDUCCION DE CAPITAL DE SOCIEDAD",
    image: requisito38,
    imageUrl: "REQUISITOS_REDUCCION_DE_CAPITAL_DE_SOCIEDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "039",
    nombre: "SERVIDUMBRE",
    image: requisito39,
    imageUrl: "REQUISITOS_SERVIDUMBRE",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "040",
    nombre: "SUCESION INTESTADA",
    image: requisito40,
    imageUrl: "REQUISITOS_SUCESION_INTESTADA",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
  {
    id: "041",
    nombre: "SUSTITUCIÓN DE REGIMEN PATRIMONIAL POR SEPARACION DE PATRIMONIOS",
    image: requisito41,
    imageUrl:
      "REQUISITOS_SUSTITUCIÓN_DE_REGIMEN_PATRIMONIAL_POR_SEPARACION_DE_PATRIMONIOS",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "042",
    nombre: "TRANFERENCIA DE PARTICIPACIONES",
    image: requisito42,
    imageUrl: "REQUISITOS_TRANFERENCIA_DE_PARTICIPACIONES",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "043",
    nombre: "TRANSFERENCIA DE ACCIONES DE SOCIEDAD ANONIMA/CAMBIO DE GERENTE",
    image: requisito43,
    imageUrl:
      "REQUISITOS_TRANSFERENCIA_DE_ACCIONES_DE_SOCIEDAD_ANONIMA_CAMBIO_DE_GERENTE",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "044",
    nombre: "TRANSFERENCIA DE CONCESION MINERA",
    image: requisito44,
    imageUrl: "REQUISITOS_TRANSFERENCIA_DE_CONCESION_MINERA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "045",
    nombre: "TRANSFERENCIA DE DERECHOS DE PROMOTOR",
    image: requisito45,
    imageUrl: "REQUISITOS_TRANSFERENCIA_DE_DERECHOS_DE_PROMOTOR",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "046",
    nombre: "TRANSFERENCIA DE DERECHOS DE TITULAR",
    image: requisito46,
    imageUrl: "REQUISITOS_TRANSFERENCIA_DE_DERECHOS_DE_TITULAR",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "047",
    nombre: "TRANSFERENCIA VEHICULAR",
    image: requisito47,
    imageUrl: "REQUISITOS_TRANSFERENCIA_VEHICULAR",
    type: VEHICULAR,
  },
  {
    id: "048",
    nombre: "TRANSFORMACION DE SOCIEDAD EN EIRL",
    image: requisito48,
    imageUrl: "REQUISITOS_TRANSFORMACION_DE_SOCIEDAD_EN_EIRL",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "049",
    nombre: "TRASFORMACION DE EIRL EN SOCIEDAD",
    image: requisito49,
    imageUrl: "REQUISITOS_TRASFORMACION_DE_EIRL_EN_SOCIEDAD",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "050",
    nombre: "TRASPASO DE POSESION POR ESCRITURA PUBLICA",
    image: requisito50,
    imageUrl: "REQUISITOS_TRASPASO_DE_POSESION_POR_ESCRITURA_PUBLICA",
    type: ESCRITURAS_PUBLICAS,
  },
  {
    id: "051",
    nombre: "UNION DE HECHO",
    image: requisito51,
    imageUrl: "REQUISITOS_UNION_DE_HECHO",
    type: ASUNTOS_NO_CONTENCIOSOS,
  },
];

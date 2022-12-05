const ASUNTOS_NO_CONTENCIOSOS = "ASUNTOS_NO_CONTENCIOSOS";
const PROTOCOLARES = "PROTOCOLARES";
export default async function handler(req, res) {
  res.status(200).json([
    {
      id: "001",
      nombre: "RECONOCIMIENTO DE PATERNIDAD DE MENOR DE EDAD",
      imageUrl: "213123",
      type: PROTOCOLARES,
    },
    {
      id: "002",
      nombre: "RECONOCIMIENTO DE PATERNIDAD DE MAYOR DE EDAD",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "003",
      nombre: "COMPRAVENTA DE MOTOR O MAQUINARIA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "004",
      nombre: "TRANSFERENCIA DE CONCESION MINERA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "005",
      nombre: "SERVIDUMBRE",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "006",
      nombre: "LEVANTAMIENTO DE HIPOTECA PARTICULARES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "007",
      nombre: "MUTUO/CONSTITUCIÓN DE GARANTÍA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "008",
      nombre: "DIVISION Y PARTICION",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "009",
      nombre: "RECTIFICACION DE CALIDAD DE BIEN",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "010",
      nombre: "INMOVILIZACION TEMPORAL DE PARTIDA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "011",
      nombre:
        "SUSTITUCIÓN DE REGIMEN PATRIMONIAL POR SEPARACION DE PATRIMONIOS",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "012",
      nombre: "ARRENDAMIENTO DE BIEN INMUEBLE POR ESCRITURA PUBLICA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "013",
      nombre: "ANTICIPO DE LEGITIMA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "014",
      nombre: "PODER POR ESCRITURA PUBLICA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "015",
      nombre: "TRASPASO DE POSESION POR ESCRITURA PUBLICA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "016",
      nombre: "DONACION DE DINERO",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "017",
      nombre: "DONACION DE INMUEBLES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "018",
      nombre: "DACION EN PAGO DE VEHICULOS",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "019",
      nombre: "DACION EN PAGO DE INMUEBLES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "020",
      nombre: "COMPRA VENTA DE INMUEBLES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "021",
      nombre: "LIQUIDACION DE SOCIEDAD",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "022",
      nombre: "REDUCCION DE CAPITAL DE SOCIEDAD",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "023",
      nombre: "TRASFORMACION DE EIRL EN SOCIEDAD",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "024",
      nombre: "TRANSFORMACION DE SOCIEDAD EN EIRL",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "025",
      nombre: "CAMBIO DE DENOMINACION",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "026",
      nombre: "TRANSFERENCIA DE DERECHOS DE TITULAR",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "027",
      nombre: "FUSION POR ABSORCION DE SOCIEDAD",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "028",
      nombre: "CREACION DE SUCURSAL EN EL PERU DE UNA EMPRESA EXTRANJERA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "029",
      nombre: "AUMENTO DE CAPITAL DE SOCIEDADES POR CAPITALIZACION",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "030",
      nombre: "AUMENTO DE CAPTAL DE SOCIEDADES POR NUEVO APORTE",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "031",
      nombre: "TRANFERENCIA DE PARTICIPACIONES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "032",
      nombre: "MODIFICACION/AMPLIACION DE OBJETO",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "033",
      nombre: "TRANSFERENCIA DE ACCIONES DE SOCIEDAD ANONIMA/CAMBIO DE GERENTE",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "034",
      nombre: "MODIFICACION DE ESTATUTOS DE ASOCIACION",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "035",
      nombre: "CONSTITUCION DE ASOCIACION",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "036",
      nombre: "CONSTITUCION DE EMPRESAS/SOCIEDADES",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "037",
      nombre: "TRANSFERENCIA DE DERECHOS DE PROMOTOR",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "038",
      nombre:
        "TRAMITE DE RECTIFICACION DE AREAS Y LINDEROS POR ESCRITURA PUBLICA",
      imageUrl: "",
      type: PROTOCOLARES,
    },
    {
      id: "039",
      nombre: "PRUEBA",
      imageUrl: "",
      type: ASUNTOS_NO_CONTENCIOSOS,
    },
    {
      id: "039",
      nombre: "PRUEBA 2",
      imageUrl: "",
      type: ASUNTOS_NO_CONTENCIOSOS,
    },
    {
      id: "039",
      nombre: "PRUEBA 3",
      imageUrl: "",
      type: ASUNTOS_NO_CONTENCIOSOS,
    },
  ]);
}

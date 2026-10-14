// Generado automáticamente desde men_por_categor_as.txt — no editar a mano,
// editar el script build_data.js y volver a generar si cambia el menú.
const CATEGORIAS = [
  {
    "id": "bocadillo-frio",
    "nombre": "Bocadillo Frío",
    "folder": "BocadilloFrio",
    "tema": "bocadillos",
    "cover": "bocadillo.jpg",
    "count": 11
  },
  {
    "id": "hamburguesa",
    "nombre": "Hamburguesas",
    "folder": "Hamburguesa",
    "tema": "hamburguesa",
    "cover": "hamburguesas.jpg",
    "count": 7
  },
  {
    "id": "bocadillo-caliente",
    "nombre": "Bocadillo Caliente",
    "folder": "BocadilloCaliente",
    "tema": "bocadillos",
    "cover": "bocadillo.jpg",
    "count": 25
  },
  {
    "id": "tapas",
    "nombre": "Tapas",
    "folder": "Tapas",
    "tema": "tapas",
    "cover": "Aceitunas.jpg",
    "count": 34
  },
  {
    "id": "platos-combinados",
    "nombre": "Platos Combinados",
    "folder": "PlatosCombinados",
    "tema": "combinados",
    "cover": "PlatosCombinados.jpg",
    "count": 28
  },
  {
    "id": "comida-china",
    "nombre": "Comida China",
    "folder": "ComidaChina",
    "tema": "china",
    "cover": "ComidaChinaHero.jpg",
    "count": 51
  },
  {
    "id": "bebidas",
    "nombre": "Bebidas",
    "folder": "Bebidas",
    "tema": "bebidas",
    "cover": "Bebidas.jpg",
    "count": 23
  },
  {
    "id": "cafe",
    "nombre": "Café",
    "folder": "Cafe",
    "tema": "cafe",
    "cover": "Cafe.jpg",
    "count": 13
  },
  {
    "id": "refrescos",
    "nombre": "Refrescos",
    "folder": "Refrescos",
    "tema": "refrescos",
    "cover": "Refrescos.jpg",
    "count": 19
  },
  {
    "id": "cervezas",
    "nombre": "Cervezas",
    "folder": "Cervezas",
    "tema": "cervezas",
    "cover": "Cerbezas.jpg",
    "count": 12
  },
  {
    "id": "arroz-con-salsa",
    "nombre": "Arroz con Salsa",
    "folder": "ArrozConSalsa",
    "tema": "china",
    "cover": "GambasConSalsaPicanteYArrozBlanco.jpg",
    "count": 9
  },
  {
    "id": "licores",
    "nombre": "Licores",
    "folder": "Licores",
    "tema": "licores",
    "cover": "LicoresHero.jpg",
    "count": 36
  }
];

const MENU_DATA = {
  "bocadillo-frio": {
    "id": "bocadillo-frio",
    "nombre": "Bocadillo Frío",
    "folder": "BocadilloFrio",
    "tema": "bocadillos",
    "covers": [
      "bocadillo.jpg",
      "Anchoas.jpg",
      "Atun.jpg",
      "AtunConAnchoas.jpg",
      "ButifarraBlanco.jpg",
      "Chorizo.jpg",
      "Fuet.jpg",
      "JamonDulce.jpg",
      "JamonDulceConQueso.jpg",
      "JamonSerrano.jpg",
      "Queso.jpg",
      "VegetalAtun.jpg"
    ],
    "items": [
      {
        "name": "Atún",
        "variants": [
          {
            "label": "Media",
            "price": 3.3
          },
          {
            "label": "Entera",
            "price": 5.5
          }
        ],
        "img": "Atun.jpg"
      },
      {
        "name": "Atún con anchoas",
        "variants": [
          {
            "label": "Media",
            "price": 4.5
          },
          {
            "label": "Entera",
            "price": 7
          }
        ],
        "img": "AtunConAnchoas.jpg"
      },
      {
        "name": "Vegetal atún",
        "variants": [
          {
            "label": "Media",
            "price": 4.1
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "VegetalAtun.jpg"
      },
      {
        "name": "Jamón serrano",
        "variants": [
          {
            "label": "Media",
            "price": 3.1
          },
          {
            "label": "Entera",
            "price": 5
          }
        ],
        "img": "JamonSerrano.jpg"
      },
      {
        "name": "Fuet",
        "variants": [
          {
            "label": "Media",
            "price": 3.1
          },
          {
            "label": "Entera",
            "price": 5
          }
        ],
        "img": "Fuet.jpg"
      },
      {
        "name": "Chorizo",
        "variants": [
          {
            "label": "Media",
            "price": 3.1
          },
          {
            "label": "Entera",
            "price": 5
          }
        ],
        "img": "Chorizo.jpg"
      },
      {
        "name": "Queso",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "Queso.jpg"
      },
      {
        "name": "Jamón dulce",
        "variants": [
          {
            "label": "Media",
            "price": 3
          },
          {
            "label": "Entera",
            "price": 4.3
          }
        ],
        "img": "JamonDulce.jpg"
      },
      {
        "name": "Jamón dulce con queso",
        "variants": [
          {
            "label": "Media",
            "price": 3.4
          },
          {
            "label": "Entera",
            "price": 4.5
          }
        ],
        "img": "JamonDulceConQueso.jpg"
      },
      {
        "name": "Butifarra blanco",
        "variants": [
          {
            "label": "Media",
            "price": 3.2
          },
          {
            "label": "Entera",
            "price": 5
          }
        ],
        "img": "ButifarraBlanco.jpg"
      },
      {
        "name": "Anchoas",
        "variants": [
          {
            "label": "Media",
            "price": 5
          },
          {
            "label": "Entera",
            "price": 7.5
          }
        ],
        "img": "Anchoas.jpg"
      }
    ]
  },
  "hamburguesa": {
    "id": "hamburguesa",
    "nombre": "Hamburguesas",
    "folder": "Hamburguesa",
    "tema": "hamburguesa",
    "covers": [
      "hamburguesas.jpg",
      "Hamburguesa.jpg",
      "HamburguesaCompleta.jpg",
      "HamburguesaCompletaYPatatasFritas.jpg",
      "HamburguesaConQueso.jpg",
      "HamburguesaConQuesoCebolla.jpg",
      "HamburguesaDePolloRebozadoConLechugaYTomate.jpg",
      "HamburguesaDePolloRebozadoConPatatasFritas.jpg"
    ],
    "items": [
      {
        "name": "Hamburguesa",
        "variants": [
          {
            "label": null,
            "price": 3.8
          }
        ],
        "img": "Hamburguesa.jpg"
      },
      {
        "name": "Hamburguesa con queso",
        "variants": [
          {
            "label": null,
            "price": 4.5
          }
        ],
        "img": "HamburguesaConQueso.jpg"
      },
      {
        "name": "Hamburguesa completa (Lechuga, tomate, queso, cebolla, beicon, huevo)",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "HamburguesaCompleta.jpg"
      },
      {
        "name": "Hamburguesa completa y patatas fritas",
        "variants": [
          {
            "label": null,
            "price": 8
          }
        ],
        "img": "HamburguesaCompletaYPatatasFritas.jpg"
      },
      {
        "name": "Hamburguesa con queso cebolla",
        "variants": [
          {
            "label": null,
            "price": 5.2
          }
        ],
        "img": "HamburguesaConQuesoCebolla.jpg"
      },
      {
        "name": "Hamburguesa de pollo rebozado con lechuga y tomate",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "HamburguesaDePolloRebozadoConLechugaYTomate.jpg"
      },
      {
        "name": "Hamburguesa de pollo rebozado con patatas fritas",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "HamburguesaDePolloRebozadoConPatatasFritas.jpg"
      }
    ]
  },
  "bocadillo-caliente": {
    "id": "bocadillo-caliente",
    "nombre": "Bocadillo Caliente",
    "folder": "BocadilloCaliente",
    "tema": "bocadillos",
    "covers": [
      "bocadillo.jpg",
      "Beicon.jpg",
      "BeiconConQueso.jpg",
      "Bikini.jpg",
      "BocadilloChistorra.jpg",
      "Frankfurt.jpg",
      "Fricandela.jpg",
      "Lomo.jpg",
      "LomoBeiconQueso.jpg",
      "LomoConPimiento.jpg",
      "LomoConQueso.jpg",
      "LomoQuesoPimiento.jpg",
      "Panceta.jpg",
      "Pinchos.jpg",
      "Pollo.jpg",
      "PolloConPimiento.jpg",
      "PolloConQueso.jpg",
      "PolloConRebozado.jpg",
      "PolloConRebozadoConQueso.jpg",
      "Salchichas.jpg",
      "Serranito.jpg",
      "TortillaConAtun.jpg",
      "TortillaConQueso.jpg",
      "TortillaDePatatas.jpg",
      "TortillaFrancesa.jpg",
      "VegetalPollo.jpg",
      "bocadillo2.jpg"
    ],
    "items": [
      {
        "name": "Beicon",
        "variants": [
          {
            "label": "Media",
            "price": 3.4
          },
          {
            "label": "Entera",
            "price": 5.1
          }
        ],
        "img": "Beicon.jpg"
      },
      {
        "name": "Beicon con queso",
        "variants": [
          {
            "label": "Media",
            "price": 3.7
          },
          {
            "label": "Entera",
            "price": 5.6
          }
        ],
        "img": "BeiconConQueso.jpg"
      },
      {
        "name": "Lomo",
        "variants": [
          {
            "label": "Media",
            "price": 3.7
          },
          {
            "label": "Entera",
            "price": 5.1
          }
        ],
        "img": "Lomo.jpg"
      },
      {
        "name": "Lomo con queso",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 5.8
          }
        ],
        "img": "LomoConQueso.jpg"
      },
      {
        "name": "Lomo con pimiento",
        "variants": [
          {
            "label": "Media",
            "price": 4.3
          },
          {
            "label": "Entera",
            "price": 6.3
          }
        ],
        "img": "LomoConPimiento.jpg"
      },
      {
        "name": "Lomo queso pimiento",
        "variants": [
          {
            "label": "Media",
            "price": 4.6
          },
          {
            "label": "Entera",
            "price": 7
          }
        ],
        "img": "LomoQuesoPimiento.jpg"
      },
      {
        "name": "Lomo beicon queso",
        "variants": [
          {
            "label": "Media",
            "price": 5.5
          },
          {
            "label": "Entera",
            "price": 7.5
          }
        ],
        "img": "LomoBeiconQueso.jpg"
      },
      {
        "name": "Pollo",
        "variants": [
          {
            "label": "Media",
            "price": 3.7
          },
          {
            "label": "Entera",
            "price": 5.1
          }
        ],
        "img": "Pollo.jpg"
      },
      {
        "name": "Pollo con queso",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 5.8
          }
        ],
        "img": "PolloConQueso.jpg"
      },
      {
        "name": "Pollo con pimiento",
        "variants": [
          {
            "label": "Media",
            "price": 4.6
          },
          {
            "label": "Entera",
            "price": 6.3
          }
        ],
        "img": "PolloConPimiento.jpg"
      },
      {
        "name": "Pollo con rebozado",
        "variants": [
          {
            "label": "Media",
            "price": 5.2
          },
          {
            "label": "Entera",
            "price": 7.2
          }
        ],
        "img": "PolloConRebozado.jpg"
      },
      {
        "name": "Pollo con rebozado con queso...",
        "variants": [
          {
            "label": "Media",
            "price": 5.5
          },
          {
            "label": "Entera",
            "price": 7.5
          }
        ],
        "img": "PolloConRebozadoConQueso.jpg"
      },
      {
        "name": "Vegetal pollo",
        "variants": [
          {
            "label": "Media",
            "price": 4.6
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "VegetalPollo.jpg"
      },
      {
        "name": "Pinchos",
        "variants": [
          {
            "label": "Media",
            "price": 4.2
          },
          {
            "label": "Entera",
            "price": 6.3
          }
        ],
        "img": "Pinchos.jpg"
      },
      {
        "name": "Salchichas",
        "variants": [
          {
            "label": "Media",
            "price": 3.9
          },
          {
            "label": "Entera",
            "price": 5.8
          }
        ],
        "img": "Salchichas.jpg"
      },
      {
        "name": "Serranito",
        "variants": [
          {
            "label": "Media",
            "price": 5
          },
          {
            "label": "Entera",
            "price": 7.95
          }
        ],
        "img": "Serranito.jpg"
      },
      {
        "name": "Tortilla francesa",
        "variants": [
          {
            "label": "Media",
            "price": 3.5
          },
          {
            "label": "Entera",
            "price": 5
          }
        ],
        "img": "TortillaFrancesa.jpg"
      },
      {
        "name": "Tortilla con queso",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "TortillaConQueso.jpg"
      },
      {
        "name": "Tortilla con atún",
        "variants": [
          {
            "label": "Media",
            "price": 4.5
          },
          {
            "label": "Entera",
            "price": 6.5
          }
        ],
        "img": "TortillaConAtun.jpg"
      },
      {
        "name": "Tortilla de patatas",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "TortillaDePatatas.jpg"
      },
      {
        "name": "Frankfurt",
        "variants": [
          {
            "label": "Entera",
            "price": 3.5
          }
        ],
        "img": "Frankfurt.jpg"
      },
      {
        "name": "Bikini",
        "variants": [
          {
            "label": "Entera",
            "price": 3.2
          }
        ],
        "img": "Bikini.jpg"
      },
      {
        "name": "Fricandela",
        "variants": [
          {
            "label": "Entera",
            "price": 3.5
          }
        ],
        "img": "Fricandela.jpg"
      },
      {
        "name": "Bocadillo chistorra",
        "variants": [
          {
            "label": "Media",
            "price": 4
          },
          {
            "label": "Entera",
            "price": 5.8
          }
        ],
        "img": "BocadilloChistorra.jpg"
      },
      {
        "name": "Panceta",
        "variants": [
          {
            "label": "Media",
            "price": 3.8
          },
          {
            "label": "Entera",
            "price": 6
          }
        ],
        "img": "Panceta.jpg"
      }
    ]
  },
  "tapas": {
    "id": "tapas",
    "nombre": "Tapas",
    "folder": "Tapas",
    "tema": "tapas",
    "covers": [
      "Aceitunas.jpg",
      "AlitasDePollo.jpg",
      "AlmejasAlaPlancha.jpg",
      "Berberecho.jpg",
      "BoqueronesFritos.jpg",
      "BoqueronesVinagre.jpg",
      "CalamaresRomana.jpg",
      "Callos.jpg",
      "CarneEnSalsa.jpg",
      "Champiñones.jpg",
      "Chistorra.jpg",
      "Chocos.jpg",
      "Croquetas.jpg",
      "Ensalado.jpg",
      "Fuet.jpg",
      "GambasAlaPlancha.jpg",
      "JamonCerrano.jpg",
      "LangostinoRebosado.jpg",
      "Morros.jpg",
      "NugetsDePollo8U.jpg",
      "PanConTomate.jpg",
      "ParrilladaDePescadoFrito.jpg",
      "PatatasBravas.jpg",
      "PatatasDeCalamar.jpg",
      "PatatasFritas.jpg",
      "PimientosDePadron.jpg",
      "PinchoDePatatas.jpg",
      "Pinchos.jpg",
      "Sardinas.jpg",
      "Sepia.jpg",
      "Sevillanos.jpg",
      "Tallarinas.jpg",
      "TerreznoDeSoria.jpg",
      "quesos.jpg"
    ],
    "items": [
      {
        "name": "Jamón serrano",
        "variants": [
          {
            "label": null,
            "price": 7.5
          }
        ],
        "img": "JamonCerrano.jpg"
      },
      {
        "name": "Sepia",
        "variants": [
          {
            "label": null,
            "price": 9.75
          }
        ],
        "img": "Sepia.jpg"
      },
      {
        "name": "Fuet",
        "variants": [
          {
            "label": null,
            "price": 5.5
          }
        ],
        "img": "Fuet.jpg"
      },
      {
        "name": "Callos",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "Callos.jpg"
      },
      {
        "name": "Queso",
        "variants": [
          {
            "label": null,
            "price": 9
          }
        ],
        "img": "quesos.jpg"
      },
      {
        "name": "Pinchos",
        "variants": [
          {
            "label": null,
            "price": 7.15
          }
        ],
        "img": "Pinchos.jpg"
      },
      {
        "name": "Pimientos de padrón",
        "variants": [
          {
            "label": null,
            "price": 5.5
          }
        ],
        "img": "PimientosDePadron.jpg"
      },
      {
        "name": "Boquerones fritos",
        "variants": [
          {
            "label": null,
            "price": 7.55
          }
        ],
        "img": "BoqueronesFritos.jpg"
      },
      {
        "name": "Patatas fritas",
        "variants": [
          {
            "label": null,
            "price": 4.85
          }
        ],
        "img": "PatatasFritas.jpg"
      },
      {
        "name": "Patatas bravas",
        "variants": [
          {
            "label": "Entera",
            "price": 6.25
          },
          {
            "label": "Media",
            "price": 4.5
          }
        ],
        "img": "PatatasBravas.jpg"
      },
      {
        "name": "Aceitunas",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "Aceitunas.jpg"
      },
      {
        "name": "Morros",
        "variants": [
          {
            "label": "Entera",
            "price": 6.95
          },
          {
            "label": "Media",
            "price": 5
          }
        ],
        "img": "Morros.jpg"
      },
      {
        "name": "Croquetas",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "Croquetas.jpg"
      },
      {
        "name": "Patas de calamar",
        "variants": [
          {
            "label": null,
            "price": 9.15
          }
        ],
        "img": "PatatasDeCalamar.jpg"
      },
      {
        "name": "Sevillanos",
        "variants": [
          {
            "label": null,
            "price": 9.15
          }
        ],
        "img": "Sevillanos.jpg"
      },
      {
        "name": "Gambas a la plancha",
        "variants": [
          {
            "label": null,
            "price": 10.5
          }
        ],
        "img": "GambasAlaPlancha.jpg"
      },
      {
        "name": "Parrillada de pescado frito (Boquerones, choco, sevillano)",
        "variants": [
          {
            "label": null,
            "price": 18.95
          }
        ],
        "img": "ParrilladaDePescadoFrito.jpg"
      },
      {
        "name": "Chocos",
        "variants": [
          {
            "label": null,
            "price": 9.15
          }
        ],
        "img": "Chocos.jpg"
      },
      {
        "name": "Sardinas",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "Sardinas.jpg"
      },
      {
        "name": "Calamares romana",
        "variants": [
          {
            "label": null,
            "price": 9.15
          }
        ],
        "img": "CalamaresRomana.jpg"
      },
      {
        "name": "Boquerones vinagre",
        "variants": [
          {
            "label": null,
            "price": 7.5
          }
        ],
        "img": "BoqueronesVinagre.jpg"
      },
      {
        "name": "Almejas a la plancha",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "AlmejasAlaPlancha.jpg"
      },
      {
        "name": "Langostino rebozado",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "LangostinoRebosado.jpg"
      },
      {
        "name": "Alitas de pollo",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "AlitasDePollo.jpg"
      },
      {
        "name": "Nuggets de pollo 8u",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "NugetsDePollo8U.jpg"
      },
      {
        "name": "Pan con tomate",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "PanConTomate.jpg"
      },
      {
        "name": "Carne en salsa",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "CarneEnSalsa.jpg"
      },
      {
        "name": "Berberecho",
        "variants": [
          {
            "label": null,
            "price": 7.65
          }
        ],
        "img": "Berberecho.jpg"
      },
      {
        "name": "Ensalada",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "Ensalado.jpg"
      },
      {
        "name": "Torreznos de Soria",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TerreznoDeSoria.jpg"
      },
      {
        "name": "Pincho de patatas",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "PinchoDePatatas.jpg"
      },
      {
        "name": "Chistorra",
        "variants": [
          {
            "label": null,
            "price": 8
          }
        ],
        "img": "Chistorra.jpg"
      },
      {
        "name": "Champiñones",
        "variants": [
          {
            "label": null,
            "price": 7.5
          }
        ],
        "img": "Champiñones.jpg"
      },
      {
        "name": "Tallarinas",
        "variants": [
          {
            "label": null,
            "price": 12.95
          }
        ],
        "img": "Tallarinas.jpg"
      }
    ]
  },
  "platos-combinados": {
    "id": "platos-combinados",
    "nombre": "Platos Combinados",
    "folder": "PlatosCombinados",
    "tema": "combinados",
    "covers": [
      "PlatosCombinados.jpg",
      "2FricandolaConHuevoYPatatas.jpg",
      "2FricandolaConPatatas.jpg",
      "BeiconPatatasYHuevo.jpg",
      "BistecPatatasYEnsalada.jpg",
      "ButifarraConJudiaYEnsalada.jpg",
      "CalamaresPatatasYEnsalada.jpg",
      "ChuletonDeTernera.jpg",
      "ChurrascoDeTernera.jpg",
      "CostillaDeCorderoConPatatasYEnsalada.jpg",
      "CroquetasConTortillaFrancesaYPatatas.jpg",
      "DoradaPlanchaConVerdura.jpg",
      "FrankfurtPatatasYHuevo.jpg",
      "FricandolaConPatatas.jpg",
      "HamburguesaPatatasYHuevo.jpg",
      "HuevosConPatata.jpg",
      "LomoPatatasYHuevo.jpg",
      "MerluzaPatatasYEnsalada.jpg",
      "MexicanitoConPatatasYHuevo.jpg",
      "NuggetsDePolloConPatatas.jpg",
      "PancetaPatatasHuevo.jpg",
      "ParrilladaDeMarisco.jpg",
      "PechugaDePolloPatatasYEnsalada.jpg",
      "PechugaDePolloRebozadaPatatasYEnsalada.jpg",
      "PinchoPatatasYHuevo.jpg",
      "SalchichaPatatasHuevo.jpg",
      "SalmonPatatasYEnsalada.jpg",
      "SepiaPatatasYEnsalada.jpg",
      "SevillanoPatatasYPimientos.jpg"
    ],
    "items": [
      {
        "name": "Merluza patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 13.55
          }
        ],
        "img": "MerluzaPatatasYEnsalada.jpg"
      },
      {
        "name": "Salmón patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 13.55
          }
        ],
        "img": "SalmonPatatasYEnsalada.jpg"
      },
      {
        "name": "Sepia patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 13.55
          }
        ],
        "img": "SepiaPatatasYEnsalada.jpg"
      },
      {
        "name": "Calamares patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 11.95
          }
        ],
        "img": "CalamaresPatatasYEnsalada.jpg"
      },
      {
        "name": "Sevillano patatas y pimientos",
        "variants": [
          {
            "label": null,
            "price": 12.95
          }
        ],
        "img": "SevillanoPatatasYPimientos.jpg"
      },
      {
        "name": "Lomo patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "LomoPatatasYHuevo.jpg"
      },
      {
        "name": "Beicon patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "BeiconPatatasYHuevo.jpg"
      },
      {
        "name": "Pechuga de pollo patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "PechugaDePolloPatatasYEnsalada.jpg"
      },
      {
        "name": "Pincho patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "PinchoPatatasYHuevo.jpg"
      },
      {
        "name": "Pechuga de pollo rebozada patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 11.25
          }
        ],
        "img": "PechugaDePolloRebozadaPatatasYEnsalada.jpg"
      },
      {
        "name": "Frankfurt patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "FrankfurtPatatasYHuevo.jpg"
      },
      {
        "name": "Bistec patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 12.05
          }
        ],
        "img": "BistecPatatasYEnsalada.jpg"
      },
      {
        "name": "Hamburguesa patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "HamburguesaPatatasYHuevo.jpg"
      },
      {
        "name": "Chuletón de ternera (450g-500g) patatas y pimientos",
        "variants": [
          {
            "label": null,
            "price": 23
          }
        ],
        "img": "ChuletonDeTernera.jpg"
      },
      {
        "name": "Salchicha patatas huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "SalchichaPatatasHuevo.jpg"
      },
      {
        "name": "Panceta patatas huevo",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "PancetaPatatasHuevo.jpg"
      },
      {
        "name": "Butifarra con judía y ensalada",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "ButifarraConJudiaYEnsalada.jpg"
      },
      {
        "name": "Huevos con patata",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "HuevosConPatata.jpg"
      },
      {
        "name": "Nuggets de pollo con patatas",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "NuggetsDePolloConPatatas.jpg"
      },
      {
        "name": "Dorada plancha con verdura",
        "variants": [
          {
            "label": null,
            "price": 13.55
          }
        ],
        "img": "DoradaPlanchaConVerdura.jpg"
      },
      {
        "name": "Croquetas con tortilla francesa y patatas",
        "variants": [
          {
            "label": null,
            "price": 9.25
          }
        ],
        "img": "CroquetasConTortillaFrancesaYPatatas.jpg"
      },
      {
        "name": "Fricándola con patatas",
        "variants": [
          {
            "label": null,
            "price": 5.5
          }
        ],
        "img": "FricandolaConPatatas.jpg"
      },
      {
        "name": "2 Fricándola con patatas",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "2FricandolaConPatatas.jpg"
      },
      {
        "name": "Churrasco de ternera con pimientos de padrón y patata bravas",
        "variants": [
          {
            "label": null,
            "price": 14.55
          }
        ],
        "img": "ChurrascoDeTernera.jpg"
      },
      {
        "name": "2 Fricándola con huevo y patatas",
        "variants": [
          {
            "label": null,
            "price": 8.85
          }
        ],
        "img": "2FricandolaConHuevoYPatatas.jpg"
      },
      {
        "name": "Mexicanito con patatas y huevo",
        "variants": [
          {
            "label": null,
            "price": 8.85
          }
        ],
        "img": "MexicanitoConPatatasYHuevo.jpg"
      },
      {
        "name": "Costilla de cordero con patatas y ensalada",
        "variants": [
          {
            "label": null,
            "price": 19.55
          }
        ],
        "img": "CostillaDeCorderoConPatatasYEnsalada.jpg"
      },
      {
        "name": "Parrillada de marisco (3 gambas, sevillano, sepia y champiñones)",
        "variants": [
          {
            "label": null,
            "price": 16.95
          }
        ],
        "img": "ParrilladaDeMarisco.jpg"
      }
    ]
  },
  "comida-china": {
    "id": "comida-china",
    "nombre": "Comida China",
    "folder": "ComidaChina",
    "tema": "china",
    "covers": [
      "ComidaChinaHero.jpg",
      "AncasDeRana.jpg",
      "ArrozBlanco.jpg",
      "ArrozFritoConCurry.jpg",
      "ArrozFritoConGambas.jpg",
      "ArrozFritoConPollo.jpg",
      "ArrozFritoDeLaCasa.jpg",
      "ArrozMixto.jpg",
      "ComiaChina7.jpg",
      "ComidaChina.jpg",
      "ComidaChina11.jpg",
      "ComidaChina12.jpg",
      "ComidaChina13.jpg",
      "ComidaChina14.jpg",
      "ComidaChina2.jpg",
      "ComidaChina3.jpg",
      "ComidaChina4.jpg",
      "ComidaChina5.jpg",
      "ComidaChina6.jpg",
      "ComidaChina8.jpg",
      "ComidaChina9.jpg",
      "ComidaChiona10.jpg",
      "CostillaALaSalYPimienta.jpg",
      "CostillaAgridulce.jpg",
      "Empanadilla.jpg",
      "EmpanadillasDeGambasAlVapor.jpg",
      "EnsaladaChina.jpg",
      "FideosFritosConGambas.jpg",
      "FideosFritosConPollo.jpg",
      "FideosFritosConTernera.jpg",
      "FideosMixtos.jpg",
      "GambasAlCurry.jpg",
      "GambasConChampinones.jpg",
      "GambasConPimientoVerde.jpg",
      "GambasConSalsaDeOstras.jpg",
      "GambasConSalsaPicante.jpg",
      "LangostinoALaSalYPimienta.jpg",
      "MiniRollitosDePrimavera.jpg",
      "PanChino.jpg",
      "PatoPekin.jpg",
      "PolloAlCurry.jpg",
      "PolloConAlmendras.jpg",
      "PolloConCebolla.jpg",
      "PolloConChampinones.jpg",
      "PolloConSalsaDeOstras.jpg",
      "PolloConSalsaPicante.jpg",
      "PolloGonBao.jpg",
      "PolloRebozadoConSalsaLimon.jpg",
      "RollitoDePrimavera.jpg",
      "SepiaConCurry.jpg",
      "SepiaConPimientoVerde.jpg",
      "SepiaConSalsaDeOstras.jpg",
      "SepiaConSalsaPicante.jpg",
      "ShaoMai.jpg",
      "TallarinesFritosConGambas.jpg",
      "TallarinesFritosConPollo.jpg",
      "TallarinesFritosConTernera.jpg",
      "TallarinesMixtos.jpg",
      "TerneraConCebolla.jpg",
      "TerneraConChampinones.jpg",
      "TerneraConCurry.jpg",
      "TerneraConPimientoVerde.jpg",
      "TerneraConSalsaDeOstras.jpg",
      "TerneraConSalsaPicante.jpg",
      "WanTonALaPlancha.jpg",
      "WanTonFrito.jpg"
    ],
    "items": [
      {
        "name": "Arroz frito de la casa",
        "variants": [
          {
            "label": null,
            "price": 6.35
          }
        ],
        "img": "ArrozFritoDeLaCasa.jpg"
      },
      {
        "name": "Arroz frito con gambas",
        "variants": [
          {
            "label": null,
            "price": 7.65
          }
        ],
        "img": "ArrozFritoConGambas.jpg"
      },
      {
        "name": "Arroz frito con pollo",
        "variants": [
          {
            "label": null,
            "price": 6.65
          }
        ],
        "img": "ArrozFritoConPollo.jpg"
      },
      {
        "name": "Arroz frito con curry",
        "variants": [
          {
            "label": null,
            "price": 6.95
          }
        ],
        "img": "ArrozFritoConCurry.jpg"
      },
      {
        "name": "Arroz mixto",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "ArrozMixto.jpg"
      },
      {
        "name": "Fideos fritos con pollo",
        "variants": [
          {
            "label": null,
            "price": 6.95
          }
        ],
        "img": "FideosFritosConPollo.jpg"
      },
      {
        "name": "Fideos fritos con gambas",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "FideosFritosConGambas.jpg"
      },
      {
        "name": "Fideos fritos con ternera",
        "variants": [
          {
            "label": null,
            "price": 7.65
          }
        ],
        "img": "FideosFritosConTernera.jpg"
      },
      {
        "name": "Fideos mixtos",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "FideosMixtos.jpg"
      },
      {
        "name": "Tallarines fritos con pollo",
        "variants": [
          {
            "label": null,
            "price": 6.95
          }
        ],
        "img": "TallarinesFritosConPollo.jpg"
      },
      {
        "name": "Tallarines fritos con gambas",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "TallarinesFritosConGambas.jpg"
      },
      {
        "name": "Tallarines fritos con ternera",
        "variants": [
          {
            "label": null,
            "price": 7.65
          }
        ],
        "img": "TallarinesFritosConTernera.jpg"
      },
      {
        "name": "Tallarines mixtos",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TallarinesMixtos.jpg"
      },
      {
        "name": "Empanadilla",
        "variants": [
          {
            "label": null,
            "price": 6.65
          }
        ],
        "img": "Empanadilla.jpg"
      },
      {
        "name": "Empanadillas de gambas al vapor",
        "variants": [
          {
            "label": "5 uds.",
            "price": 5.25
          }
        ],
        "img": "EmpanadillasDeGambasAlVapor.jpg"
      },
      {
        "name": "Shao mai",
        "variants": [
          {
            "label": "5 uds.",
            "price": 5.25
          }
        ],
        "img": "ShaoMai.jpg"
      },
      {
        "name": "Rollito de primavera",
        "variants": [
          {
            "label": "1 uds.",
            "price": 2.2
          }
        ],
        "img": "RollitoDePrimavera.jpg"
      },
      {
        "name": "Mini rollitos de primavera",
        "variants": [
          {
            "label": "8 uds.",
            "price": 4.5
          }
        ],
        "img": "MiniRollitosDePrimavera.jpg"
      },
      {
        "name": "Wan tón frito",
        "variants": [
          {
            "label": null,
            "price": 7.25
          }
        ],
        "img": "WanTonFrito.jpg"
      },
      {
        "name": "Wan tón a la plancha",
        "variants": [
          {
            "label": null,
            "price": 7.55
          }
        ],
        "img": "WanTonALaPlancha.jpg"
      },
      {
        "name": "Ensalada china",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "EnsaladaChina.jpg"
      },
      {
        "name": "Arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "ArrozBlanco.jpg"
      },
      {
        "name": "Pollo con almendras",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "PolloConAlmendras.jpg"
      },
      {
        "name": "Pollo rebozado con salsa limón",
        "variants": [
          {
            "label": null,
            "price": 8.75
          }
        ],
        "img": "PolloRebozadoConSalsaLimon.jpg"
      },
      {
        "name": "Pollo con salsa picante",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "PolloConSalsaPicante.jpg"
      },
      {
        "name": "Pollo al curry",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "PolloAlCurry.jpg"
      },
      {
        "name": "Pollo con champiñones",
        "variants": [
          {
            "label": null,
            "price": 8.75
          }
        ],
        "img": "PolloConChampinones.jpg"
      },
      {
        "name": "Pollo con cebolla",
        "variants": [
          {
            "label": null,
            "price": 8.75
          }
        ],
        "img": "PolloConCebolla.jpg"
      },
      {
        "name": "Pollo con salsa de ostras",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "PolloConSalsaDeOstras.jpg"
      },
      {
        "name": "Ternera con salsa picante",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TerneraConSalsaPicante.jpg"
      },
      {
        "name": "Ternera con cebolla",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TerneraConCebolla.jpg"
      },
      {
        "name": "Ternera con champiñones",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "TerneraConChampinones.jpg"
      },
      {
        "name": "Ternera con pimiento verde",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "TerneraConPimientoVerde.jpg"
      },
      {
        "name": "Ternera con curry",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TerneraConCurry.jpg"
      },
      {
        "name": "Ternera con salsa de ostras",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "TerneraConSalsaDeOstras.jpg"
      },
      {
        "name": "Gambas con pimiento verde",
        "variants": [
          {
            "label": null,
            "price": 10.65
          }
        ],
        "img": "GambasConPimientoVerde.jpg"
      },
      {
        "name": "Gambas con salsa de ostras",
        "variants": [
          {
            "label": null,
            "price": 10.65
          }
        ],
        "img": "GambasConSalsaDeOstras.jpg"
      },
      {
        "name": "Gambas con salsa picante",
        "variants": [
          {
            "label": null,
            "price": 10.65
          }
        ],
        "img": "GambasConSalsaPicante.jpg"
      },
      {
        "name": "Gambas con champiñones",
        "variants": [
          {
            "label": null,
            "price": 10.95
          }
        ],
        "img": "GambasConChampinones.jpg"
      },
      {
        "name": "Gambas al curry",
        "variants": [
          {
            "label": null,
            "price": 10.65
          }
        ],
        "img": "GambasAlCurry.jpg"
      },
      {
        "name": "Langostino a la sal y pimienta",
        "variants": [
          {
            "label": null,
            "price": 11.15
          }
        ],
        "img": "LangostinoALaSalYPimienta.jpg"
      },
      {
        "name": "Sepia con salsa de ostras",
        "variants": [
          {
            "label": null,
            "price": 11.65
          }
        ],
        "img": "SepiaConSalsaDeOstras.jpg"
      },
      {
        "name": "Sepia con salsa picante",
        "variants": [
          {
            "label": null,
            "price": 11.65
          }
        ],
        "img": "SepiaConSalsaPicante.jpg"
      },
      {
        "name": "Sepia con pimiento verde",
        "variants": [
          {
            "label": null,
            "price": 11.65
          }
        ],
        "img": "SepiaConPimientoVerde.jpg"
      },
      {
        "name": "Sepia con curry",
        "variants": [
          {
            "label": null,
            "price": 11.65
          }
        ],
        "img": "SepiaConCurry.jpg"
      },
      {
        "name": "Costilla a la sal y pimienta",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "CostillaALaSalYPimienta.jpg"
      },
      {
        "name": "Costilla agridulce",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "CostillaAgridulce.jpg"
      },
      {
        "name": "Ancas de rana",
        "variants": [
          {
            "label": null,
            "price": 12.5
          }
        ],
        "img": "AncasDeRana.jpg"
      },
      {
        "name": "Pato Pekin",
        "variants": [
          {
            "label": null,
            "price": 13.5
          }
        ],
        "img": "PatoPekin.jpg"
      },
      {
        "name": "Pollo gon bao",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "PolloGonBao.jpg"
      },
      {
        "name": "Pan chino",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "PanChino.jpg"
      }
    ]
  },
  "bebidas": {
    "id": "bebidas",
    "nombre": "Bebidas",
    "folder": "Bebidas",
    "tema": "bebidas",
    "covers": [
      "Bebidas.jpg",
      "Bebidas2.jpg",
      "Cava.jpg",
      "CopaDeCava.jpg",
      "CopaDeVinoDeLaCasa.jpg",
      "CopaSangriaDeCava.jpg",
      "CopaSangriaDeVino.jpg",
      "CopaVinoBlancoBach.jpg",
      "CopaVinoRioja.jpg",
      "Cune.jpg",
      "ElCoto.jpg",
      "ElCotoPequeno.jpg",
      "LambruscoRosado.jpg",
      "MarquesDeCaceres.jpg",
      "Mojito.jpg",
      "MojitoDeFresa.jpg",
      "PerroVerde.jpg",
      "RamonBilbao.jpg",
      "RamonBilbaoPequeno.jpg",
      "SangriaDeCava.jpg",
      "SangriaDeVino.jpg",
      "TintoVerano.jpg",
      "VinoBlancoBach.jpg",
      "VinoDeLaCasa.jpg",
      "VinoRosado.jpg"
    ],
    "items": [
      {
        "name": "Copa de vino de la casa",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "CopaDeVinoDeLaCasa.jpg"
      },
      {
        "name": "Vino de la casa",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "VinoDeLaCasa.jpg"
      },
      {
        "name": "Ramón Bilbao",
        "variants": [
          {
            "label": null,
            "price": 13.95
          }
        ],
        "img": "RamonBilbao.jpg"
      },
      {
        "name": "Marqués de Cáceres",
        "variants": [
          {
            "label": null,
            "price": 13.95
          }
        ],
        "img": "MarquesDeCaceres.jpg"
      },
      {
        "name": "El coto",
        "variants": [
          {
            "label": null,
            "price": 12.5
          }
        ],
        "img": "ElCoto.jpg"
      },
      {
        "name": "Cune",
        "variants": [
          {
            "label": null,
            "price": 12.5
          }
        ],
        "img": "Cune.jpg"
      },
      {
        "name": "El coto pequeño",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "ElCotoPequeno.jpg"
      },
      {
        "name": "Ramón Bilbao pequeño",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "RamonBilbaoPequeno.jpg"
      },
      {
        "name": "Copa vino rioja",
        "variants": [
          {
            "label": null,
            "price": 3.7
          }
        ],
        "img": "CopaVinoRioja.jpg"
      },
      {
        "name": "Vino blanco Bach",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "VinoBlancoBach.jpg"
      },
      {
        "name": "Copa vino blanco Bach",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "CopaVinoBlancoBach.jpg"
      },
      {
        "name": "Tinto Verano",
        "variants": [
          {
            "label": null,
            "price": 2.6
          }
        ],
        "img": "TintoVerano.jpg"
      },
      {
        "name": "Vino rosado",
        "variants": [
          {
            "label": null,
            "price": 8.5
          }
        ],
        "img": "VinoRosado.jpg"
      },
      {
        "name": "Cava",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "Cava.jpg"
      },
      {
        "name": "Copa de cava",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "CopaDeCava.jpg"
      },
      {
        "name": "Perro verde",
        "variants": [
          {
            "label": null,
            "price": 14.5
          }
        ],
        "img": "PerroVerde.jpg"
      },
      {
        "name": "Lambrusco Rosado",
        "variants": [
          {
            "label": null,
            "price": 8.95
          }
        ],
        "img": "LambruscoRosado.jpg"
      },
      {
        "name": "Sangría de vino",
        "variants": [
          {
            "label": null,
            "price": 12.95
          }
        ],
        "img": "SangriaDeVino.jpg"
      },
      {
        "name": "Sangría de cava",
        "variants": [
          {
            "label": null,
            "price": 16.5
          }
        ],
        "img": "SangriaDeCava.jpg"
      },
      {
        "name": "Copa sangría de vino",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "CopaSangriaDeVino.jpg"
      },
      {
        "name": "Copa sangría de cava",
        "variants": [
          {
            "label": null,
            "price": 7.95
          }
        ],
        "img": "CopaSangriaDeCava.jpg"
      },
      {
        "name": "Mojito",
        "variants": [
          {
            "label": null,
            "price": 7
          }
        ],
        "img": "Mojito.jpg"
      },
      {
        "name": "Mojito de fresa",
        "variants": [
          {
            "label": null,
            "price": 7.5
          }
        ],
        "img": "MojitoDeFresa.jpg"
      }
    ]
  },
  "cafe": {
    "id": "cafe",
    "nombre": "Café",
    "folder": "Cafe",
    "tema": "cafe",
    "covers": [
      "Cafe.jpg",
      "CafeIrlandes.jpg",
      "Cortado.jpg",
      "bombon.jpg",
      "cafeConHielo.jpg",
      "cafeConLeche.jpg",
      "cafeSolo.jpg",
      "carajilloDeBaileys.jpg",
      "carajilloDeConac.jpg",
      "carajilloDeWhisky.jpg",
      "infusion.jpg",
      "trifasicoDeBaileys.jpg",
      "trifasicoDeConac.jpg",
      "trifasicoDeWhisky.jpg"
    ],
    "items": [
      {
        "name": "Café solo",
        "variants": [
          {
            "label": null,
            "price": 1.5
          }
        ],
        "img": "cafeSolo.jpg"
      },
      {
        "name": "Cortado",
        "variants": [
          {
            "label": null,
            "price": 1.6
          }
        ],
        "img": "Cortado.jpg"
      },
      {
        "name": "Café con leche",
        "variants": [
          {
            "label": null,
            "price": 1.7
          }
        ],
        "img": "cafeConLeche.jpg"
      },
      {
        "name": "Infusión",
        "variants": [
          {
            "label": null,
            "price": 1.9
          }
        ],
        "img": "infusion.jpg"
      },
      {
        "name": "Café con hielo",
        "variants": [
          {
            "label": null,
            "price": 1.6
          }
        ],
        "img": "cafeConHielo.jpg"
      },
      {
        "name": "Bombón",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "bombon.jpg"
      },
      {
        "name": "Carajillo de coñac",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "carajilloDeConac.jpg"
      },
      {
        "name": "Carajillo de whisky",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "carajilloDeWhisky.jpg"
      },
      {
        "name": "Carajillo de Baileys",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "carajilloDeBaileys.jpg"
      },
      {
        "name": "Trifásico de coñac",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "trifasicoDeConac.jpg"
      },
      {
        "name": "Trifásico de whisky",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "trifasicoDeWhisky.jpg"
      },
      {
        "name": "Trifásico de Baileys",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "trifasicoDeBaileys.jpg"
      },
      {
        "name": "Café irlandés",
        "variants": [
          {
            "label": null,
            "price": 5.5
          }
        ],
        "img": "CafeIrlandes.jpg"
      }
    ]
  },
  "refrescos": {
    "id": "refrescos",
    "nombre": "Refrescos",
    "folder": "Refrescos",
    "tema": "refrescos",
    "covers": [
      "Refrescos.jpg",
      "Refrescos2.jpg"
    ],
    "items": [
      {
        "name": "Coca-Cola",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Coca-Cola Zero",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Fanta Naranja",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Fanta Limón",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Aquarius Limón",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Aquarius Naranja",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Nestea",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Lychee",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Tónica",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Bitter kas",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Zumo de botella",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Zumo de naranja natural",
        "variants": [
          {
            "label": null,
            "price": 3.95
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Cacaolat",
        "variants": [
          {
            "label": null,
            "price": 2.6
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Agua pequeña",
        "variants": [
          {
            "label": null,
            "price": 1.4
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Agua grande",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Trina Naranja",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Sprite",
        "variants": [
          {
            "label": null,
            "price": 2.2
          }
        ],
        "img": "Refrescos.jpg"
      },
      {
        "name": "Coca-Cola de botella",
        "variants": [
          {
            "label": null,
            "price": 2.7
          }
        ],
        "img": "Refrescos2.jpg"
      },
      {
        "name": "Coca-Cola de botella pequeña",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Refrescos.jpg"
      }
    ]
  },
  "cervezas": {
    "id": "cervezas",
    "nombre": "Cervezas",
    "folder": "Cervezas",
    "tema": "cervezas",
    "covers": [
      "Cerbezas.jpg",
      "Cerbezas2.jpg",
      "CervezSinGluten.jpg",
      "CervezaSinAlcohol.jpg",
      "Clara.jpg",
      "CopaDeCerveza.jpg",
      "EstrellaMediana.jpg",
      "EstrellaQuinta.jpg",
      "FreeDam.jpg",
      "Galicia.jpg",
      "Heineken.jpg",
      "SinAlcoholTostada.jpg",
      "Turia.jpg",
      "VollDamm.jpg"
    ],
    "items": [
      {
        "name": "Estrella mediana",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "EstrellaMediana.jpg"
      },
      {
        "name": "Estrella Quinta",
        "variants": [
          {
            "label": null,
            "price": 1.9
          }
        ],
        "img": "EstrellaQuinta.jpg"
      },
      {
        "name": "Galicias",
        "variants": [
          {
            "label": null,
            "price": 2.3
          }
        ],
        "img": "Galicia.jpg"
      },
      {
        "name": "Cerveza sin alcohol",
        "variants": [
          {
            "label": null,
            "price": 2.4
          }
        ],
        "img": "CervezaSinAlcohol.jpg"
      },
      {
        "name": "Sin Alcohol Tostada",
        "variants": [
          {
            "label": null,
            "price": 2.4
          }
        ],
        "img": "SinAlcoholTostada.jpg"
      },
      {
        "name": "Turia",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "Turia.jpg"
      },
      {
        "name": "Cerveza Sin Gluten",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "CervezSinGluten.jpg"
      },
      {
        "name": "Voll Damm",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "VollDamm.jpg"
      },
      {
        "name": "Clara",
        "variants": [
          {
            "label": null,
            "price": 2.4
          }
        ],
        "img": "Clara.jpg"
      },
      {
        "name": "Copa cerveza",
        "variants": [
          {
            "label": null,
            "price": 2.4
          }
        ],
        "img": "CopaDeCerveza.jpg"
      },
      {
        "name": "Heineken",
        "variants": [
          {
            "label": null,
            "price": 2.4
          }
        ],
        "img": "Heineken.jpg"
      },
      {
        "name": "Free Damm",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "FreeDam.jpg"
      }
    ]
  },
  "arroz-con-salsa": {
    "id": "arroz-con-salsa",
    "nombre": "Arroz con Salsa",
    "folder": "ArrozConSalsa",
    "tema": "china",
    "covers": [
      "GambasConSalsaPicanteYArrozBlanco.jpg",
      "PolloAlLimonConArrozBlanco.jpg",
      "PolloAlLimonConPatatas.jpg",
      "PolloConAlmendrasYArrozBlanco.jpg",
      "PolloConCurriYarrozBlanco.jpg",
      "SepiaConSalsaPicanteYArrozBlanco.jpg",
      "TerneraConSalsaDeOstrasYarrozBlanco.jpg",
      "TerneraConSalsaPicanteYArrozBlanco.jpg",
      "TreneraConSalsaDeOstrasYtallarines.jpg"
    ],
    "items": [
      {
        "name": "Pollo al limón con arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 9.65
          }
        ],
        "img": "PolloAlLimonConArrozBlanco.jpg"
      },
      {
        "name": "Pollo con almendras y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "PolloConAlmendrasYArrozBlanco.jpg"
      },
      {
        "name": "Pollo con curry y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 9.5
          }
        ],
        "img": "PolloConCurriYarrozBlanco.jpg"
      },
      {
        "name": "Pollo al limón con patatas",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "PolloAlLimonConPatatas.jpg"
      },
      {
        "name": "Ternera con salsa de ostras y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "TerneraConSalsaDeOstrasYarrozBlanco.jpg"
      },
      {
        "name": "Ternera con salsa picante y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 9.95
          }
        ],
        "img": "TerneraConSalsaPicanteYArrozBlanco.jpg"
      },
      {
        "name": "Gambas con salsa picante y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 11.65
          }
        ],
        "img": "GambasConSalsaPicanteYArrozBlanco.jpg"
      },
      {
        "name": "Sepia con salsa picante y arroz blanco",
        "variants": [
          {
            "label": null,
            "price": 11.95
          }
        ],
        "img": "SepiaConSalsaPicanteYArrozBlanco.jpg"
      },
      {
        "name": "Ternera con salsa de ostras y tallarines",
        "variants": [
          {
            "label": null,
            "price": 12.95
          }
        ],
        "img": "TreneraConSalsaDeOstrasYtallarines.jpg"
      }
    ]
  },
  "licores": {
    "id": "licores",
    "nombre": "Licores",
    "folder": "Licores",
    "tema": "licores",
    "covers": [
      "BacardiCola.png",
      "BlackLabel.jpg",
      "Bombay.png",
      "ChupitoChiva.png",
      "ChupitoConac.png",
      "Chupitodecardu.png",
      "ChupitoHierbas.png",
      "ChupitoMacallan.png",
      "ChupitoOrujoBlanco.png",
      "ChupitoWhisky.png",
      "CopaAnis.png",
      "CopaBeilys.png",
      "CopaCardu.png",
      "CopaConac.png",
      "CopadeJackDaniels.png",
      "CopaHierbas.png",
      "CopaJackDaniels.png",
      "CopaMagno.png",
      "CopaTorres.jpg",
      "CopaTorres10.png",
      "CopaVodka.png",
      "CopaWhisky.png",
      "Gintonic.jpg",
      "JackDanielsCola.png",
      "LicoresHero.jpg",
      "MartiniBlanco.jpg",
      "MartiniNegro.png",
      "Tequila.png",
      "TuboBeilys.png",
      "TuboHierbas.png",
      "TuboWhisky.png",
      "Vermut.png",
      "VodkaAbsolut.png",
      "VodkaRedBull.png",
      "WhiskyCola.png",
      "WhiskyRedBull.png"
    ],
    "items": [
      {
        "name": "Chupito de coñac",
        "variants": [
          {
            "label": null,
            "price": 1.8
          }
        ],
        "img": "ChupitoConac.png"
      },
      {
        "name": "Chupito de hierbas",
        "variants": [
          {
            "label": null,
            "price": 1.8
          }
        ],
        "img": "ChupitoHierbas.png"
      },
      {
        "name": "Chupito de whisky",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "ChupitoWhisky.png"
      },
      {
        "name": "Copa de coñac",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "CopaConac.png"
      },
      {
        "name": "Copa de anís",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "CopaAnis.png"
      },
      {
        "name": "Copa de whisky",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "CopaWhisky.png"
      },
      {
        "name": "Copa de Beilys",
        "variants": [
          {
            "label": null,
            "price": 3.2
          }
        ],
        "img": "CopaBeilys.png"
      },
      {
        "name": "Copa de hierbas",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "CopaHierbas.png"
      },
      {
        "name": "Copa de torres",
        "variants": [
          {
            "label": null,
            "price": 2.8
          }
        ],
        "img": "CopaTorres.jpg"
      },
      {
        "name": "Copa de torres 10",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "CopaTorres10.png"
      },
      {
        "name": "Tubo de hierbas",
        "variants": [
          {
            "label": null,
            "price": 2.5
          }
        ],
        "img": "TuboHierbas.png"
      },
      {
        "name": "Tubo de whisky",
        "variants": [
          {
            "label": null,
            "price": 4.2
          }
        ],
        "img": "TuboWhisky.png"
      },
      {
        "name": "Tubo de Beilys",
        "variants": [
          {
            "label": null,
            "price": 4.2
          }
        ],
        "img": "TuboBeilys.png"
      },
      {
        "name": "Whisky cola",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "WhiskyCola.png"
      },
      {
        "name": "Whisky RedBull",
        "variants": [
          {
            "label": null,
            "price": 6.8
          }
        ],
        "img": "WhiskyRedBull.png"
      },
      {
        "name": "Gintonic",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "Gintonic.jpg"
      },
      {
        "name": "Vodka absolut",
        "variants": [
          {
            "label": null,
            "price": 6.5
          }
        ],
        "img": "VodkaAbsolut.png"
      },
      {
        "name": "Vodka RedBull",
        "variants": [
          {
            "label": null,
            "price": 7
          }
        ],
        "img": "VodkaRedBull.png"
      },
      {
        "name": "Bacardi cola",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "BacardiCola.png"
      },
      {
        "name": "Chupito de Macallan",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "ChupitoMacallan.png"
      },
      {
        "name": "Copa de Macallan",
        "variants": [
          {
            "label": null,
            "price": 11
          }
        ],
        "img": "CopaCardu.png"
      },
      {
        "name": "Chupito de chiva",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "ChupitoChiva.png"
      },
      {
        "name": "Chupito de Jack Daniels",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "CopadeJackDaniels.png"
      },
      {
        "name": "Copa de Jack Daniels",
        "variants": [
          {
            "label": null,
            "price": 4.5
          }
        ],
        "img": "CopaJackDaniels.png"
      },
      {
        "name": "Chupito de cardu",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "Chupitodecardu.png"
      },
      {
        "name": "Copa de cardu",
        "variants": [
          {
            "label": null,
            "price": 5
          }
        ],
        "img": "CopaCardu.png"
      },
      {
        "name": "Martini blanco",
        "variants": [
          {
            "label": null,
            "price": 3.8
          }
        ],
        "img": "MartiniBlanco.jpg"
      },
      {
        "name": "Martini negro",
        "variants": [
          {
            "label": null,
            "price": 3.8
          }
        ],
        "img": "MartiniNegro.png"
      },
      {
        "name": "Vermut",
        "variants": [
          {
            "label": null,
            "price": 3.2
          }
        ],
        "img": "Vermut.png"
      },
      {
        "name": "Tequila",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "Tequila.png"
      },
      {
        "name": "Chupito Orujo blanco",
        "variants": [
          {
            "label": null,
            "price": 2
          }
        ],
        "img": "ChupitoOrujoBlanco.png"
      },
      {
        "name": "Jack Daniels Cola",
        "variants": [
          {
            "label": null,
            "price": 7.5
          }
        ],
        "img": "JackDanielsCola.png"
      },
      {
        "name": "Bombay",
        "variants": [
          {
            "label": null,
            "price": 7
          }
        ],
        "img": "Bombay.png"
      },
      {
        "name": "Copa de magno",
        "variants": [
          {
            "label": null,
            "price": 2.8
          }
        ],
        "img": "CopaMagno.png"
      },
      {
        "name": "Black label",
        "variants": [
          {
            "label": null,
            "price": 6
          }
        ],
        "img": "BlackLabel.jpg"
      },
      {
        "name": "Copa de vodka",
        "variants": [
          {
            "label": null,
            "price": 3
          }
        ],
        "img": "CopaVodka.png"
      }
    ]
  }
};

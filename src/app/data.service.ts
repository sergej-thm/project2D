import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: any = [
    {
      "name": "Garth Henry",
      "email": "dolor.dolor.tempus@aol.org",
      "value": "€1.269.709",
      "address": "P.O. Box 418, 5538 Id Road",
      "region": "Gangwon"
    },
    {
      "name": "Barry Moss",
      "email": "nunc.sollicitudin@outlook.edu",
      "value": "€1.662.841",
      "address": "Ap #392-1439 Non, Road",
      "region": "Castilla y León"
    },
    {
      "name": "Catherine Bishop",
      "email": "risus@google.net",
      "value": "€399.442",
      "address": "P.O. Box 912, 8384 Suspendisse Road",
      "region": "Sverdlovsk Oblast"
    },
    {
      "name": "Jarrod Stafford",
      "email": "sem.magna.nec@protonmail.ca",
      "value": "€314.212",
      "address": "Ap #361-5031 Donec Rd.",
      "region": "Central Region"
    },
    {
      "name": "Sierra Tate",
      "email": "pede.malesuada@aol.couk",
      "value": "€1.474.549",
      "address": "5453 Tincidunt Street",
      "region": "Illes Balears"
    },
    {
      "name": "Tanya Coleman",
      "email": "fermentum@protonmail.ca",
      "value": "€1.465.796",
      "address": "Ap #814-1199 Orci. Avenue",
      "region": "Tula Oblast"
    },
    {
      "name": "Gregory Harrington",
      "email": "arcu.sed@protonmail.net",
      "value": "€1.165.195",
      "address": "P.O. Box 475, 3376 Augue, Ave",
      "region": "Piemonte"
    },
    {
      "name": "Pandora Fowler",
      "email": "molestie@hotmail.org",
      "value": "€280.848",
      "address": "8576 Pede. Rd.",
      "region": "Northwest Territories"
    },
    {
      "name": "Jenette Golden",
      "email": "elementum.sem.vitae@aol.com",
      "value": "€1.492.819",
      "address": "3137 Ut Road",
      "region": "National Capital Region"
    },
    {
      "name": "Uriel Cobb",
      "email": "orci.in.consequat@yahoo.edu",
      "value": "€1.087.818",
      "address": "Ap #556-2386 Vestibulum St.",
      "region": "Chiapas"
    },
    {
      "name": "Dillon Colon",
      "email": "amet@yahoo.net",
      "value": "€258.262",
      "address": "9744 Egestas. Av.",
      "region": "Rajasthan"
    },
    {
      "name": "Clio Parks",
      "email": "fringilla@hotmail.ca",
      "value": "€733.477",
      "address": "6351 Curabitur Av.",
      "region": "Istanbul"
    },
    {
      "name": "Gloria Bowen",
      "email": "duis.elementum@protonmail.edu",
      "value": "€926.646",
      "address": "7959 Curabitur St.",
      "region": "Namen"
    },
    {
      "name": "Cyrus Bowen",
      "email": "sed.turpis@hotmail.edu",
      "value": "€768.480",
      "address": "Ap #770-2697 Nec, Rd.",
      "region": "Utah"
    },
    {
      "name": "Joan Day",
      "email": "sagittis@yahoo.org",
      "value": "€1.141.024",
      "address": "P.O. Box 774, 9162 Molestie Rd.",
      "region": "Guanajuato"
    },
    {
      "name": "Perry Keller",
      "email": "nulla.eu.neque@google.org",
      "value": "€349.212",
      "address": "437-5747 Lobortis Avenue",
      "region": "Fife"
    },
    {
      "name": "Wing Tyson",
      "email": "donec@outlook.ca",
      "value": "€1.442.241",
      "address": "P.O. Box 928, 6144 Odio St.",
      "region": "Lampung"
    },
    {
      "name": "Brian Stanton",
      "email": "proin.non@protonmail.ca",
      "value": "€869.539",
      "address": "P.O. Box 539, 218 Congue, Rd.",
      "region": "Sląskie"
    },
    {
      "name": "Ella Mccormick",
      "email": "a.enim.suspendisse@aol.ca",
      "value": "€676.031",
      "address": "Ap #694-1736 At Av.",
      "region": "Heredia"
    },
    {
      "name": "Clinton Neal",
      "email": "aliquam.ultrices@protonmail.edu",
      "value": "€1.984.383",
      "address": "2587 Aliquet Ave",
      "region": "Prince Edward Island"
    },
    {
      "name": "Timon Hayes",
      "email": "dolor@google.net",
      "value": "€222.862",
      "address": "310-7947 Vulputate Ave",
      "region": "Arkansas"
    },
    {
      "name": "Molly Booth",
      "email": "duis.elementum.dui@outlook.org",
      "value": "€215.224",
      "address": "289-5877 Elit, Road",
      "region": "Nghệ An"
    },
    {
      "name": "Brennan Grant",
      "email": "proin.non@outlook.com",
      "value": "€1.833.942",
      "address": "P.O. Box 784, 3698 Non, Avenue",
      "region": "Huádōng"
    },
    {
      "name": "Vance Dixon",
      "email": "vivamus.nibh.dolor@yahoo.ca",
      "value": "€1.047.717",
      "address": "Ap #989-3939 Eu St.",
      "region": "Kemerovo Oblast"
    },
    {
      "name": "Russell Madden",
      "email": "lorem.ac.risus@hotmail.couk",
      "value": "€1.066.199",
      "address": "Ap #858-7175 Pede St.",
      "region": "Östergötlands län"
    },
    {
      "name": "Lysandra Rogers",
      "email": "auctor@aol.com",
      "value": "€1.365.399",
      "address": "Ap #207-7273 Proin St.",
      "region": "Bangsamoro"
    },
    {
      "name": "Seth Daugherty",
      "email": "mauris.ipsum@hotmail.org",
      "value": "€512.437",
      "address": "8198 Natoque St.",
      "region": "Rio de Janeiro"
    },
    {
      "name": "Chiquita Tillman",
      "email": "malesuada.fames.ac@protonmail.edu",
      "value": "€1.897.949",
      "address": "Ap #899-7508 Vehicula Rd.",
      "region": "Utrecht"
    },
    {
      "name": "Mufutau Holland",
      "email": "vulputate.ullamcorper.magna@yahoo.org",
      "value": "€1.222.156",
      "address": "Ap #995-3244 Lorem Street",
      "region": "Principado de Asturias"
    },
    {
      "name": "Kaitlin Nelson",
      "email": "amet.orci.ut@icloud.com",
      "value": "€875.298",
      "address": "Ap #573-2970 Dolor Ave",
      "region": "Sachsen-Anhalt"
    },
    {
      "name": "Chaim Stanton",
      "email": "tincidunt.adipiscing@yahoo.edu",
      "value": "€200.194",
      "address": "662-2302 Enim. Avenue",
      "region": "Ulster"
    },
    {
      "name": "Heidi Bentley",
      "email": "augue.ut.lacus@aol.org",
      "value": "€1.480.650",
      "address": "P.O. Box 142, 3849 Proin Road",
      "region": "Irkutsk Oblast"
    },
    {
      "name": "Joan Bolton",
      "email": "faucibus.leo@google.couk",
      "value": "€658.323",
      "address": "Ap #892-3504 Magna Road",
      "region": "Lorraine"
    },
    {
      "name": "Dane Young",
      "email": "duis@hotmail.couk",
      "value": "€439.480",
      "address": "Ap #184-1537 Sed St.",
      "region": "Zakarpattia oblast"
    },
    {
      "name": "Yasir Travis",
      "email": "vulputate.mauris@outlook.edu",
      "value": "€1.665.882",
      "address": "808 Rhoncus. Rd.",
      "region": "Friuli-Venezia Giulia"
    },
    {
      "name": "Nomlanga Robertson",
      "email": "egestas@aol.org",
      "value": "€329.754",
      "address": "983-501 Euismod Avenue",
      "region": "Lorraine"
    },
    {
      "name": "Daria Levy",
      "email": "dolor.donec@google.couk",
      "value": "€459.704",
      "address": "944-2871 Netus Ave",
      "region": "Diyarbakır"
    },
    {
      "name": "Cassandra Sweeney",
      "email": "libero@protonmail.com",
      "value": "€1.187.686",
      "address": "Ap #491-287 Adipiscing Rd.",
      "region": "Sindh"
    },
    {
      "name": "Nita Warren",
      "email": "integer.aliquam@google.com",
      "value": "€1.691.635",
      "address": "5432 Nec Av.",
      "region": "La Rioja"
    },
    {
      "name": "Sharon Mooney",
      "email": "aliquet.molestie.tellus@google.net",
      "value": "€367.386",
      "address": "1740 Sed Rd.",
      "region": "North-East Region"
    },
    {
      "name": "Zahir Leach",
      "email": "blandit@google.net",
      "value": "€997.343",
      "address": "Ap #961-8395 Non, Avenue",
      "region": "Gangwon"
    },
    {
      "name": "Ruth Barrett",
      "email": "euismod.est@protonmail.net",
      "value": "€1.089.144",
      "address": "3594 In Av.",
      "region": "Toscana"
    },
    {
      "name": "Carter Bush",
      "email": "aliquam@aol.edu",
      "value": "€1.663.434",
      "address": "414-8240 Nisi Rd.",
      "region": "Hessen"
    },
    {
      "name": "Melyssa Mullen",
      "email": "mauris.morbi@icloud.com",
      "value": "€1.108.956",
      "address": "316-3035 Convallis Ave",
      "region": "Davao Region"
    },
    {
      "name": "Noelle Mejia",
      "email": "nunc.mauris.sapien@yahoo.couk",
      "value": "€1.480.332",
      "address": "110-4459 Nam Ave",
      "region": "Noord Brabant"
    },
    {
      "name": "Griffin Davis",
      "email": "sit.amet@outlook.com",
      "value": "€1.174.161",
      "address": "419 Eu St.",
      "region": "Uttarakhand"
    },
    {
      "name": "Aladdin Franco",
      "email": "accumsan.sed.facilisis@outlook.net",
      "value": "€1.642.995",
      "address": "Ap #822-4645 Diam. St.",
      "region": "San José"
    },
    {
      "name": "Elton Anderson",
      "email": "sollicitudin.orci.sem@google.edu",
      "value": "€15.824",
      "address": "Ap #212-9452 Nunc, Rd.",
      "region": "British Columbia"
    },
    {
      "name": "Marsden Bond",
      "email": "adipiscing.lobortis@outlook.couk",
      "value": "€1.740.314",
      "address": "Ap #847-6059 Diam Avenue",
      "region": "Zeeland"
    },
    {
      "name": "Justina Wiggins",
      "email": "enim.mi@icloud.couk",
      "value": "€1.625.943",
      "address": "112-7181 Convallis Rd.",
      "region": "Warmińsko-mazurskie"
    },
    {
      "name": "Aphrodite Wilkerson",
      "email": "in.tempus@yahoo.org",
      "value": "€1.881.282",
      "address": "2534 Magna. Avenue",
      "region": "Ulster"
    },
    {
      "name": "Davis Huber",
      "email": "ornare.egestas.ligula@icloud.ca",
      "value": "€1.972.290",
      "address": "339-9742 Sagittis Ave",
      "region": "Lambayeque"
    },
    {
      "name": "Tatum Reynolds",
      "email": "auctor.velit.eget@icloud.com",
      "value": "€644.276",
      "address": "P.O. Box 392, 9027 Venenatis St.",
      "region": "Gauteng"
    },
    {
      "name": "Jasper Galloway",
      "email": "ut.quam@google.couk",
      "value": "€65.442",
      "address": "2682 Urna, Rd.",
      "region": "Heredia"
    },
    {
      "name": "Gillian Shaw",
      "email": "faucibus.orci.luctus@yahoo.org",
      "value": "€340.107",
      "address": "572-9808 Dictum Ave",
      "region": "North Region"
    },
    {
      "name": "Victoria Hyde",
      "email": "urna.nec@yahoo.couk",
      "value": "€1.253.610",
      "address": "P.O. Box 103, 9391 Dictum Street",
      "region": "Cagayan Valley"
    },
    {
      "name": "Alma Compton",
      "email": "neque.sed@outlook.com",
      "value": "€1.603.242",
      "address": "7223 At, St.",
      "region": "Delhi"
    },
    {
      "name": "Mechelle Wolfe",
      "email": "nibh.phasellus.nulla@hotmail.couk",
      "value": "€1.775.069",
      "address": "Ap #649-7394 Non, Avenue",
      "region": "Valparaíso"
    },
    {
      "name": "Zachery Campbell",
      "email": "velit.in.aliquet@hotmail.org",
      "value": "€1.612.839",
      "address": "479-7857 Euismod Rd.",
      "region": "Nariño"
    },
    {
      "name": "Mason Schneider",
      "email": "eget@yahoo.ca",
      "value": "€802.689",
      "address": "7766 Luctus Road",
      "region": "Nariño"
    },
    {
      "name": "Wang Sargent",
      "email": "curabitur.consequat@outlook.edu",
      "value": "€632.373",
      "address": "Ap #608-2080 Vel Road",
      "region": "Orenburg Oblast"
    },
    {
      "name": "Reuben Brady",
      "email": "vestibulum@aol.net",
      "value": "€1.250.425",
      "address": "P.O. Box 201, 7733 Aliquet. Ave",
      "region": "Soccsksargen"
    },
    {
      "name": "Phelan Fox",
      "email": "duis.volutpat.nunc@hotmail.edu",
      "value": "€267.239",
      "address": "1750 Sem St.",
      "region": "La Libertad"
    },
    {
      "name": "Illana Parrish",
      "email": "consectetuer@google.ca",
      "value": "€1.764.420",
      "address": "8810 Ante. St.",
      "region": "Sląskie"
    },
    {
      "name": "Kimberly Flores",
      "email": "donec.egestas@google.org",
      "value": "€1.602.090",
      "address": "351-7245 Lectus St.",
      "region": "Paraná"
    },
    {
      "name": "Claudia Daniels",
      "email": "in.nec.orci@aol.com",
      "value": "€277.134",
      "address": "102-9066 In St.",
      "region": "Östergötlands län"
    },
    {
      "name": "Deacon Salinas",
      "email": "etiam@hotmail.edu",
      "value": "€612.532",
      "address": "Ap #978-422 Urna, Av.",
      "region": "Metropolitana de Santiago"
    },
    {
      "name": "Noelle Larson",
      "email": "mauris.rhoncus@aol.edu",
      "value": "€1.894.705",
      "address": "Ap #959-3502 In, Av.",
      "region": "Washington"
    },
    {
      "name": "Zachery Heath",
      "email": "sit.amet@google.net",
      "value": "€1.151.306",
      "address": "Ap #247-9555 Commodo St.",
      "region": "North West"
    },
    {
      "name": "Rhona Blackburn",
      "email": "vitae.aliquet@outlook.edu",
      "value": "€744.716",
      "address": "251-3025 Ultrices Ave",
      "region": "Jambi"
    },
    {
      "name": "Dorian Boone",
      "email": "eget@icloud.edu",
      "value": "€642.429",
      "address": "549-1735 Vivamus Rd.",
      "region": "Sachsen"
    },
    {
      "name": "David Roach",
      "email": "id@hotmail.couk",
      "value": "€480.308",
      "address": "5393 Vel, Street",
      "region": "North-East Region"
    },
    {
      "name": "Colton Harmon",
      "email": "mauris.sagittis@hotmail.edu",
      "value": "€799.225",
      "address": "P.O. Box 539, 6683 Vitae Road",
      "region": "South Jeolla"
    },
    {
      "name": "Bernard Kaufman",
      "email": "aliquam.eros.turpis@outlook.edu",
      "value": "€826.373",
      "address": "P.O. Box 232, 9862 Nulla St.",
      "region": "Punjab"
    },
    {
      "name": "Ivory Mclaughlin",
      "email": "erat@protonmail.edu",
      "value": "€884.351",
      "address": "467-6675 Vivamus Rd.",
      "region": "Molise"
    },
    {
      "name": "Ira Gross",
      "email": "proin@aol.com",
      "value": "€320.675",
      "address": "849-8740 Sem St.",
      "region": "Moscow Oblast"
    },
    {
      "name": "Rebekah Mercado",
      "email": "aliquam.adipiscing@icloud.ca",
      "value": "€514.709",
      "address": "5182 Nam Rd.",
      "region": "Oslo"
    },
    {
      "name": "Nyssa Stone",
      "email": "tellus.justo@aol.org",
      "value": "€872.230",
      "address": "934-6215 Diam Rd.",
      "region": "Konya"
    },
    {
      "name": "Guinevere Glenn",
      "email": "a.dui@google.org",
      "value": "€1.982.181",
      "address": "923-2016 Non, Road",
      "region": "Lagos"
    },
    {
      "name": "Quinn Tran",
      "email": "id.blandit@yahoo.com",
      "value": "€315.064",
      "address": "280-4524 Cras Av.",
      "region": "Arica y Parinacota"
    },
    {
      "name": "Nicholas Herman",
      "email": "mi.lacinia.mattis@aol.edu",
      "value": "€1.462.153",
      "address": "Ap #698-3028 Ornare, Av.",
      "region": "Luhansk oblast"
    },
    {
      "name": "Chava Hogan",
      "email": "integer.id.magna@protonmail.com",
      "value": "€1.626.815",
      "address": "2551 Nulla Avenue",
      "region": "Alberta"
    },
    {
      "name": "Clark Dillon",
      "email": "in.at.pede@aol.ca",
      "value": "€1.867.495",
      "address": "602-6960 Cras Ave",
      "region": "Dunbartonshire"
    },
    {
      "name": "Cheryl Bond",
      "email": "sit.amet@icloud.ca",
      "value": "€177.658",
      "address": "5274 Quis St.",
      "region": "Berlin"
    },
    {
      "name": "Tasha Burris",
      "email": "venenatis.a@google.edu",
      "value": "€1.943.597",
      "address": "303-7380 In Av.",
      "region": "Rheinland-Pfalz"
    },
    {
      "name": "Vera Cunningham",
      "email": "enim.nec.tempus@outlook.net",
      "value": "€1.426.673",
      "address": "210-2113 Vivamus Rd.",
      "region": "Balochistan"
    },
    {
      "name": "Warren May",
      "email": "risus.duis@protonmail.net",
      "value": "€1.020.449",
      "address": "683-7269 Interdum Rd.",
      "region": "Connacht"
    },
    {
      "name": "Griffin Wyatt",
      "email": "sodales.nisi.magna@hotmail.net",
      "value": "€684.531",
      "address": "Ap #665-5825 Mi, Street",
      "region": "Queensland"
    },
    {
      "name": "Buckminster Shaffer",
      "email": "dolor.quisque@aol.org",
      "value": "€805.650",
      "address": "434-535 Dolor Road",
      "region": "Lubelskie"
    },
    {
      "name": "Venus Ramos",
      "email": "ornare.lectus@outlook.edu",
      "value": "€1.677.640",
      "address": "Ap #659-3430 Cursus Rd.",
      "region": "West Region"
    },
    {
      "name": "Daria Whitley",
      "email": "mi.tempor@outlook.net",
      "value": "€1.349.166",
      "address": "P.O. Box 781, 4667 Et Ave",
      "region": "Ceuta"
    },
    {
      "name": "Salvador Hatfield",
      "email": "id.enim@google.com",
      "value": "€553.423",
      "address": "1491 Ipsum Ave",
      "region": "Chernivtsi oblast"
    },
    {
      "name": "Jamal Guthrie",
      "email": "libero@aol.org",
      "value": "€610.584",
      "address": "315-4414 Est Street",
      "region": "Zhōngnán"
    },
    {
      "name": "Bo Clay",
      "email": "mollis@yahoo.couk",
      "value": "€657.891",
      "address": "540-7525 Sed Street",
      "region": "North-East Region"
    },
    {
      "name": "Sacha Mason",
      "email": "iaculis.nec@outlook.org",
      "value": "€1.979.778",
      "address": "493-6835 Facilisis Rd.",
      "region": "Michigan"
    },
    {
      "name": "Yoshi Turner",
      "email": "in.ornare@aol.net",
      "value": "€1.320.973",
      "address": "P.O. Box 927, 4548 Enim Road",
      "region": "North Jeolla"
    },
    {
      "name": "Maggy Alston",
      "email": "at.augue.id@outlook.com",
      "value": "€573.797",
      "address": "P.O. Box 537, 8534 Dui. St.",
      "region": "Campania"
    },
    {
      "name": "Dominic Hess",
      "email": "erat.neque@aol.couk",
      "value": "€934.508",
      "address": "P.O. Box 465, 4721 Dictum Rd.",
      "region": "Ulster"
    },
    {
      "name": "Christian Hawkins",
      "email": "sem.pellentesque@hotmail.com",
      "value": "€45.173",
      "address": "Ap #806-101 Porttitor Road",
      "region": "Stockholms län"
    },
    {
      "name": "Hillary Reed",
      "email": "aliquam.nec@hotmail.edu",
      "value": "€1.563.888",
      "address": "2975 Cubilia Av.",
      "region": "San José"
    }
  ];

  dataValueName: any = [
      {
          "value": "€1.269.709",
          "name": "Garth Henry"
      },
      {
          "value": "€1.662.841",
          "name": "Barry Moss"
      },
      {
          "value": "€399.442",
          "name": "Catherine Bishop"
      },
      {
          "value": "€314.212",
          "name": "Jarrod Stafford"
      },
      {
          "value": "€1.474.549",
          "name": "Sierra Tate"
      },
      {
          "value": "€1.465.796",
          "name": "Tanya Coleman"
      },
      {
          "value": "€1.165.195",
          "name": "Gregory Harrington"
      },
      {
          "value": "€280.848",
          "name": "Pandora Fowler"
      },
      {
          "value": "€1.492.819",
          "name": "Jenette Golden"
      },
      {
          "value": "€1.087.818",
          "name": "Uriel Cobb"
      },
      {
          "value": "€258.262",
          "name": "Dillon Colon"
      },
      {
          "value": "€733.477",
          "name": "Clio Parks"
      },
      {
          "value": "€926.646",
          "name": "Gloria Bowen"
      },
      {
          "value": "€768.480",
          "name": "Cyrus Bowen"
      },
      {
          "value": "€1.141.024",
          "name": "Joan Day"
      },
      {
          "value": "€349.212",
          "name": "Perry Keller"
      },
      {
          "value": "€1.442.241",
          "name": "Wing Tyson"
      },
      {
          "value": "€869.539",
          "name": "Brian Stanton"
      },
      {
          "value": "€676.031",
          "name": "Ella Mccormick"
      },
      {
          "value": "€1.984.383",
          "name": "Clinton Neal"
      },
      {
          "value": "€222.862",
          "name": "Timon Hayes"
      },
      {
          "value": "€215.224",
          "name": "Molly Booth"
      },
      {
          "value": "€1.833.942",
          "name": "Brennan Grant"
      },
      {
          "value": "€1.047.717",
          "name": "Vance Dixon"
      },
      {
          "value": "€1.066.199",
          "name": "Russell Madden"
      },
      {
          "value": "€1.365.399",
          "name": "Lysandra Rogers"
      },
      {
          "value": "€512.437",
          "name": "Seth Daugherty"
      },
      {
          "value": "€1.897.949",
          "name": "Chiquita Tillman"
      },
      {
          "value": "€1.222.156",
          "name": "Mufutau Holland"
      },
      {
          "value": "€875.298",
          "name": "Kaitlin Nelson"
      },
      {
          "value": "€200.194",
          "name": "Chaim Stanton"
      },
      {
          "value": "€1.480.650",
          "name": "Heidi Bentley"
      },
      {
          "value": "€658.323",
          "name": "Joan Bolton"
      },
      {
          "value": "€439.480",
          "name": "Dane Young"
      },
      {
          "value": "€1.665.882",
          "name": "Yasir Travis"
      },
      {
          "value": "€329.754",
          "name": "Nomlanga Robertson"
      },
      {
          "value": "€459.704",
          "name": "Daria Levy"
      },
      {
          "value": "€1.187.686",
          "name": "Cassandra Sweeney"
      },
      {
          "value": "€1.691.635",
          "name": "Nita Warren"
      },
      {
          "value": "€367.386",
          "name": "Sharon Mooney"
      },
      {
          "value": "€997.343",
          "name": "Zahir Leach"
      },
      {
          "value": "€1.089.144",
          "name": "Ruth Barrett"
      },
      {
          "value": "€1.663.434",
          "name": "Carter Bush"
      },
      {
          "value": "€1.108.956",
          "name": "Melyssa Mullen"
      },
      {
          "value": "€1.480.332",
          "name": "Noelle Mejia"
      },
      {
          "value": "€1.174.161",
          "name": "Griffin Davis"
      },
      {
          "value": "€1.642.995",
          "name": "Aladdin Franco"
      },
      {
          "value": "€15.824",
          "name": "Elton Anderson"
      },
      {
          "value": "€1.740.314",
          "name": "Marsden Bond"
      },
      {
          "value": "€1.625.943",
          "name": "Justina Wiggins"
      },
      {
          "value": "€1.881.282",
          "name": "Aphrodite Wilkerson"
      },
      {
          "value": "€1.972.290",
          "name": "Davis Huber"
      },
      {
          "value": "€644.276",
          "name": "Tatum Reynolds"
      },
      {
          "value": "€65.442",
          "name": "Jasper Galloway"
      },
      {
          "value": "€340.107",
          "name": "Gillian Shaw"
      },
      {
          "value": "€1.253.610",
          "name": "Victoria Hyde"
      },
      {
          "value": "€1.603.242",
          "name": "Alma Compton"
      },
      {
          "value": "€1.775.069",
          "name": "Mechelle Wolfe"
      },
      {
          "value": "€1.612.839",
          "name": "Zachery Campbell"
      },
      {
          "value": "€802.689",
          "name": "Mason Schneider"
      },
      {
          "value": "€632.373",
          "name": "Wang Sargent"
      },
      {
          "value": "€1.250.425",
          "name": "Reuben Brady"
      },
      {
          "value": "€267.239",
          "name": "Phelan Fox"
      },
      {
          "value": "€1.764.420",
          "name": "Illana Parrish"
      },
      {
          "value": "€1.602.090",
          "name": "Kimberly Flores"
      },
      {
          "value": "€277.134",
          "name": "Claudia Daniels"
      },
      {
          "value": "€612.532",
          "name": "Deacon Salinas"
      },
      {
          "value": "€1.894.705",
          "name": "Noelle Larson"
      },
      {
          "value": "€1.151.306",
          "name": "Zachery Heath"
      },
      {
          "value": "€744.716",
          "name": "Rhona Blackburn"
      },
      {
          "value": "€642.429",
          "name": "Dorian Boone"
      },
      {
          "value": "€480.308",
          "name": "David Roach"
      },
      {
          "value": "€799.225",
          "name": "Colton Harmon"
      },
      {
          "value": "€826.373",
          "name": "Bernard Kaufman"
      },
      {
          "value": "€884.351",
          "name": "Ivory Mclaughlin"
      },
      {
          "value": "€320.675",
          "name": "Ira Gross"
      },
      {
          "value": "€514.709",
          "name": "Rebekah Mercado"
      },
      {
          "value": "€872.230",
          "name": "Nyssa Stone"
      },
      {
          "value": "€1.982.181",
          "name": "Guinevere Glenn"
      },
      {
          "value": "€315.064",
          "name": "Quinn Tran"
      },
      {
          "value": "€1.462.153",
          "name": "Nicholas Herman"
      },
      {
          "value": "€1.626.815",
          "name": "Chava Hogan"
      },
      {
          "value": "€1.867.495",
          "name": "Clark Dillon"
      },
      {
          "value": "€177.658",
          "name": "Cheryl Bond"
      },
      {
          "value": "€1.943.597",
          "name": "Tasha Burris"
      },
      {
          "value": "€1.426.673",
          "name": "Vera Cunningham"
      },
      {
          "value": "€1.020.449",
          "name": "Warren May"
      },
      {
          "value": "€684.531",
          "name": "Griffin Wyatt"
      },
      {
          "value": "€805.650",
          "name": "Buckminster Shaffer"
      },
      {
          "value": "€1.677.640",
          "name": "Venus Ramos"
      },
      {
          "value": "€1.349.166",
          "name": "Daria Whitley"
      },
      {
          "value": "€553.423",
          "name": "Salvador Hatfield"
      },
      {
          "value": "€610.584",
          "name": "Jamal Guthrie"
      },
      {
          "value": "€657.891",
          "name": "Bo Clay"
      },
      {
          "value": "€1.979.778",
          "name": "Sacha Mason"
      },
      {
          "value": "€1.320.973",
          "name": "Yoshi Turner"
      },
      {
          "value": "€573.797",
          "name": "Maggy Alston"
      },
      {
          "value": "€934.508",
          "name": "Dominic Hess"
      },
      {
          "value": "€45.173",
          "name": "Christian Hawkins"
      },
      {
          "value": "€1.563.888",
          "name": "Hillary Reed"
      }
  ];

}

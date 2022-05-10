import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  data: any[] = [
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

  dataValueName: any[] = [
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

  dataEmployee: any[] = [
    {
      "_id": "627aa0ad16eff7b66ba0295f",
      "index": 0,
      "guid": "7abf6ba9-9566-4572-89d3-0e72b78c79cb",
      "isActive": true,
      "balance": "1,435.29",
      "age": 23,
      "eyeColor": "blue",
      "name": "Brown Booth",
      "gender": "male",
      "company": "TRIBALOG",
      "country": "WESTERN SAHARA",
      "email": "brownbooth@tribalog.com",
      "phone": "+1 (978) 536-3934",
      "address": "352 Box Street, Crisman, Alabama, 3084",
      "registered": "2021-05-23T05:56:13 -02:00",
      "latitude": 64.71298,
      "longitude": 52.510211,
      "tags": [
        "deserunt",
        "est",
        "non",
        "id",
        "officia",
        "proident",
        "labore"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "1,267.68"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "2,991.86"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "1,705.30"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "1,996.55"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "1,243.24"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,141.49"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,855.51"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "3,826.50"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "2,401.01"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "1,803.76"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "1,551.84"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "3,781.36"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lucas Monroe"
        },
        {
          "id": 1,
          "name": "Spence Wiley"
        },
        {
          "id": 2,
          "name": "Roseann Schroeder"
        }
      ],
      "favoriteFruit": "Bananen"
    },
    {
      "_id": "627aa0adb1daf57e29fe5eb7",
      "index": 1,
      "guid": "3380359e-006a-45ea-a70c-2521c6266453",
      "isActive": false,
      "balance": "2,221.81",
      "age": 38,
      "eyeColor": "green",
      "name": "Duran Osborn",
      "gender": "male",
      "company": "NEBULEAN",
      "country": "NEW ZEALAND",
      "email": "duranosborn@nebulean.com",
      "phone": "+1 (955) 498-3220",
      "address": "260 Lois Avenue, Marbury, Michigan, 5627",
      "registered": "2019-05-09T01:45:16 -02:00",
      "latitude": 38.175014,
      "longitude": 178.064,
      "tags": [
        "non",
        "dolor",
        "officia",
        "sit",
        "culpa",
        "ullamco",
        "laborum"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,456.68"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "1,853.25"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "1,661.15"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "1,150.11"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "1,586.38"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "1,971.69"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "2,219.77"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "3,274.39"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,284.39"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,410.48"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "2,780.17"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "3,146.10"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Debra Roy"
        },
        {
          "id": 1,
          "name": "Mcmahon Fowler"
        },
        {
          "id": 2,
          "name": "Gina Nunez"
        }
      ],
      "favoriteFruit": "Bananen"
    },
    {
      "_id": "627aa0ad024f506e6bf08bdc",
      "index": 2,
      "guid": "86451e57-5b01-4891-bd4b-91df93e00669",
      "isActive": true,
      "balance": "1,539.27",
      "age": 20,
      "eyeColor": "brown",
      "name": "Park Fisher",
      "gender": "male",
      "company": "GEEKOLA",
      "country": "OMAN",
      "email": "parkfisher@geekola.com",
      "phone": "+1 (918) 593-3025",
      "address": "672 Eckford Street, Barstow, Colorado, 9554",
      "registered": "2022-02-13T11:08:02 -01:00",
      "latitude": -35.282009,
      "longitude": 108.590647,
      "tags": [
        "voluptate",
        "proident",
        "elit",
        "est",
        "nostrud",
        "nisi",
        "pariatur"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,527.13"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "2,852.59"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "2,878.39"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "1,359.94"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "1,085.63"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "1,898.14"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,796.86"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "2,803.32"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,743.46"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "1,860.62"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "1,133.46"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "3,838.82"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Pace Mathis"
        },
        {
          "id": 1,
          "name": "Barlow Patton"
        },
        {
          "id": 2,
          "name": "Melanie Mccall"
        }
      ],
      "favoriteFruit": "Erdbeeren"
    },
    {
      "_id": "627aa0ad6470d837a1c6eb0b",
      "index": 3,
      "guid": "b77249f5-f370-4bff-a7a8-f82c68bcf074",
      "isActive": true,
      "balance": "3,179.28",
      "age": 20,
      "eyeColor": "blue",
      "name": "Mandy Daniel",
      "gender": "female",
      "company": "BRAINCLIP",
      "country": "LITHUANIA",
      "email": "mandydaniel@brainclip.com",
      "phone": "+1 (943) 442-2828",
      "address": "569 Tilden Avenue, Barronett, Guam, 7728",
      "registered": "2021-02-16T05:50:25 -01:00",
      "latitude": 35.541623,
      "longitude": -111.988435,
      "tags": [
        "laboris",
        "mollit",
        "minim",
        "nisi",
        "id",
        "consectetur",
        "consectetur"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,129.91"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "3,636.51"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "3,107.40"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "3,791.88"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "2,930.11"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,229.22"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,013.89"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "3,589.72"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,276.70"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,581.75"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "1,070.28"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "2,529.45"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Estes Foreman"
        },
        {
          "id": 1,
          "name": "Dejesus Bruce"
        },
        {
          "id": 2,
          "name": "Miriam Davis"
        }
      ],
      "favoriteFruit": "Bananen"
    },
    {
      "_id": "627aa0ad52c77c65a3aa0052",
      "index": 4,
      "guid": "cc5b9c6e-e509-452b-b234-5076b9062a8f",
      "isActive": false,
      "balance": "3,881.53",
      "age": 39,
      "eyeColor": "green",
      "name": "Barker Allison",
      "gender": "male",
      "company": "ZILLATIDE",
      "country": "TRINIDAD AND TOBAGO",
      "email": "barkerallison@zillatide.com",
      "phone": "+1 (834) 489-2154",
      "address": "596 Vanderveer Place, Dargan, Missouri, 9287",
      "registered": "2021-02-05T06:57:59 -01:00",
      "latitude": 47.434072,
      "longitude": -145.040475,
      "tags": [
        "dolor",
        "irure",
        "non",
        "anim",
        "sit",
        "ipsum",
        "Lorem"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,641.63"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "3,775.09"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "2,493.83"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "2,114.54"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "1,882.85"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,284.22"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,294.37"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "2,337.88"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,865.84"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "2,190.02"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "1,347.93"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "2,258.42"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Ayers Melendez"
        },
        {
          "id": 1,
          "name": "Kramer Barry"
        },
        {
          "id": 2,
          "name": "Marissa Franklin"
        }
      ],
      "favoriteFruit": "Apfel"
    },
    {
      "_id": "627aa0ad512b6059ee55f879",
      "index": 5,
      "guid": "7b65ba72-9993-4cb9-ae86-2c635a5f7c70",
      "isActive": false,
      "balance": "2,489.02",
      "age": 32,
      "eyeColor": "blue",
      "name": "Crawford Boone",
      "gender": "male",
      "company": "ROUGHIES",
      "country": "VANUATU",
      "email": "crawfordboone@roughies.com",
      "phone": "+1 (941) 505-3385",
      "address": "709 Emerald Street, Bladensburg, North Carolina, 9576",
      "registered": "2019-02-21T02:22:41 -01:00",
      "latitude": 54.905326,
      "longitude": 128.557572,
      "tags": [
        "elit",
        "anim",
        "aute",
        "eu",
        "eu",
        "in",
        "eiusmod"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "3,368.36"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "1,036.19"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "3,847.28"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "2,313.68"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "2,555.06"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,920.63"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,830.46"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "1,721.43"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "3,010.04"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "2,487.32"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "3,255.01"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "1,140.30"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Williamson Valdez"
        },
        {
          "id": 1,
          "name": "Lindsay Stafford"
        },
        {
          "id": 2,
          "name": "Pearlie Alvarado"
        }
      ],
      "favoriteFruit": "Apfel"
    },
    {
      "_id": "627aa0add9c1803beb1fb274",
      "index": 6,
      "guid": "486073d9-b68d-4748-bf35-2d5200c81b70",
      "isActive": true,
      "balance": "2,271.97",
      "age": 36,
      "eyeColor": "brown",
      "name": "Rogers Berger",
      "gender": "male",
      "company": "MONDICIL",
      "country": "SYRIA",
      "email": "rogersberger@mondicil.com",
      "phone": "+1 (874) 474-3582",
      "address": "957 Elliott Walk, Babb, Montana, 5886",
      "registered": "2018-12-19T03:52:28 -01:00",
      "latitude": 50.442734,
      "longitude": 23.223244,
      "tags": [
        "qui",
        "voluptate",
        "anim",
        "pariatur",
        "eu",
        "qui",
        "proident"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "3,736.24"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "2,261.25"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "1,170.31"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "1,447.01"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "3,244.47"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,758.12"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "2,783.42"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "2,237.59"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "2,141.04"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,558.69"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "1,410.82"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "3,086.49"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Arnold Roth"
        },
        {
          "id": 1,
          "name": "Nieves Parks"
        },
        {
          "id": 2,
          "name": "Rivers Willis"
        }
      ],
      "favoriteFruit": "Bananen"
    },
    {
      "_id": "627aa0ad017080ed4ddfa790",
      "index": 7,
      "guid": "973718b1-84d9-49fa-8b9a-7127a3921347",
      "isActive": false,
      "balance": "3,591.66",
      "age": 33,
      "eyeColor": "blue",
      "name": "Gill Newton",
      "gender": "male",
      "company": "NORSUL",
      "country": "BRITISH INDIAN OCEAN TERRITORY",
      "email": "gillnewton@norsul.com",
      "phone": "+1 (853) 579-3361",
      "address": "307 Duryea Place, Helen, Delaware, 1953",
      "registered": "2016-10-09T10:17:30 -02:00",
      "latitude": 67.064788,
      "longitude": 6.296327,
      "tags": [
        "occaecat",
        "velit",
        "cupidatat",
        "laborum",
        "velit",
        "esse",
        "minim"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,614.87"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "2,585.08"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "1,782.35"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "3,821.03"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "3,413.91"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,788.45"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "2,358.20"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "2,142.37"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "3,300.20"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "2,628.22"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "3,247.59"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "2,005.30"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Delacruz Mckee"
        },
        {
          "id": 1,
          "name": "Gale Fletcher"
        },
        {
          "id": 2,
          "name": "Clarissa Solis"
        }
      ],
      "favoriteFruit": "Bananen"
    },
    {
      "_id": "627aa0ad708295f64be59b7e",
      "index": 8,
      "guid": "0528b035-dbe4-4bb1-b70f-984ecc896fe1",
      "isActive": false,
      "balance": "2,745.52",
      "age": 25,
      "eyeColor": "brown",
      "name": "David Crosby",
      "gender": "male",
      "company": "TERRAGO",
      "country": "NORTHERN MARIANA ISLANDS",
      "email": "davidcrosby@terrago.com",
      "phone": "+1 (898) 511-2061",
      "address": "944 Heath Place, Chilton, Idaho, 4497",
      "registered": "2015-12-15T08:09:47 -01:00",
      "latitude": 67.442871,
      "longitude": -159.41124,
      "tags": [
        "officia",
        "id",
        "ut",
        "proident",
        "proident",
        "proident",
        "ullamco"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "2,278.68"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "2,794.02"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "3,714.87"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "1,928.22"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "2,243.27"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "3,481.62"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "1,213.69"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "3,430.55"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,901.78"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,682.76"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "3,889.62"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "1,354.90"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Vera Jimenez"
        },
        {
          "id": 1,
          "name": "Jocelyn Garrett"
        },
        {
          "id": 2,
          "name": "Snyder Berry"
        }
      ],
      "favoriteFruit": "Apfel"
    },
    {
      "_id": "627aa0ad0783de380692ab2f",
      "index": 9,
      "guid": "b76cde8e-39a8-4f94-b55c-a1fa8a87d089",
      "isActive": false,
      "balance": "3,375.08",
      "age": 32,
      "eyeColor": "brown",
      "name": "Noble Harris",
      "gender": "male",
      "company": "ICOLOGY",
      "country": "NIGER",
      "email": "nobleharris@icology.com",
      "phone": "+1 (881) 579-2104",
      "address": "401 Johnson Avenue, Campo, Indiana, 8291",
      "registered": "2014-03-13T01:23:16 -01:00",
      "latitude": -35.162525,
      "longitude": 178.522842,
      "tags": [
        "sint",
        "consectetur",
        "sunt",
        "quis",
        "reprehenderit",
        "minim",
        "voluptate"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "3,936.74"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "3,795.80"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "3,694.39"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "2,947.85"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "2,662.55"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "2,576.98"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "3,735.87"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "1,389.89"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "1,791.73"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,101.20"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "2,247.89"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "1,157.18"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Villarreal Hooper"
        },
        {
          "id": 1,
          "name": "Lois Albert"
        },
        {
          "id": 2,
          "name": "Ochoa Hamilton"
        }
      ],
      "favoriteFruit": "Apfel"
    },
    {
      "_id": "627aa0ad0de5f1b480259d3d",
      "index": 10,
      "guid": "07715b2b-52fb-463c-a335-479ecdf6fdf3",
      "isActive": false,
      "balance": "3,456.92",
      "age": 36,
      "eyeColor": "brown",
      "name": "Pierce Henson",
      "gender": "male",
      "company": "IPLAX",
      "country": "NEW CALEDONIA",
      "email": "piercehenson@iplax.com",
      "phone": "+1 (878) 409-2999",
      "address": "985 Vine Street, Cutter, Arkansas, 2475",
      "registered": "2016-12-22T03:09:28 -01:00",
      "latitude": 75.535674,
      "longitude": -15.1293,
      "tags": [
        "Lorem",
        "ut",
        "dolore",
        "eiusmod",
        "do",
        "culpa",
        "velit"
      ],
      "sales": [
        {
          "id": 0,
          "month": "Januar",
          "sale": "3,855.08"
        },
        {
          "id": 1,
          "month": "Februar",
          "sale": "1,948.96"
        },
        {
          "id": 2,
          "month": "März",
          "sale": "1,478.60"
        },
        {
          "id": 3,
          "month": "April",
          "sale": "2,444.07"
        },
        {
          "id": 4,
          "month": "Mai",
          "sale": "2,869.93"
        },
        {
          "id": 5,
          "month": "Juni",
          "sale": "2,786.47"
        },
        {
          "id": 6,
          "month": "Juli",
          "sale": "3,062.14"
        },
        {
          "id": 7,
          "month": "August",
          "sale": "3,139.71"
        },
        {
          "id": 8,
          "month": "September",
          "sale": "3,584.77"
        },
        {
          "id": 9,
          "month": "Oktober",
          "sale": "3,129.75"
        },
        {
          "id": 10,
          "month": "November",
          "sale": "2,380.18"
        },
        {
          "id": 11,
          "month": "Dezember",
          "sale": "1,542.27"
        }
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sonja Ayers"
        },
        {
          "id": 1,
          "name": "Olson Kaufman"
        },
        {
          "id": 2,
          "name": "Donaldson Garcia"
        }
      ],
      "favoriteFruit": "Erdbeeren"
    }
  ];

  dataCountries: any[] = [
    {
      "_id": "627aa1260bc8399a6f186c69",
      "index": 0,
      "guid": "5c70c700-6d41-4026-aced-65c22da0e6ab",
      "balance": "1,540,240,018.67",
      "president": "Jewel Rodriguez",
      "gender": "female",
      "companies": 20981,
      "country": "MAYOTTE"
    },
    {
      "_id": "627aa126a9492fdd0720c215",
      "index": 1,
      "guid": "95c07fd2-5979-4fa3-94d0-c2fdf7ab63e4",
      "balance": "3,761,156,399.46",
      "president": "Ramsey Battle",
      "gender": "male",
      "companies": 21990,
      "country": "GUATEMALA"
    },
    {
      "_id": "627aa126fd5dd9bc3de65afa",
      "index": 2,
      "guid": "bdf79074-e8c8-4131-a2ee-9143c39bd131",
      "balance": "1,063,964,422.34",
      "president": "Earnestine Kaufman",
      "gender": "female",
      "companies": 15910,
      "country": "ROMANIA"
    },
    {
      "_id": "627aa126f72ffd7cfac12d46",
      "index": 3,
      "guid": "9b549e8e-7444-4e40-a8ba-b7da870e962b",
      "balance": "674,890,273.95",
      "president": "Osborne Cain",
      "gender": "male",
      "companies": 6959,
      "country": "LEBANON"
    },
    {
      "_id": "627aa12653a1f8fb1d3fc5e3",
      "index": 4,
      "guid": "24a04510-9d89-45ca-b2d4-5ad3ccc681e6",
      "balance": "3,121,566,279.71",
      "president": "Dana May",
      "gender": "female",
      "companies": 7071,
      "country": "URUGUAY"
    },
    {
      "_id": "627aa1261b9da180a5d4b8b2",
      "index": 5,
      "guid": "9871c382-f3f4-4a08-85be-a00d57b79fef",
      "balance": "903,348,480.75",
      "president": "Acevedo Lang",
      "gender": "male",
      "companies": 41567,
      "country": "GERMANY"
    },
    {
      "_id": "627aa1261953d03ff4c779e8",
      "index": 6,
      "guid": "53d6d02f-ad1e-4178-bba9-cb903841c5f2",
      "balance": "2,035,459,806.19",
      "president": "Judy Montgomery",
      "gender": "female",
      "companies": 18504,
      "country": "SINGAPORE"
    },
    {
      "_id": "627aa126489794126e526ea2",
      "index": 7,
      "guid": "e39f3a8c-413d-4b9a-a950-efbd636c5aeb",
      "balance": "32,401,106.38",
      "president": "Tamera Soto",
      "gender": "female",
      "companies": 47340,
      "country": "MOZAMBIQUE"
    },
    {
      "_id": "627aa126a4707f5e7c4627f6",
      "index": 8,
      "guid": "ae8a0693-6f07-4364-b1f6-7b5e14d11a3d",
      "balance": "2,816,861,053.56",
      "president": "Kirby Pittman",
      "gender": "male",
      "companies": 35821,
      "country": "CYPRUS"
    },
    {
      "_id": "627aa126d974c6bb1bd5fd50",
      "index": 9,
      "guid": "03839018-ff78-411b-ab9e-8f363b8d8c89",
      "balance": "2,294,965,591.92",
      "president": "Powell Cohen",
      "gender": "male",
      "companies": 11756,
      "country": "SWITZERLAND"
    },
    {
      "_id": "627aa126767926b639b7cd50",
      "index": 10,
      "guid": "ba434921-1807-458e-8b9f-21c8ba9f2a7a",
      "balance": "2,545,100,437.52",
      "president": "Marianne Mason",
      "gender": "female",
      "companies": 17900,
      "country": "ESTONIA"
    },
    {
      "_id": "627aa1266938b789f32b63c3",
      "index": 11,
      "guid": "e03e833c-d68e-4fdc-a4c0-c3cc245d37db",
      "balance": "1,925,549,484.12",
      "president": "Knapp Butler",
      "gender": "male",
      "companies": 22026,
      "country": "PALAU"
    },
    {
      "_id": "627aa1262e61d0ef4d64ead2",
      "index": 12,
      "guid": "2afa9b65-0dc9-4e13-bbe3-e5c5ca5363ab",
      "balance": "3,525,121,692.52",
      "president": "Elvia Estes",
      "gender": "female",
      "companies": 37746,
      "country": "CUBA"
    },
    {
      "_id": "627aa126deb8a3d75bfbc9eb",
      "index": 13,
      "guid": "c1f03de2-82e2-45e3-84fd-11ba3d43487a",
      "balance": "1,380,520,923.97",
      "president": "Kelley Stevenson",
      "gender": "male",
      "companies": 22219,
      "country": "MACAU"
    },
    {
      "_id": "627aa126f494b126272dbcb6",
      "index": 14,
      "guid": "0d264879-a536-4d0d-8fcd-a3993b8db303",
      "balance": "2,635,477,613.10",
      "president": "Tran Bell",
      "gender": "male",
      "companies": 16440,
      "country": "SUDAN"
    },
    {
      "_id": "627aa12656848d1fba54fe10",
      "index": 15,
      "guid": "7a6450c9-e6da-4c02-9ca7-94bef4a42d0c",
      "balance": "645,832,019.39",
      "president": "Jefferson Schmidt",
      "gender": "male",
      "companies": 41450,
      "country": "CAYMAN ISLANDS"
    },
    {
      "_id": "627aa1264b7202bfd57b3614",
      "index": 16,
      "guid": "af0ea5e0-5b5e-48e1-b882-c52e26835929",
      "balance": "2,423,535,772.24",
      "president": "Gail Scott",
      "gender": "female",
      "companies": 28328,
      "country": "FRENCH POLYNESIA"
    },
    {
      "_id": "627aa126ccd27dbf5f5946d4",
      "index": 17,
      "guid": "e5453a73-dbab-4da3-b0c3-e434f3863270",
      "balance": "1,341,185,813.41",
      "president": "Guerrero Ramirez",
      "gender": "male",
      "companies": 41987,
      "country": "TOKELAU"
    },
    {
      "_id": "627aa126f678a7c1630854be",
      "index": 18,
      "guid": "5a4eb45e-6026-4311-a46b-bb5eb732344e",
      "balance": "630,246,009.56",
      "president": "Candace Garza",
      "gender": "female",
      "companies": 47988,
      "country": "ENGLAND"
    },
    {
      "_id": "627aa126562ffe841db292f3",
      "index": 19,
      "guid": "c5bbe51e-b14a-4d80-8e12-bd26f811da22",
      "balance": "3,888,058,981.25",
      "president": "Whitehead Browning",
      "gender": "male",
      "companies": 41861,
      "country": "CHINA"
    },
    {
      "_id": "627aa12605b0425cd903d210",
      "index": 20,
      "guid": "2b9f8e73-6185-457a-b54e-acf4fca0dc5a",
      "balance": "3,472,636,097.63",
      "president": "Harrell Walsh",
      "gender": "male",
      "companies": 30819,
      "country": "ZAMBIA"
    },
    {
      "_id": "627aa126b86516152016bd84",
      "index": 21,
      "guid": "fa899ae1-3a4c-478e-afac-55b045b7034d",
      "balance": "107,181,566.14",
      "president": "Patrica Hernandez",
      "gender": "female",
      "companies": 13109,
      "country": "TAIWAN"
    },
    {
      "_id": "627aa126aef334f5db8d9c26",
      "index": 22,
      "guid": "896be20e-c149-4cf8-a9fc-d748e704762d",
      "balance": "2,022,741,021.81",
      "president": "Morris Marsh",
      "gender": "male",
      "companies": 1394,
      "country": "BOUVET ISLAND"
    },
    {
      "_id": "627aa126a9c81f156b0113d8",
      "index": 23,
      "guid": "bb756f52-f989-4fc1-923a-ce2373750345",
      "balance": "240,594,184.69",
      "president": "Tameka Cooley",
      "gender": "female",
      "companies": 9794,
      "country": "SEYCHELLES"
    },
    {
      "_id": "627aa1267ac9438ee420e201",
      "index": 24,
      "guid": "b608accc-f67f-4901-bb64-c3b8bd6cc3d5",
      "balance": "542,458,477.35",
      "president": "May Hines",
      "gender": "male",
      "companies": 15847,
      "country": "NORWAY"
    },
    {
      "_id": "627aa12683cea52326b38b5a",
      "index": 25,
      "guid": "28a116c8-07f9-44b2-a41f-10a7801c183e",
      "balance": "1,755,064,934.37",
      "president": "Hodge Cash",
      "gender": "male",
      "companies": 21121,
      "country": "MACEDONIA"
    },
    {
      "_id": "627aa126bdd192bbb59113b3",
      "index": 26,
      "guid": "d27ec6f6-49bf-49db-af56-c0fe9794b320",
      "balance": "931,651,672.06",
      "president": "Becky Burke",
      "gender": "female",
      "companies": 23823,
      "country": "SLOVENIA"
    },
    {
      "_id": "627aa126dc8fb821831443fb",
      "index": 27,
      "guid": "025bf71e-fc2d-4b87-ab7c-97649d837ef9",
      "balance": "3,261,802,610.57",
      "president": "Yvonne Britt",
      "gender": "female",
      "companies": 29644,
      "country": "LIECHTENSTEIN"
    },
    {
      "_id": "627aa126979d3b9e61ab8ee3",
      "index": 28,
      "guid": "01a09807-abd9-48b0-a934-22d68dbbd0ed",
      "balance": "1,419,395,801.32",
      "president": "Velazquez Whitney",
      "gender": "male",
      "companies": 30872,
      "country": "RWANDA"
    },
    {
      "_id": "627aa12671ba0f0b76b68081",
      "index": 29,
      "guid": "5ab6b628-30bb-4a55-917d-fe5415dbd310",
      "balance": "3,798,890,298.71",
      "president": "Heath Bishop",
      "gender": "male",
      "companies": 13753,
      "country": "LIBERIA"
    },
    {
      "_id": "627aa1265a933d393ce953d9",
      "index": 30,
      "guid": "8465f5c4-f43f-41e0-8b66-247038684e78",
      "balance": "1,517,485,357.25",
      "president": "Letitia Montoya",
      "gender": "female",
      "companies": 35839,
      "country": "PUERTO RICO"
    },
    {
      "_id": "627aa126b1955dd63cc84460",
      "index": 31,
      "guid": "4152757f-f791-4177-a712-31476bb1c8e7",
      "balance": "1,694,898,982.19",
      "president": "Yesenia Haney",
      "gender": "female",
      "companies": 29415,
      "country": "COOK ISLANDS"
    },
    {
      "_id": "627aa12677304ad4ed58128c",
      "index": 32,
      "guid": "29d6f0b5-b492-4832-855a-e6262db5283e",
      "balance": "1,084,802,332.49",
      "president": "Snow Simmons",
      "gender": "male",
      "companies": 49165,
      "country": "PHILIPPINES"
    },
    {
      "_id": "627aa126f58f90746c3bd852",
      "index": 33,
      "guid": "7a5d300c-a79e-429b-b082-c734e98664c4",
      "balance": "1,402,893,832.92",
      "president": "Brewer Whitfield",
      "gender": "male",
      "companies": 5847,
      "country": "LUXEMBOURG"
    },
    {
      "_id": "627aa12630c8950b5910f35f",
      "index": 34,
      "guid": "ad4c68ff-0df4-47d5-b00c-414a1a08195d",
      "balance": "2,123,413,629.18",
      "president": "Morton Bray",
      "gender": "male",
      "companies": 43465,
      "country": "SLOVAK REPUBLIC"
    },
    {
      "_id": "627aa126a043469b2ce8d977",
      "index": 35,
      "guid": "14d9e76c-5a5d-4bef-8175-58b36bfb86fc",
      "balance": "983,837,977.72",
      "president": "Cole Merrill",
      "gender": "male",
      "companies": 3219,
      "country": "ARMENIA"
    },
    {
      "_id": "627aa126c9e28c980baa5beb",
      "index": 36,
      "guid": "72c12da2-d2ed-49e6-9c34-212523f9bdd6",
      "balance": "1,816,569,226.29",
      "president": "Powers Ingram",
      "gender": "male",
      "companies": 17142,
      "country": "TUNISIA"
    },
    {
      "_id": "627aa1266097b9f1b65c8881",
      "index": 37,
      "guid": "8e7e7be5-3965-4c52-8916-ef82d9b87f17",
      "balance": "1,399,572,812.47",
      "president": "Jane Dorsey",
      "gender": "female",
      "companies": 4512,
      "country": "CHAD"
    },
    {
      "_id": "627aa12658983d77c47c4d64",
      "index": 38,
      "guid": "af4678c9-48c6-4e06-8d66-026f5eca376c",
      "balance": "3,612,063,261.01",
      "president": "Beth Quinn",
      "gender": "female",
      "companies": 496,
      "country": "UGANDA"
    },
    {
      "_id": "627aa126eae82effcc97ee05",
      "index": 39,
      "guid": "aedaeb3d-f6ed-45a3-8ac9-045c46907f54",
      "balance": "2,900,361,700.03",
      "president": "Lina Foreman",
      "gender": "female",
      "companies": 42434,
      "country": "MONTSERRAT"
    },
    {
      "_id": "627aa1268c9e4bbff6b0508a",
      "index": 40,
      "guid": "6b9f98cf-3fbd-49e8-a197-f02bb7965e06",
      "balance": "3,509,400,286.66",
      "president": "Mejia Cobb",
      "gender": "male",
      "companies": 37092,
      "country": "MOROCCO"
    },
    {
      "_id": "627aa126efe17ab5dc8351be",
      "index": 41,
      "guid": "a11a4e20-4fc3-4e2d-8038-417a636908d1",
      "balance": "1,278,050,915.46",
      "president": "Mills Lawrence",
      "gender": "male",
      "companies": 39687,
      "country": "SENEGAL"
    },
    {
      "_id": "627aa126ade8d6ef723bdfcf",
      "index": 42,
      "guid": "7cd13c19-547f-4283-bef3-2ceac955bdfc",
      "balance": "887,267,320.60",
      "president": "Robertson Stephens",
      "gender": "male",
      "companies": 24913,
      "country": "VIRGIN ISLANDS (US)"
    },
    {
      "_id": "627aa12620970540d7c66b07",
      "index": 43,
      "guid": "3c6781c4-e7c9-4ec4-9ffe-9db52a4e230f",
      "balance": "2,337,207,047.08",
      "president": "Ray Walters",
      "gender": "male",
      "companies": 25143,
      "country": "BOTSWANA"
    },
    {
      "_id": "627aa1262cd28ada07cb1246",
      "index": 44,
      "guid": "96e6de0b-89f3-499c-bc11-1b3bbd730c02",
      "balance": "1,870,273,695.64",
      "president": "Dixon Snow",
      "gender": "male",
      "companies": 23906,
      "country": "BRUNEI DARUSSALAM"
    },
    {
      "_id": "627aa12621e5e89fd9332a35",
      "index": 45,
      "guid": "5dc51c0c-430e-407b-9005-e9eb683175cc",
      "balance": "579,063,963.14",
      "president": "Estelle Hobbs",
      "gender": "female",
      "companies": 17975,
      "country": "LIBYA"
    },
    {
      "_id": "627aa1262b2c9986cc2b6892",
      "index": 46,
      "guid": "0cc2ef59-748b-4e5c-b70c-a3f70507884a",
      "balance": "161,809,303.63",
      "president": "Santana Lester",
      "gender": "male",
      "companies": 29841,
      "country": "CHRISTMAS ISLAND"
    },
    {
      "_id": "627aa12682781232a8fdf209",
      "index": 47,
      "guid": "ff0eea7d-2046-43cd-82d9-feaadd6ecd0c",
      "balance": "2,273,514,143.13",
      "president": "Mcpherson Haley",
      "gender": "male",
      "companies": 6816,
      "country": "SRI LANKA"
    },
    {
      "_id": "627aa1269613f1372a07bcd3",
      "index": 48,
      "guid": "7373187a-b038-441a-889d-b0e80d3598ec",
      "balance": "919,380,971.60",
      "president": "Padilla Olsen",
      "gender": "male",
      "companies": 22418,
      "country": "PARAGUAY"
    }
  ];

  dataCompanies: any[] = [
    {
      "_id": "627aa5bfe398a8fec3c3daa9",
      "index": 0,
      "guid": "98dfccaa-8ef4-4fbc-862f-8e6f79cb3d04",
      "balance": 39117638.9,
      "company": "TWIGGERY",
      "month": "Januar",
      "country": "INDONESIA"
    },
    {
      "_id": "627aa5bff0dbc4a562f3bc7c",
      "index": 1,
      "guid": "ac1e3f6b-8a8f-49b7-97bd-68c9ea093a5f",
      "balance": 29341541.37,
      "company": "VORTEXACO",
      "month": "Februar",
      "country": "HUNGARY"
    },
    {
      "_id": "627aa5bf9e276f2b64a36dad",
      "index": 2,
      "guid": "6055ed24-0556-47c3-bf94-3f2191a73884",
      "balance": 37179848.87,
      "company": "VERTIDE",
      "month": "März",
      "country": "SWAZILAND"
    },
    {
      "_id": "627aa5bf123ca7625886e9e2",
      "index": 3,
      "guid": "cdbdb319-325b-455b-b2b1-9588474a7466",
      "balance": 28301018.42,
      "company": "NORSUP",
      "month": "April",
      "country": "ZAMBIA"
    },
    {
      "_id": "627aa5bff0c70334e03798b5",
      "index": 4,
      "guid": "809e34d2-ac28-4eeb-aab0-0a99377d43d0",
      "balance": 16714352.28,
      "company": "MANGELICA",
      "month": "Mai",
      "country": "NAURU"
    },
    {
      "_id": "627aa5bf7bf4273855394f64",
      "index": 5,
      "guid": "57c74eb8-f6fe-4970-8ad7-4c3d659a0d9e",
      "balance": 14711821.76,
      "company": "PYRAMIS",
      "month": "Juni",
      "country": "OMAN"
    },
    {
      "_id": "627aa5bf970c710e78be3eee",
      "index": 6,
      "guid": "98637c73-2843-4430-ab96-d1c118b85504",
      "balance": 18982429.95,
      "company": "ZOID",
      "month": "Juli",
      "country": "MICRONESIA"
    },
    {
      "_id": "627aa5bff1f4ba36257d4276",
      "index": 7,
      "guid": "6d8f4cb8-b8bc-41ed-a3b4-4f421ab31da8",
      "balance": 720860.14,
      "company": "COMVEX",
      "month": "August",
      "country": "NIGERIA"
    },
    {
      "_id": "627aa5bfdc7919828bf0531f",
      "index": 8,
      "guid": "7d0b4f37-ae0b-47af-8adf-334c57721fb3",
      "balance": 24035402,
      "company": "PRINTSPAN",
      "month": "September",
      "country": "S. GEORGIA AND S. SANDWICH ISLS."
    },
    {
      "_id": "627aa5bfe46d6b394eb9f3de",
      "index": 9,
      "guid": "e13aa1a0-b396-4463-a95e-53f8906ca483",
      "balance": 10566745.54,
      "company": "FUTURITY",
      "month": "Oktober",
      "country": "JAPAN"
    },
    {
      "_id": "627aa5bff88a5feddf25ae2e",
      "index": 10,
      "guid": "6fc104b1-203b-4b32-a6cc-6c930b5c12e0",
      "balance": 9064781.46,
      "company": "MEDCOM",
      "month": "November",
      "country": "TOKELAU"
    },
    {
      "_id": "627aa5bfd5248eeb3a9d00ab",
      "index": 11,
      "guid": "545ef9be-c5df-4bd8-950f-2c9f2e17bd01",
      "balance": 36049501.08,
      "company": "EXOVENT",
      "month": "Dezember",
      "country": "ISRAEL"
    }
  ]
}

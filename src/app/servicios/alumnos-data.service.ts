import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosDataService {
  private alumnos=[
    {
      "_id": "647f7b35b3b2b54589910fe5",
      "index": 0,
      "isActive": true,
      "age": 37,
      "name": "Good Robles",
      "gender": "male",
      "email": "goodrobles@geekology.com",
      "phone": "+1 (910) 554-2223",
      "address": "225 Hunterfly Place, Gloucester, Massachusetts, 8270"
    },
    {
      "_id": "647f7b35c19eeab2f4b2ffa4",
      "index": 1,
      "isActive": false,
      "age": 23,
      "name": "Eleanor Morton",
      "gender": "female",
      "email": "eleanormorton@geekology.com",
      "phone": "+1 (990) 411-2612",
      "address": "329 Bowne Street, Austinburg, Oregon, 5229"
    },
    {
      "_id": "647f7b3546bd3bed95e52ae4",
      "index": 2,
      "isActive": true,
      "age": 32,
      "name": "Cherie Valentine",
      "gender": "female",
      "email": "cherievalentine@geekology.com",
      "phone": "+1 (841) 451-2877",
      "address": "773 Summit Street, Clarksburg, Kentucky, 7910"
    },
    {
      "_id": "647f7b35f75497bd30f0b74a",
      "index": 3,
      "isActive": false,
      "age": 21,
      "name": "Whitney Hayes",
      "gender": "female",
      "email": "whitneyhayes@geekology.com",
      "phone": "+1 (865) 516-2476",
      "address": "553 Essex Street, Trona, Arizona, 392"
    },
    {
      "_id": "647f7b35d4fde874ddb75829",
      "index": 4,
      "isActive": true,
      "age": 21,
      "name": "Leon Sandoval",
      "gender": "male",
      "email": "leonsandoval@geekology.com",
      "phone": "+1 (856) 490-3358",
      "address": "530 Jardine Place, Fairforest, Idaho, 7771"
    },
    {
      "_id": "647f7b35707d79b65eea97ae",
      "index": 5,
      "isActive": true,
      "age": 32,
      "name": "Vilma Wolfe",
      "gender": "female",
      "email": "vilmawolfe@geekology.com",
      "phone": "+1 (914) 565-3993",
      "address": "944 Williams Avenue, Crisman, Virginia, 4674"
    },
    {
      "_id": "647f7b35afd56467ba38ae88",
      "index": 6,
      "isActive": true,
      "age": 40,
      "name": "Montoya Patel",
      "gender": "male",
      "email": "montoyapatel@geekology.com",
      "phone": "+1 (852) 496-2076",
      "address": "547 Seacoast Terrace, Adamstown, South Carolina, 7101"
    },
    {
      "_id": "647f7b35300b253b20755746",
      "index": 7,
      "isActive": false,
      "age": 37,
      "name": "Ruiz Dennis",
      "gender": "male",
      "email": "ruizdennis@geekology.com",
      "phone": "+1 (952) 593-2920",
      "address": "602 Beadel Street, Stewart, California, 9204"
    },
    {
      "_id": "647f7b35eed60ea13d424b9e",
      "index": 8,
      "isActive": true,
      "age": 34,
      "name": "Fern Vance",
      "gender": "female",
      "email": "fernvance@geekology.com",
      "phone": "+1 (876) 464-3552",
      "address": "760 Division Avenue, Sutton, Maine, 6025"
    },
    {
      "_id": "647f7b35a5642d2e2310da85",
      "index": 9,
      "isActive": false,
      "age": 30,
      "name": "Evelyn Keith",
      "gender": "female",
      "email": "evelynkeith@geekology.com",
      "phone": "+1 (946) 533-2925",
      "address": "286 Ridgewood Avenue, Holcombe, Montana, 1408"
    },
    {
      "_id": "647f7b352782553b63a62939",
      "index": 10,
      "isActive": false,
      "age": 24,
      "name": "Sullivan Schroeder",
      "gender": "male",
      "email": "sullivanschroeder@geekology.com",
      "phone": "+1 (960) 552-3501",
      "address": "707 Boerum Place, Rockingham, Oklahoma, 2130"
    },
    {
      "_id": "647f7b35edb5714644f2fe14",
      "index": 11,
      "isActive": false,
      "age": 20,
      "name": "Cleveland Ferguson",
      "gender": "male",
      "email": "clevelandferguson@geekology.com",
      "phone": "+1 (914) 481-2056",
      "address": "808 Bay Street, Loveland, Virgin Islands, 362"
    },
    {
      "_id": "647f7b35e3180b0dd877c40d",
      "index": 12,
      "isActive": true,
      "age": 20,
      "name": "Berg Castillo",
      "gender": "male",
      "email": "bergcastillo@geekology.com",
      "phone": "+1 (843) 442-2996",
      "address": "557 Bush Street, Albany, Indiana, 1716"
    },
    {
      "_id": "647f7b3531a67e3e4b917ea9",
      "index": 13,
      "isActive": false,
      "age": 26,
      "name": "Adriana Davidson",
      "gender": "female",
      "email": "adrianadavidson@geekology.com",
      "phone": "+1 (935) 548-2407",
      "address": "355 Nelson Street, Alfarata, Maryland, 8443"
    },
    {
      "_id": "647f7b35e803f84a68eaf18b",
      "index": 14,
      "isActive": true,
      "age": 39,
      "name": "Vincent Cleveland",
      "gender": "male",
      "email": "vincentcleveland@geekology.com",
      "phone": "+1 (803) 531-2386",
      "address": "988 Gaylord Drive, Kraemer, Alabama, 8604"
    },
    {
      "_id": "647f7b35336294529e38de6d",
      "index": 15,
      "isActive": true,
      "age": 25,
      "name": "Selma Owens",
      "gender": "female",
      "email": "selmaowens@geekology.com",
      "phone": "+1 (891) 435-2462",
      "address": "677 Glenmore Avenue, Alderpoint, Wisconsin, 9782"
    },
    {
      "_id": "647f7b356135ff40bbe4c305",
      "index": 16,
      "isActive": true,
      "age": 28,
      "name": "Dyer Garrett",
      "gender": "male",
      "email": "dyergarrett@geekology.com",
      "phone": "+1 (962) 596-3520",
      "address": "593 Holmes Lane, Kilbourne, Washington, 8034"
    },
    {
      "_id": "647f7b35486ae21d588fd6f3",
      "index": 17,
      "isActive": false,
      "age": 35,
      "name": "Chan English",
      "gender": "male",
      "email": "chanenglish@geekology.com",
      "phone": "+1 (860) 572-2704",
      "address": "957 Moffat Street, Goochland, Iowa, 4706"
    },
    {
      "_id": "647f7b35af5156d28eb43c11",
      "index": 18,
      "isActive": true,
      "age": 31,
      "name": "Rowe Frazier",
      "gender": "male",
      "email": "rowefrazier@geekology.com",
      "phone": "+1 (845) 450-3595",
      "address": "967 Driggs Avenue, Delwood, District Of Columbia, 3296"
    },
    {
      "_id": "647f7b3533f8fe9d19c80ade",
      "index": 19,
      "isActive": true,
      "age": 40,
      "name": "Burgess Cherry",
      "gender": "male",
      "email": "burgesscherry@geekology.com",
      "phone": "+1 (925) 588-2823",
      "address": "834 Bills Place, Waukeenah, Tennessee, 1586"
    },
    {
      "_id": "647f7b35ce17bd758a50dda4",
      "index": 20,
      "isActive": true,
      "age": 23,
      "name": "Misty Foley",
      "gender": "female",
      "email": "mistyfoley@geekology.com",
      "phone": "+1 (977) 474-3617",
      "address": "881 Oriental Court, Chase, Mississippi, 6382"
    },
    {
      "_id": "647f7b3555d32f0cd545800d",
      "index": 21,
      "isActive": false,
      "age": 36,
      "name": "Evangeline Petty",
      "gender": "female",
      "email": "evangelinepetty@geekology.com",
      "phone": "+1 (875) 503-2459",
      "address": "368 Hopkins Street, Independence, Missouri, 1905"
    },
    {
      "_id": "647f7b351151ddabb2b09413",
      "index": 22,
      "isActive": false,
      "age": 32,
      "name": "Alexis Horton",
      "gender": "female",
      "email": "alexishorton@geekology.com",
      "phone": "+1 (930) 592-2631",
      "address": "672 Cypress Avenue, Advance, New Hampshire, 2098"
    },
    {
      "_id": "647f7b35f5f009dd6f8a2654",
      "index": 23,
      "isActive": true,
      "age": 21,
      "name": "Robbie Giles",
      "gender": "female",
      "email": "robbiegiles@geekology.com",
      "phone": "+1 (890) 579-3030",
      "address": "254 Nassau Street, Wheaton, Utah, 4867"
    }
  ]

  constructor() { }
  getAlumnos():any{
    return this.alumnos;
    
  }
}


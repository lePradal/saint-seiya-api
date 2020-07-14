const csv = require('csvtojson');
const FileSystem = require("fs");

const files = [
  'affiliations',
  'artists',
  'attackers',
  'attacks',
  'characters',
  'classes',
  'cloths',
  'curiosities',
  'debuts',
  'familyMembers',
  'groupsApollo',
  'groupsAres',
  'groupsArtemis',
  'groupsAstraea',
  'groupsAthena',
  'groupsBalor',
  'groupsCronus',
  'groupsEris',
  'groupsGarnet',
  'groupsGladiators',
  'groupsHades',
  'groupsHakuryu',
  'groupsLamech',
  'groupsOdin',
  'groupsOthers',
  'groupsPallas',
  'groupsPoseidon',
  'groupsRa',
  'groupsTezcatlipoca',
  'groupsTyphon',
  'groupsZeus',
  'kinships',
  'masters',
  'midias',
  'nationality',
  'places',
  'ranks',
  'saints'
];

files.forEach(file => {
  csv().fromFile(`./csv/${file}.csv`).then(jsonObj=>{
    FileSystem.writeFileSync(`./json/${file}.json`, JSON.stringify(jsonObj));
  });
});

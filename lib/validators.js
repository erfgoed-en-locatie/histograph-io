var fs = require('fs');
var config = require(process.env.HISTOGRAPH_CONFIG);
var validator = require('is-my-json-valid');

var validators = {
  source: validator(fs.readFileSync(config.schemas.dir + '/json/source.schema.json', 'utf-8')),
  pits: validator(fs.readFileSync(config.schemas.dir + '/json/pits.schema.json', 'utf-8')),
  relations: validator(fs.readFileSync(config.schemas.dir + '/json/relations.schema.json', 'utf-8'))
};

module.exports = validators;
const yaml = require('js-yaml');
const yamlinc = require('yaml-include');
const fs = require('fs');
const path = require('path');

yamlinc.setBaseFile(path.join(__dirname, './defs', 'api-spec.yaml'));
const src = fs.readFileSync(yamlinc.basefile, 'utf8');
const dir = 'dist';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const ymlobj = yaml.load(src, {
  schema: yamlinc.YAML_INCLUDE_SCHEMA, filename: yamlinc.basefile,
});

fs.writeFile(path.join(__dirname, '/', dir, '/api-spec-dist.yaml'), yaml.dump(ymlobj), (err) => {
  if (err) throw err;
});
console.log('Assemble API... Done');

const fs = require('fs');
const util = require('util');
const path = require('path');
const sync = require('./sync');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const rename = util.promisify(fs.rename);
const readdir = util.promisify(fs.readdir);

const change = async () => {
  const oldName = process.argv[3];
  const newName = process.argv[4];
  const folder = process.argv[2];

  const files = await readdir(
    path.join(process.cwd(), `src/${folder}s/${oldName}`),
  );

  for (let file of files) {
    const fileContents = await readFile(
      path.join(process.cwd(), `src/${folder}s/${oldName}/${file}`),
      'utf8',
    );

    await writeFile(
      path.join(process.cwd(), `src/${folder}s/${oldName}/${file}`),
      fileContents.replace(new RegExp(oldName, 'g'), newName),
    );

    const newFile = file.replace(new RegExp(oldName, 'g'), newName);

    await rename(
      path.join(process.cwd(), `src/${folder}s/${oldName}/${file}`),
      path.join(process.cwd(), `src/${folder}s/${oldName}/${newFile}`),
    );
  }

  await rename(
    path.join(process.cwd(), `src/${folder}s/${oldName}`),
    path.join(process.cwd(), `src/${folder}s/${newName}`),
  );

  if (process.argv[2] === 'screen') {
    await sync(true);
  }
};

change();
module.exports = change;

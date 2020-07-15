const fs = require('fs');
const path = require('path');
const util = require('util');
const gen = require('./code');
const writeFile = util.promisify(fs.writeFile);

const sync = async (override) => {
  if (process.argv[2] === 'screens' || override) {
    const getDirectories = (source) =>
      fs
        .readdirSync(source, {withFileTypes: true})
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    const dirs = getDirectories(path.join(process.cwd(), 'src/screens'));
    await writeFile(
      path.join(process.cwd(), 'src/screens/index.tsx'),
      gen.Screens(dirs),
    );
    await writeFile(
      path.join(process.cwd(), 'src/screens/types.tsx'),
      gen.Types(dirs),
    );
  }
};

sync();
module.exports = sync;

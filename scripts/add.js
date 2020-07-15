const fs = require('fs');
const path = require('path');
const util = require('util');
const gen = require('./code');

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

(async () => {
  try {
    if (process.argv[2] === 'screen') {
      const name = process.argv[3];

      await mkdir(path.join(process.cwd(), 'src/screens/' + name));
      await writeFile(
        path.join(process.cwd(), `src/screens/${name}/${name}.tsx`),
        gen.Screen(name),
      );
      await writeFile(
        path.join(process.cwd(), `src/screens/${name}/${name}.styles.tsx`),
        gen.Styles(),
      );
      await writeFile(
        path.join(process.cwd(), `src/screens/${name}/${name}.test.tsx`),
        gen.Test(name),
      );

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
    }
  } catch (err) {
    console.log(err);
  }
})();

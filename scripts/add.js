const fs = require('fs');
const path = require('path');
const util = require('util');
const gen = require('./code');
const sync = require('./sync');

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

const add = async () => {
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

      await sync(true);
    }
  } catch (err) {
    console.log(err);
  }
};

add();
module.exports = add;

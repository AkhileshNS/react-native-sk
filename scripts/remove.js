const fs = require('fs');
const path = require('path');
const sync = require('./sync');

const deleteFolderRecursive = function (Path) {
  if (fs.existsSync(Path)) {
    fs.readdirSync(Path).forEach((file) => {
      const curPath = path.join(Path, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(Path);
  }
};

const remove = async () => {
  if (process.argv[2] === 'screen') {
    const name = process.argv[3];

    deleteFolderRecursive(path.join(process.cwd(), 'src/screens/' + name));
    await sync(true);
  }
};

remove();
module.exports = remove;

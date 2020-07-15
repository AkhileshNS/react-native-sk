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
  const name = process.argv[3];

  if (process.argv[2] === 'screen') {
    deleteFolderRecursive(path.join(process.cwd(), 'src/screens/' + name));
    await sync(true);
  }
  if (process.argv[2] === 'component') {
    deleteFolderRecursive(path.join(process.cwd(), 'src/components/' + name));
  }
};

remove();
module.exports = remove;

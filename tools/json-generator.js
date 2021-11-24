import fs from 'fs-extra';
import NodeID3 from 'node-id3';

const OUTPUT = './public';
const INPUT = './public/audio';

const getAllFiles = function (dirPath) {
  const files = fs.readdirSync(dirPath);

  return files.map(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      return {
        title: getFileCategory(`${dirPath}/${file}`),
        category: file,
        sounds: getAllFiles(dirPath + '/' + file)
      };
    }
    return {
      title: getFileTitle(`${dirPath}/${file}`),
      name: file
    };
  });
};

/**
 * @param {string} file
 * @returns {string}
 */
function getFileTitle(file) {
  const tags = NodeID3.read(file);
  NodeID3.read(file, function (err, tags) {});

  return tags.title;
}

/**
 * @param {string} dirPath
 * @returns {string}
 */
function getFileCategory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let i = 0;
  let found = false;
  let category = '';

  while (i < files.length && !found) {
    const file = files[i];
    if (!fs.statSync(dirPath + '/' + file).isDirectory()) {
      const tags = NodeID3.read(dirPath + '/' + file);
      NodeID3.read(file, function (err, tags) {});

      category = tags.album;
      found = true;
    }
    i++;
  }

  return category;
}

const result = getAllFiles(INPUT);

fs.writeFileSync(OUTPUT + '/sounds.json', JSON.stringify(result, null, 2));

console.log('All done!');

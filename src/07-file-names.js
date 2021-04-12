/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [];
  if (names.length === 0) return names;
  newNames.push(names[0]);
  for (let i = 1; i < names.length; i++) {
    if (newNames.includes(names[i])) {
      if (newNames.includes(`${names[i]}(1)`)) {
        newNames.push(`${names[i]}(2)`);
      } else {
        newNames.push(`${names[i]}(1)`);
      }
    } else {
      newNames.push(names[i]);
    }
  }
  return newNames;
}
module.exports = renameFiles;

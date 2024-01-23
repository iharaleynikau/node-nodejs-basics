import { promises, constants } from 'node:fs';

// checks whether a directory or file exists
const doesExist = async path => {
  try {
    await promises.access(path, constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

export default doesExist;

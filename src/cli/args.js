// node args.js --propName value --prop2Name value2

const parseArgs = () => {
  const args = process.argv.slice(2);

  const propNameIndex = 0;
  const prop2NameIndex = 2;

  const result = [];

  if (propNameIndex > -1 && prop2NameIndex > -1) {
    result.push(
      `${args[propNameIndex]} is ${args[propNameIndex + 1]}`,
      `${args[prop2NameIndex]} is ${args[prop2NameIndex + 1]}`
    );
  }

  console.log(result.join(', '));
};

parseArgs();

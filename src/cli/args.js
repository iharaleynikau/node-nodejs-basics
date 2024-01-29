const parseArgs = () => {
  const allArgs = process.argv.slice(2);
  const args = allArgs.filter((item, index) => (index % 2) - 1);
  const argsValues = allArgs.filter((item, index) => index % 2);

  const result = [];

  for (let arg of args) {
    let index = args.indexOf(arg);
    result.push(
      `${arg} is ${argsValues[index] === undefined ? '[value was not passed]' : argsValues[index]}`
    );
  }

  console.log(result.join(', '));
};

parseArgs();

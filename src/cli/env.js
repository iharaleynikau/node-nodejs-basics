// RSS_name1=value1 RSS_name2=value2 node env.js

const parseEnv = () => {
  // process.env.RSS_name1 = 'value1';
  // process.env.RSS_name2 = 'value2';

  const result = [];

  for (const value in process.env) {
    if (value.startsWith('RSS_')) {
      result.push(`${value}=${process.env[value]}`);
    }
  }

  console.log(result.join('; '));
};

parseEnv();

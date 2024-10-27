const parseEnv = () => {
    const env = process.env;
    const res = Object.keys(env).filter(key => key.startsWith('RSS'));
    res.forEach(el=> console.log(`${el}=${env[el]}`));
};

parseEnv();

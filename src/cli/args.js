const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = {};

    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].replace('--', '');
        parsedArgs[propName] = args[i + 1];
    }

    for (const arg in parsedArgs) {
        console.log(`${arg} is ${parsedArgs[arg]}`);
    }
};

parseArgs();

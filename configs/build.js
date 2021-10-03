const path = require('path');
const fs = require('fs');
const convict = require('convict');
const dotenv = require('dotenv');

const schema = require(path.join(__dirname, 'schema.json'));

const env = process.env.ENV;
if (env) {
    const envConfigPath = path.join(__dirname, `${env}.env`);
    if (fs.existsSync(envConfigPath)) {
        dotenv.config({ path: envConfigPath });
        process.env.Stage = env;
    } else {
        throw new Error(`File ${envConfigPath} don not exist`);
    }
}

const envSchema = Object.entries(schema).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: {
        ...value,
        format: value.format || 'String',
        default: value.default || null,
        env: key
    }
}), {});

const config = convict(envSchema);
config.validate({ allowed: 'strict' });

const configProperties = JSON.stringify(config.getProperties(), null, 4);
const filePath = path.join(__dirname, '..', 'src', 'config.json');
fs.writeFileSync(filePath, configProperties);

const isProduction = process.env.NODE_ENV === 'production';
const pool = {
  max: isProduction ? 15 : 5,
  min: 0,
  acquire: 60000,
  idle: 10000,
};

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL_DEV',
    dialect: 'postgres',
    logging: false,
    pool,
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres',
    logging: false,
    pool,
  },
  production: {
    logging: false,
    use_env_variable: 'DATABASE_URL',
    pool,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
};

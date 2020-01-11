export default {
  checkIfProduction: () => {
    console.log(`######## Environment: [${process.env.ENV_TYPE}] ########`);
    return process.env.ENV_TYPE === "production" || process.env.ENV_TYPE === "prod";
  },
  getEnvironment: () => {
    return process.env.ENV_TYPE;
  }
};

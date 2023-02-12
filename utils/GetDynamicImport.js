export const DynamicFunction = async ({moduleName, functionName}) => {
  const functions = await import(`../components/howto-founder/content/DATA_${moduleName}/DATA_CREATED_${moduleName}`);
  
  return functions[`DATA_CREATED_${functionName}`];
};
/**
 * Demo function to exemplify that we could use any other createElement function
 * @param {String} type
 * @param {Object} properties
 * @param {Array} children
 */
const createElementString = (type, properties, children) => {
  return {
    type,
    properties,
    children,
  };
};

export { createElementString };

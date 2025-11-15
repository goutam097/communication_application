export const getAuthUrl = (key, params = {}) => {
  switch (key) {
    case "LOGIN":
      return `/auth/login`;
    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};

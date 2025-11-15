import { getAuthUrl } from "./apiConstants/authConstants";



export const getURL = (key, params = {}) => {
    const [moduleName, apiName] = key.split('.')
    switch (moduleName) {
        case "AUTH":
            return getAuthUrl(apiName, params);
        default:
            throw new Error(`URL key "${key}" is not defined.`);
    }
};

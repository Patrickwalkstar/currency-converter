export const heading: string = "currency converter";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "d32d75de5146611ae7f23de0782ac09b";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;

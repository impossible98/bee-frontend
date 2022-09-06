export const APP_NAME: string = 'Bee';
export const BASE_URL: string = import.meta.env.MODE === "development"
  ? 'http://127.0.0.1:8080'
  : "http://127.0.0.1:7226";

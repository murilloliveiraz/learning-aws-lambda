import { log } from "./log.mjs";

export const handler = async (event) => {
  log('Log de execucao após GitHub actions. event: ' + JSON.stringify(event))
  return {
    statusCode: 200,
    body: JSON.stringify(event)
  };
};

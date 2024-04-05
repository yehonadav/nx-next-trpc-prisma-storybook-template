import {STAGE} from "@my-project/types";

export const env = {
  stage: (process.env['STAGE'] || 'dev') as STAGE,
};

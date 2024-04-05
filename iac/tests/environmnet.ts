import {config} from "dotenv";
import * as path from "path";

// take variables from AWS Secrets Manager > Secrets > prod/postgres
// https://us-east-1.console.aws.amazon.com/secretsmanager/secret?name=prod%2Fpostgres&region=us-east-1
config({
  path: path.join(__dirname, './.env'),
});

export const env = {
  password: process.env['password'],
  dbname: process.env['dbname'],
  engine: process.env['engine'],
  port: process.env['port'],
  dbInstanceIdentifier: process.env['dbInstanceIdentifier'],
  host: process.env['host'],
  username: process.env['username'],
}

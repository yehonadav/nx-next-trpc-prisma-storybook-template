import { Pool } from 'pg';
import { env } from "./environmnet";

describe('Postgres DB Connection', () => {
  it('should establish a successful pg db connection', async () => {
    // Create a new connection pool
    const pool = new Pool({
      user: env.username,
      password: env.password,
      host: env.host,
      port: env.port,
      database: env.dbname,
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    });

    // Attempt to connect to the database
    const client = await pool.connect();

    // Verify the connection
    expect(client).toBeTruthy();

    // Release the client
    client.release();
  });
});

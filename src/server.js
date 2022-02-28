import express from 'express';
import router from './routes';



export function launch({ host, protocol, port }) {
  const application = express();

  application.use(express.json());
  application.use(router)
  application.listen(
    port,
    () => console.log(`Server started at ${protocol}://${host}:${port}`),
  );
}
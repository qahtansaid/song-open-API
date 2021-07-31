const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongService = require('./services/postgres/SongServices');
const SongValidator = require('./validator/songs');
require('dotenv').config();

const init = async () => {
  const songService = new SongService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  await server.register({
    plugin: songs,
    options: {
      service: songService,
      validator: SongValidator,
    },
  });
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

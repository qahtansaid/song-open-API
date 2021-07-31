/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    year: {
      type: 'INT',
      notNull: true,
    },
    performer: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    genre: {
      type: 'VARCHAR(100)',
      notNull: false,
    },
    duration: {
      type: 'INT',
      notNull: false,
    },
    insertedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updatedAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};

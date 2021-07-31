const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt,
  updatedAt,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt,
  updatedAt,
});

const mapDBgetSong = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapDBToModel, mapDBgetSong };

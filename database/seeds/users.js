
exports.seed = async function (knex) {
  await knex("users").truncate()
  await knex("users").insert([
    { username: "Mark", password: 123 },
    { username: "Pierre", password: 123 },
    { username: "Jean", password: 123 }
  ]);
};
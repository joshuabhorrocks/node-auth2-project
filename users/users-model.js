const db = require("../database/dbConfig.js");

module.exports = {
    find,
    findBy,
    add,
    findById,
  };

function find() {
  return db("users as u")
    .join("departments as d", "u.departments", "d.id")
    .select("u.id", "u.username", "d.name as department")
    .orderBy("u.id");
}

function findBy(filter) {
  return db("users as u")
    .join("departments as d", "u.departments", "d.id")
    .where(filter)
    .select("u.id", "u.username", "d.name as department", "u.password")
    .orderBy("u.id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}
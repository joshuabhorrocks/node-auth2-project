exports.seed = function (knex) {
  const departments = [
    {
      name: "Crew", // will get id 1
    },
    {
      name: "Civilian", // will get id 2
    },
  ];

  return knex("departments")
    .insert(departments)
    .then(() => console.log("\n== Seed data for departments table added. ==\n"));
};

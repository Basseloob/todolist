// MySQL Tabel - Schema :

const Users = require("./Users");

module.exports = (sequelize, DataTypes) => {
  const Todolist_Items = sequelize.define("Todolist_Items", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_Text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // "High," "Medium," or "Low."
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Medium",
    },
    dueDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // "Pending," "Completed," or "In Progress."
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Pending",
    },
  });

  // Define associations
  //   Todolist_Items.belongsTo(Users); // User is your User model

  return Todolist_Items;
};

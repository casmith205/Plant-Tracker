module.exports = function (sequelize, DataTypes) {
  console.log("User start")
  var User = sequelize.define("User", {

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlpha: true,
        len: {
          args: [3, 20],
          msg: "Your username is not the correct length.  It must be between 3 and 20 characters."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 10],
          msg: "Your password length must be at least 6 characters and no more than 10 characters."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: {
          args: [3, 255],
          msg: "Your email is not the correct length. "
        }

      }
    },
    cellPhone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [10],
          msg: "phone number must be 10 digits"
        }
      }
    },
    address:{
      type: DataTypes.STRING,
      allowNull: true
    },
    zipCode:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: {
          args: [5],
          msg: "zip code must be 5 digits"
        }
      }
    }
  });

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.UserPlant, {
      onDelete: "cascade"
    });
    User.hasMany(models.UserBadge, {
      onDelete: "cascade"
    });
  };
  console.log("User End")

  return User;
};

// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  console.log("User creation")
  var User = sequelize.define("User", {

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      Unique: true,
      validate: {
        notEmpty: true,
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
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipCode: {
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
    User.hasMany(models.Friend, {
      onDelete: "cascade"
    });
  };

  // Creating a custom method for our User model.
  //  This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password);
  });
  return User;
};





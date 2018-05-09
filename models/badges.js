module.exports = function (sequelize, DataTypes) {
    var Badge = sequelize.define("Badge", {
        badgeName: {
            type: DataTypes.STRING,
            allowNull: false,
            len: {
                args: [2, 15],
                msg: "The badge name is not long enough or too long.  It must be between 2 and 15 characters."
            }
        },
        badgeDescription: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    });

    Badge.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Badge.belongsTo(models.UserBadge, {
            foreignKey: {
                allowNull: false
            },
        })
      };

    return Badge;
};

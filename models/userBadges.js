module.exports = function (sequelize, DataTypes) {
    const UserBadge = sequelize.define("UserBadge", {
        badgeName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    UserBadge.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        UserBadge.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        }),
        UserBadge.hasMany(models.Badge, {
            onDelete: "cascade"
        })
      };

    return UserBadge;
};

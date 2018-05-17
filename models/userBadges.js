module.exports = function (sequelize, DataTypes) {
    const UserBadge = sequelize.define("UserBadge", {
    });

    UserBadge.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        UserBadge.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        }),
        UserBadge.belongsTo(models.Badge, {
            foreignKey: {
                allowNull: false
            },
        })
      };

    return UserBadge;
};

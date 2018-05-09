module.exports = function (sequelize, DataTypes) {
    const Friend = sequelize.define("Friend", {
        friendName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accepted:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Friend.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Friend.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        })
      };

    return Friend;
};

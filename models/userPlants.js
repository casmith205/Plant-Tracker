module.exports = function (sequelize, DataTypes) {
    const UserPlant = sequelize.define("UserPlant", {
        plantName: {
            type: DataTypes.STRING,
            // len is a validation that checks that our todo is between 1 and 140 characters
            allowNull: false,
            validate: {
                len: {
                    args: [3, 30],
                    msg: "Your plant name is not long enough or too long.  It must be between 3 and 30 characters."
                }
            }
        },
        needsToBeWatered_bool: {
            type: DataTypes.BOOLEAN,
            // defaultValue to false for needing to be watered
            defaultValue: false
        },
        // frequency in days of needing to be watered
        wateringInterval:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // last watered date and time
        lastWateredDate:{
            type:DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        //alive, dead, needs attention
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'alive'
        },
        //valid types are Indoor, Outdoor
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    });

    UserPlant.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        UserPlant.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
    };

    return UserPlant;
};


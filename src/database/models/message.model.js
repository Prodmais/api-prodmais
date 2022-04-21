const { TYPES_MESSAGE } = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const MESSAGE = sequelize.define('Messages', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        type: {
            type: DataTypes.STRING(25),
            allowNull: false,
            defaultValue: TYPES_MESSAGE.MOTIVATIONAL,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
        {
            timestamps: true,
            paranoid: true,
        }
    );

    return MESSAGE;
}
const { TYPES_USER } = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const USER = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(25),
            allowNull: false,
            defaultValue: TYPES_USER.COMMON,
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
        {
            timestamps: true,
            paranoid: true,
        }
    );

    USER.associate = function (models) {
        USER.hasMany(models.Boards, {
            foreignKey: 'userId'
        });
    }

    return USER;
}
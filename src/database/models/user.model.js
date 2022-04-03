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
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    },
        {
            timestamps: true,
            paranoid: true,
        }
    );

    USER.associate = function (models) {
        USER.hasMany(models.Tasks, {
            foreignKey: 'userId'
        });
    }

    return USER;
}
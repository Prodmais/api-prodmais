module.exports = (sequelize, DataTypes) => {
    const BOARD = sequelize.define('Boards', {
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
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        isMobile: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
    },
        {
            timestamps: true,
        });

    BOARD.associate = function (models) {
        BOARD.belongsTo(models.Users, {
            foreignKey: 'userId'
        });
    }

    return BOARD;
}
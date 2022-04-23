const { STATUS_TASK } = require("../../constants");

module.exports = (sequelize, DataTypes) => {
    const TASK = sequelize.define('Tasks', {
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
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: STATUS_TASK.DO
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
        {
            timestamps: true,
        });

    TASK.associate = function (models) {
        TASK.belongsTo(models.Boards, {
            foreignKey: 'boardId'
        });
    }

    return TASK;
}
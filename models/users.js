module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        'title': DataTypes.STRING
    });
    return user;
}
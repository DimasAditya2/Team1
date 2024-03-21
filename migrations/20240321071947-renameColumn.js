'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Profiles', 'name', 'fullName');
    // urutan > nama column >  > nama column lama > nama column baru
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Profiles', 'fullName', 'name');
    // urutan > nama column > nama column baru > nama column lama
  }
};

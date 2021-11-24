'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O Senhor dos Aneis - A Sociedade do Anel',
        author: 'J.R.R. Tolkien',
        page_quantity: 602,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O Senhor dos Aneis - As Duas Torres',
        author: 'J.R.R. Tolkien',
        page_quantity: 550,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        title: 'O Senhor dos Aneis - O Retorno do Rei',
        author: 'J.R.R. Tolkien',
        page_quantity: 600,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {
      undescored: true,
      tableName: 'Books'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

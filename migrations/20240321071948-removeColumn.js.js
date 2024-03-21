'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hapus kolom 'nama_kolom' dari tabel 'nama_tabel'
    return queryInterface.removeColumn('Profiles', 'email');
  },

  down: async (queryInterface, Sequelize) => {
    // Jika Anda perlu mengembalikan kolom, Anda dapat menambahkannya di sini
    // Contoh: Menambahkan kolom kembali dengan tipe data yang sama
    return queryInterface.addColumn('Profiles', 'Mail',{
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};

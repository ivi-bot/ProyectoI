'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('Usuarios', [{  
        nickname:'Usuario'+i.toString() +'petlover' ,
        nombre: 'Usuario'+i.toString() ,  
        apellido:'Usuario' + i.toString()  + 'ECU',
        email: 'Usuario'+i.toString() +'petlover' +'@gmail.com',
        contrasena: 'Usuario'+i.toString() +'petlover'+'Usuario' + i.toString()  + 'ECU',
        dirección:'ECU',
        createdAt: new Date(),  
        updatedAt: new Date()  
    }], {});  

   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Productos', null, {});  

  }
};

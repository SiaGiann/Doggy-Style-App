'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'siayian@hotmail.com',
        password: 'a12345',
        photo: 'http://static1.squarespace.com/static/57d05107893fc0df0e6c8c33/t/5a0916cd652deab98d73b4c7/1510545102090/sia.jpg?format=1000w',
        bio: 'I am a singer....',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Arno Big-Daddy',
        email: 'wouldyoubesokind@todo.com',
        password: 'a22345',
        photo: 'https://static1.codaisseur.com/uploads/team_member/avatar/17/foto_arno_fleming-square-150kb-png-85ad266f87546ac967c439aebc930908.png',
        bio: 'coder by day, rock god by night',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Matt Le-blanc',
        email: 'howyoudoin@gmail.com',
        password: 'a23345',
        photo: 'https://static0.codaisseur.com/uploads/team_member/avatar/12/profile_bw-jpg-ce92e2012ac1ff86bbe1de301c0efc1c.png',
        bio: 'former member of the best tv show of all time, secretly canadian',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Mike vice-pence',
        email: 'wherehaveallthegoodmengone@hotmail.com',
        password: 'a33345',
        photo: 'https://static3.codaisseur.com/uploads/team_member/avatar/14/mike-png-9e10d5b19707be5d7fdb7e8d360ba7e7.png',
        bio: 'in his spare time helps to run the US and A by babysitting',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Mimi Smith',
        email: 'sugarspiceandeverythingnice@bubbles.com',
        password: 'a3333345',
        photo: 'https://i.pinimg.com/736x/21/d0/fd/21d0fd6deca94fcecff39b5bd0de4178--powerpuff-k%C4%B1zlar%C4%B1-the-powerpuff-girls.jpg',
        bio: 'a piece of sunshine plucked from the sun',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }
      {
        name: 'Michiel Reuter',
        email: 'ilikelables@hotmail.nl',
        password: 'a344345',
        photo: 'https://static3.codaisseur.com/uploads/team_member/avatar/14/mike-png-9e10d5b19707be5d7fdb7e8d360ba7e7.png',
        bio: 'if there is no label for it, it belong in the bin',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Wouter The-general',
        email: 'coda4life@hotmail.nl',
        password: 'a3466345',
        photo: 'https://static1.codaisseur.com/uploads/team_member/avatar/1/codaisseur-portraits-27-jpg-cb64901ab564a35a59906130ff5970bf.png',
        bio: 'Follow the Reader, Reader, Reader, follow the Reader duh duh',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Rembert Here-come-the-BOOM!',
        email: 'dynamite123@hotmail.com',
        password: 'a3466345',
        photo: 'https://static4.codaisseur.com/uploads/team_member/avatar/2/rembert-jpg-ff131468e4fd1f90c44e1a9a9c9c9a16.png',
        bio: 'does my name sound like a cheese?... mmmm camembert',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Arien Clooney',
        email: 'coolasacucumber@Oceans12.com',
        password: 'a3466345',
        photo: 'https://avatars2.githubusercontent.com/u/2857600?s=460&v=4',
        bio: 'Mr. Cool, calm and collected',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Bob Smith',
        email: 'Boring@gmail.come',
        password: 'a34446345',
        photo: 'https://media.townhall.com/thm/resources/images/headshots/guybenson.jpg',
        bio: 'boring bob',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Mamma Si(t)a',
        email: 'Iwannaswingfromthecandelier@gmail.come',
        password: 'a34446345',
        photo: 'https://ca.slack-edge.com/T0DK39WAJ-U92ACRL4A-bb60b44103f1-72',
        bio: 'Working Title',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Joep Simpson',
        email: 'Dutchie4life@hotmail.it',
        password: 'a34446345',
        photo: 'https://ca.slack-edge.com/T0DK39WAJ-U93CJ3V2M-1c7ac7fa3c9f-72',
        bio: 'I love the login page!',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Julia TheRedDevil',
        email: 'codingdeamon@gmail.com',
        password: 'a3aj46345',
        photo: 'https://ca.slack-edge.com/T0DK39WAJ-U93K8PRTL-7f96d583abdc-72',
        bio: 'Coding is the rythmn of my life',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Freddy Heineken',
        email: 'greenteaismyblood@gmail.co.uk',
        password: 'a3ayy6345',
        photo: 'https://ca.slack-edge.com/T0DK39WAJ-U97GFRR9S-7245d18d39d9-72',
        bio: 'Sigh',
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      }]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};

$(function() {
  //Déclaration du tableau
  var machineChoiceList = ['Pierre', 'Papier', 'Ciseaux'];
  //Déclaration des variables
  var counter = 0;
  var victory = 0;
  var defeat = 0;
  var equality = 0;
  //Au clic sur le bouton...
  $('#shifumi').click(function() {
    //Incrémenter counter
    counter++;
    //Générer un nombre aléatoire entre 0 et 2
    var machineChoice = Math.floor(Math.random() * 3);
    //Récuperer la valeur de l'user et l'intégrer dans une variable
    var userChoice = $('#userChoice').val();
    //Si le choix de l'user est égale a 0 et que le choix de la machine est égale a 2...
    if (userChoice == 0 && machineChoice == 2) {
      //Incrémenter victory
      victory++;
      //Afficher le choix de la machine
      alert('Machine a choisi ' + machineChoiceList[machineChoice]);
      alert('User a gagné !');
      //Sinon si le choix de la machine est égale a 0 et que le choix de l'user est égale a 2...
    } else if (machineChoice == 0 && userChoice == 2) {
      //Incrémenter defeat
      defeat++;
      alert('Machine a choisi ' + machineChoiceList[machineChoice]);
      alert('Machine a gagné !');
      //Sinon si le choix de l'user est supérieur au choix de la machine...
    } else if (userChoice > machineChoice) {
      //Incrémenter victory
      victory++;
      alert('Machine a choisi ' + machineChoiceList[machineChoice]);
      alert('User a gagné !');
      //Sinon si le choix de la machine est supérieur au choix de l'user...
    } else if (machineChoice > userChoice) {
      //Incrémenter defeat
      defeat++;
      alert('Machine a choisi ' + machineChoiceList[machineChoice]);
      alert('Machine a gagné !');
      //Sinon...
    } else {
      //Incrémenter equality
      equality++;
      alert('Machine a choisi ' + machineChoiceList[machineChoice]);
      alert('Égalité');
    }
    //Calculer le pourcentage de victoires et l'intégrer dans une variable calcul
    var calcul = Math.trunc((victory / counter) * 100);
    //Afficher une alert avec le pourcentage
    alert('Vous avez gagné ' + calcul + '% des parties.');
  });
});

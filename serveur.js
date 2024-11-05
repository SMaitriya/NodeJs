var http = require('http') ;

var monServeur=function(requete, reponse){
  reponse.writeHead(200) ;
  reponse.end('Le serveur marche !') ;
}

var serveur = http.createServer(monServeur) ;

serveur.listen(8888) ;
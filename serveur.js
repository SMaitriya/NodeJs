var http = require('http') ;
var url = require('url');

var monServeur=function(requete, reponse){


   var page = url.parse(requete.url).pathname ;
   reponse.writeHead(200,{"Content-Type": "text/plain; charset=UTF-8"})
   //reponse.end('Le serveur répond !') ;

   switch(page) {

    case '/url1' : reponse.end('Première URL'); break;
    case '/url2' : reponse.end('Deuxième URL'); break;
    default : reponse.end('Ce cas ne devrait pas arriver') ;


   }


}

var serveur = http.createServer(monServeur) ;

serveur.listen(8888) ;
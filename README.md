# Books-Finder

Questa semplice applicazione permette all'utente inserendo un genere letterario che più si confà ai suoi gusti nell'apposita search bar, di trovare una serie di libri inerenti al genere scelto dallo stesso.

Inoltre una volta trovati i titoli richiesti è possibile, facendo click su di essi, conoscere la descrizione del titolo per approfondirne il contenuto e la cover del libro selezionato.

## Come è stat sviluppata l'applicazione? 
L'applicazione è stata sviluppata utilizzando il framework 
Angular e Node.js.

## Librerie esterne utilizzate :
Non ci sono state librerie terze utilizzate, ma è stata 
utilizzata l'api del sito "Open Library" per ricavarne i dati.

### Componenti: 
  - header,
  - genre-list

#### Header
 Ha lo scopo di visualizzare l'intestazione dell'app e contiene 
 anche la searchbar dove inserire la categoria di lettura che piu si preferisce.
#### Genre-list
Contiene i libri ricercati per categoria e al click su di essi viene 
visualizzato il dettaglio del libro con titolo descrizione e immagine.

### Servizi : 
  - Search-genre,
  - get-description-books.

#### Search-genre
ha il compito di strutturare l'url inserendo la query utente nello stesso 
per ottenere i dati neccessari al componente che lo utilizza per poterne usufruire.

#### get-description-books
ha il compito di strutturare l'url inserendo la key del libro selezionato dall' utente  
per ottenere i dati neccessari al componente che lo utilizza per poterne usufruire.



## Configurazione e prova in locale
Per la configurazione si dovrà clonare la repo github del proggetto 
e per prima cosa lanciare il comando da terminale `npm install` e 
solo dopo il comando `ng serve --open` per la prova in locale dell'app.

## Firebase Link
L'app è stata hostata tramite firebase al seguente link: https://jobs-finder-7328d.web.app/dashboard

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://karma-runner.github.io/latest/index.html" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg" alt="karma" width="40" height="40"/> </a> </p>
/*Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*let myName ='Giulia'
 console.log(myName)*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*let sum = 12 + 20
console.log(sum)*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*let x=12
console.log('variabile di x', x)*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*myName='Gallo'
console.log('il mio cognome', myName)*/

/*const age = 27
console.log('my age',age)
let age=20
console.log('my age',age)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let sottrazione= x - 4
 console.log(sottrazione)*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/*let name1='john'
let name2 = 'John'
let total =name1 !== name2
console.log('sono diversi', total)*/

/*EXTRA*/

/*let name1='john'
let name2='John'
name2=name2.toLowerCase()
let total=name1===name2
console.log(total)*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
 me.city = 'Toronto'
 console.log(me)
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
 delete me.lastName
 console.log(me)

  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  me.skills.pop()
  console.log(me)
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
 const newArray= []
 console.log(newArray)
 newArray.push(1,2,3,4,5,6,7,8,9,10)
 console.log(newArray)
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
 newArray.splice(9,1,100)
 console.log(newArray)
 /* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/ const cutString = function (gatto){

  
        if(gatto.lenght <=2){
            return("")
        

    }
    
return gatto.slice(1,-1)
    
}
console.log(cutString('gatto'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function(n){
    arrayNumbers=[1,2,3,4,5,6,7,8,9,10]
    if(n===arrayNumbers){
        return (arrayNumbers)
}}
console.log(n)

/* SCRIVI QUI LA TUA RISPOSTA */
# lodash-copy

Mini clone didattico di Lodash in JavaScript, con implementazione di utility di base e test manuali in Node.js.

## Obiettivo
Questo progetto esercita:
- manipolazione di array, stringhe e oggetti
- uso di callback/predicate
- scrittura di funzioni pure e modulari
- verifica del comportamento tramite test

## Funzioni implementate
Nel file `_.js` sono presenti:
- `_.clamp(num, lower, upper)`
- `_.inRange(num, start, end)`
- `_.words(str)`
- `_.pad(string, length)`
- `_.has(object, key)`
- `_.invert(object)`
- `_.findKey(object, predicate)`
- `_.drop(array, num)`
- `_.dropWhile(array, predicate)`
- `_.chunk(array, size)`

## Struttura del progetto
- `_.js`: implementazione delle utility
- `test/`: suite di test per ogni funzione
- `test/test-all.js`: runner per eseguire tutti i test

## Come eseguire i test
Prerequisito: Node.js installato.

Esegui tutti i test:

```bash
node test/test-all.js
```

Esegui un test specifico (esempio):

```bash
node test/chunk.js
```

## Stato attuale
Tutti i test presenti in `test/test-all.js` risultano superati.

## Descrizione progetto/esercizio
`lodash-copy` è un esercizio pratico di JavaScript che replica in modo semplificato alcune utility core di Lodash, implementando funzioni per la gestione di numeri, stringhe, array e oggetti (come `clamp`, `inRange`, `pad`, `drop`, `chunk`, `findKey` e `invert`) con approccio modulare e verificando il comportamento tramite una suite di test eseguibile da terminale con Node.js.

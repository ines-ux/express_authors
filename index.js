var express = require('express');

var app = express();

var port = 3000;

var authors = [
	{
		id: 1,
		name: 'Lawrence Nowell',
		nationality: 'UK',
		books: [ 'Beowulf' ]
	},
	{
		id: 2,
		name: 'William Shakespeare',
		nationality: 'UK',
		books: [ 'Hamlet', 'Othello', 'Romeo and Juliet', 'MacBeth' ]
	},
	{
		id: 3,
		name: 'Charles Dickens',
		nationality: 'US',
		books: [ 'Oliver Twist', 'A Christmas Carol' ]
	},
	{
		id: 4,
		name: 'Oscar Wilde',
		nationality: 'UK',
		books: [ 'The Picture of Dorian Gray', 'The Importance of Being Earnest' ]
	}
];

// exercice 0
app.get('/', function(req, res) {
	res.send('Authors API');
});

// exercice 1
app.get('/authors/:id', function(req, res) {
	console.log(req.params.id);
	var author = authors.find((el) => el.id == req.params.id);
	console.log(author);
	res.send(`${author.name}, ${author.nationality}`);
});

// exercice 2
app.get('/authors/:id/books/', function(req, res) {
	console.log(req.params.id);
	var author = authors.find((el) => el.id == req.params.id);
	console.log(author);
	res.send(`${author.books.join(', ')}`);
});

// exercice 3
app.get('*', function(req, res) {
	res.send('Erreur');
});

app.listen(port, function(req, res) {
	console.log('server started', port);
});

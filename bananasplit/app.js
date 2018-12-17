const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => 
{

  	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	var fs = require('fs');
	var lines = require('fs').readFileSync("test.txt", 'utf-8').split('\n');
	

    var i;
    var j = 1;
	for (i = 0; i < lines.length; i++) { 
		
		if(j%2 == 0 && j%3 == 0) lines[i] += ' bananasplit';	
	  	else if(j%2 == 0) lines[i] += ' banana';
	  	else if(j%3 == 0) lines[i] += ' split';	  	
	  	lines[i] = j +" " + lines[i];
	  	j++;

	}
   	var k;
   	for(k = 0; k < lines.length; k++)
   	{

   		fs.appendFile('bananasplit.txt', lines[k]+"\n", function (err) {
		  if (err) throw err;
		});
		
   	}
   	console.log("Operations Done");
});





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
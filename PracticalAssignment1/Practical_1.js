var fs = require('fs');
var http = require('http');

//open
fs.open('./PracticalData.txt', 'w', function (err, file) 
{
  if (err) throw err;
  console.log('Opened!');
    //write
    fs.writeFile('./PracticalData.txt', 'Welcome to DCS', function (err) 
    {
        if (err) throw err;
        console.log('Saved Data !');
    });
 
    //read
    http.createServer(function (req, res) 
    {
        fs.readFile('./PracticalData.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        });
    }).listen(8080);

    //append
    fs.appendFile('./PracticalData.txt', ' I am in 3 sem .', function (err) 
    {
        if (err) throw err;
        console.log('Updated!');
    });

    //replace whole data
    fs.writeFile('./PracticalData.txt', 'Welcome to Mca Department', function (err) 
    {
        if (err) throw err;
        console.log('Saved Data !');
    });

    //delete a file  
    fs.unlink('./PracticalData.txt', function (err) 
    {
        if (err) throw err;
        console.log('File deleted!');
    });

    //file rename
    fs.rename('./PracticalData.txt', 'PracticalData1.txt', function (err) 
    {
        if (err) throw err;
        console.log('File Renamed!');
    });
});



// create directory
fs.access("./sample1", function(err) {
    if (err) {
        fs.mkdir("./sample1",function(err){
            if(err){
                console.log(err);
              }else{
                  console.log("New directory successfully created.");
              }
          });
    }else{
        console.log("Given directory exist");
    }
  });
// remove directory
  fs.access("./sample1", function(err) {
    if (err) {
      console.log("Given directory not exist");
        
    }else{
       
        fs.rmdir("./sample1",function(err){
          if(err){
              console.log(err);
            }else{
                console.log("directory deleted.");
            }
        });
    }
  });  

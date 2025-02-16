// write and read the files

const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname,'files','text.txt'), 'utf8' , (err, data) => {
  if (err) throw err;
  console.log(data);
});


fs.writeFile(path.join(__dirname,'files','new.txt'), 'Hello it is a new file for writing text' , (err, data) => {
  if (err) throw err;
  console.log('writing complete');
});    // fixme: wirting new text file 

fs.appendFile(path.join(__dirname,'files','new.txt'), '/n/n thank you Hello it is a new file for writing text' , (err, data) => {
  if (err) throw err;
  console.log('append complete');
});  // fixme: added the text file and new wrting text


// todo: exit on uncought error
process.on('uncaughtException', (err) =>{
  console.log(`there was an uncaught error, ${err}`)
  process.exit(1)
});

// second method

const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname,'files','text.txt'), 'utf8' , (err, data) => {
  if (err) throw err;
  console.log(data);
});


fs.writeFile(path.join(__dirname,'files','new.txt'), 'Hello it is a new file for writing text' , (err, data) => {
  if (err) throw err;
  console.log('writing complete');
  fs.appendFile(path.join(__dirname,'files','new.txt'), '\n\n thank you Hello it is a new file for writing text' , (err, data) => {
    if (err) throw err;
    console.log('append complete');
    fs.rename(path.join(__dirname,'files','new.txt'), path.join(__dirname,'files','text.txt'), (err, data) => {
      if (err) throw err;
      console.log('rename complete');
    });
  });
});    


// todo: exit on uncought error
process.on('uncaughtException', (err) =>{
  console.log(`there was an uncaught error, ${err}`)
  process.exit(1)
});



// 3

const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'files','text.txt'), 'utf8' );
    console.log(data);
  } catch(error){
    console.error(error);
  }
}

fileOps();


// 4

const path = require('path');
const fsPromises = require('fs').promises;

const fileOps = async () => {
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'files','text.txt'), 'utf8' );
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'files','new.txt'), 'Hello it is a new file for writing text')
      console.log('writing complete');
      await fsPromises.appendFile(path.join(__dirname,'files','new.txt'), '\n\n thank you for writing')
        console.log('append complete');
      await fsPromises.rename(path.join(__dirname,'files','new.txt'), path.join(__dirname,'files','text.txt'))
      console.log('rename complete');
      await fsPromises.unlink(path.join(__dirname,'files','text.txt'));
  } catch(error){
    console.error(error);
  }
}

fileOps();


// todo: exit on uncought error
process.on('uncaughtException', (err) =>{
  console.log(`there was an uncaught error, ${err}`)
  process.exit(1)
});


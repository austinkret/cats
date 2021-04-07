const fs = require('fs');

const breedDetailsFromFile = (breed, runThisCallbackFunctionWhenWeHaveTheDataWeNeed) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      runThisCallbackFunctionWhenWeHaveTheDataWeNeed(data);
    } else {
      runThisCallbackFunctionWhenWeHaveTheDataWeNeed(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;
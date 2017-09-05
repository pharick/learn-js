// jshint esversion: 6

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(5000).then(() => console.log('Done!'));

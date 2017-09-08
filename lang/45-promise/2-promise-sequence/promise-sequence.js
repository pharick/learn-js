//jshint esversion: 6

let urls = [
  'user.json',
  'guest.json'
];

let results = [];

let promise = Promise.resolve();

urls.forEach(() => {
  promise = promise
    .then(httpGet)
    .then((result) => {
      results.push(result);
    });
});

promise.then(() => {
  console.log(results);
});

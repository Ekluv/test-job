/**
 * Use the two url's shown below to retrieve the strings they return and after they both complete,
 * concatenate both strings in the correct order with a space in between and display the result.
 * http://cdn.gfkdaphne.com/tests/async.php?a=1
 * http://cdn.gfkdaphne.com/tests/async.php?a=2
 */

function getStringFromUrl(url) {
  return fetch(url)
    .then(response => response.text());
}

const URL_1 = 'https://cdn.gfkdaphne.com/tests/async.php?a=1';
const URL_2 = 'https://cdn.gfkdaphne.com/tests/async.php?a=2';

const promiseForUrl1 = getStringFromUrl(URL_1);
const promiseForUrl2 = getStringFromUrl(URL_2);

Promise.all([promiseForUrl1, promiseForUrl2])
  .then(([text1, text2]) => console.log(`${text1} ${text2}`));


// Jokes provided from the lovely folks at https://icanhazdadjoke.com
const jokes = require('./data/jokes.json')

exports.handler = async function () {
  // Generates a random index based on the length of the jokes array
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const randomJoke = jokes[randomIndex]

  // Netlify Functions need to return an object with a statusCode
  // Other properties such as headers or body can also be included.
  return {
    statusCode: 200,
    body: JSON.stringify(randomJoke),
  }
}

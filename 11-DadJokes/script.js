//the const saves the element brang to js from html doc//
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke();



// USING ASYNC/AWAIT
async function generateJoke() {
  //call the icanhaz API and saves the result in the const jokeRes //
  const jokeRes = await fetch('https://icanhazdadjoke.com',{
      headers: {
      'Accept': 'application/json',
    }
  });

  const joke = await jokeRes.json();
  console.log(joke)
  jokeEl.innerHTML = joke.joke

}
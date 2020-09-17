async function getQuote() {
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const reponse = await fetch(apiUrl);
    const data = await reponse.json();
    console.log(data);
  } catch (error) {
    console.log('No Quote Found!', error);
  }
}

getQuote();
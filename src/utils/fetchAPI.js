// var globalvar = '';
export const fetchAPI = async (postURL, raw) => {
  console.log(raw)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(raw),
  };


  const res = await fetch(
    postURL,
    requestOptions,
  )
    .then(response =>
      response.json()
    )
    .then(data => {
      // console.log(data)
      return data
    });
  try {
    if (res !== null) {
      return res;
    } else {
      return 'null res'
    }

  } catch (e) {
    console.log('Error Message', `${e})`);
  }
};

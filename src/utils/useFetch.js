import React, { useEffect, useState } from "react";

export const useFetch = (postURL, raw) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  let requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(raw),
  };


  useEffect(() => {
    const fetchData = async () => {

      await fetch(postURL, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data !== null) {
            setData(data)
          }
        })
    }
    if (raw) { fetchData(); }


  }, [data]);

  return { data, loading }
}
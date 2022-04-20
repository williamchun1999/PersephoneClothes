
  fetch(`https://fakestoreapi.com/products/category/men's clothing`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        for (let i = 0; i < data.length; i++){
          document.querySelector(`#i${String(i)}`).src = data[i].image;
        }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


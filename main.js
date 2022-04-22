//Fetch for inputting display item images and descriptions

fetch(`https://fakestoreapi.com/products/category/men's clothing`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    for (let i = 0; i < data.length; i++) {

      document.querySelector(`#i${String(i)}`).src = data[i].image;
      document.querySelector(`#p${String(i)}`).innerText = data[i].description;
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
const requestOptions = {
  method:'PUT',
  body:JSON.stringify(
    {
      userId:3,
      date:2019-12-10,
      products:[{ productId:1,quantity:3}]
    }
  )
};
fetch(`https://fakestoreapi.com/carts/2`, requestOptions)
  .then(res => res.json())
  .then(data => console.log(data));


/***************************************************
 Code for Reveal/Hide 
***************************************************/
// Function for revealing element

const showElement = (element) => {
  element.classList.remove('hide');
}

// Function for hiding element

const hideElement = (element) => {
  element.classList.add('hide');
}

// Array of display items

const products = Array.from(document.getElementsByClassName('item'));

// Event Listener for mouse enter to show descriptions

products.forEach(display => {
  display.addEventListener('mouseenter', () => {
    showElement(display.getElementsByClassName('description')[0]);
  });

  // Event Listener for mouse leave to hide descriptions

  display.addEventListener('mouseleave', () => {
    hideElement(display.getElementsByClassName('description')[0]);
  });
})







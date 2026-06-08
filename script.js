// 05/26 I created the array to loop through the products 
const storeCatalog = [
  {
    id: "prod-01",
    name: "My Hero Academia",
    demographic: "shounen",
    starRating: 4,
    price: 9.99,
    image: "assets/images/download.jpg",
    description: "In a world filled with super powered individuals, Izuku Midoriya wants become a hero. Unfortunately, he was not born with powers to be able to become. Luckily, the greatest hero gives his power to him.",
    inStock: true
  },
  {
    id: "prod-02",
    name: "Fruits Basket",
    demographic: "shoujo",
    starRating: 5,
    price: 12.99,
    image: "assets/images/Fruitsbasket.jpg",
    description: "Tohru is a girl that is living in a tent. The Soma family learns that she lives in the tent and invite her in their home. She finds out their secret that can turn into animals when hug by the opposite sex.",
    inStock: true
  },
  {
    id: "prod-03",
    name: "Hunter x Hunter",
    demographic: "shounen",
    starRating: 5,
    price: 9.99,
    image: "assets/images/hunter.jpg",
    description: "A boy that leaves his aunt to chase after his deadbeat father , meets a kid assassin , a lone survivor of a clan that looks like a girl , and a teenage boy wanting to be a doctor tries to become hunters.",
    inStock: true
  },
  {
    id: "prod-04",
    name: "Cheeky Brat",
    demographic: "shoujo",
    starRating: 4,
    price: 11.99,
    image: "assets/images/cheeky.jpg",
    description: "Yuki , strict basketball assisstant, has a crush which a cocky underclassmen teases her about. She eventually learns becomes more open with her emotions.",
    inStock: true
  },
  {
    id: "prod-05",
    name: "Nana",
    demographic: "josei",
    starRating: 5,
    price: 13.99,
    image: "assets/images/nana.jpg",
    description: "A girl named Nana meets an another girl whose name is also Nana.They both move to Tokyo at the time and on the same train. They eventually become roomates.",
    inStock: true
  },
  {
    id: "prod-06",
    name: "Berserk",
    demographic: "seinen",
    starRating: 5,
    price: 20.99,
    image: "assets/images/berserk.jpg",
    description: "A swordmans name Guts and his friend Griffith go on journey together. They eventually part ways to do major event that scars Guts for life.",
    inStock: true
  },
  {
    id: "prod-07",
    name: "Blue Period",
    demographic: "seinen",
    starRating: 5,
    price: 12.99,
    image: "assets/images/blue.jpg",
    description: "Yatora Yaguchi is a popular highschool student that excels in school but he doesn't have any passion in his life. He eventually sees a beautiful painting that inspires him. He finds a new passion in art and tries to become an artist.",
    inStock: true
  },
  {
    id: "prod-08",
    name: "Komi Can't Communicate",
    demographic: "shounen",
    starRating: 4,
    price: 9.99,
    image: "assets/images/komi.jpg",
    description: "Tadano starts his first year in Highschool. He soon meets this beautiful girl named Komi who is very quiet and shy. Tadano helps Komi with her dream to make one hundred friends. ",
    inStock: true
  },
  {
    id: "prod-09",
    name: "Spy X Family",
    demographic: "shounen",
    starRating: 5,
    price: 9.99,
    image: "assets/images/spyxfmaily.jpg",
    description: "A spy name Twilight is assigned a misson to stop another nation from starting a war. In able to stop the war, he has to get close to one of the prime ministers and only way to do is make a family.",
    inStock: true
  }


];



// https://medium.com/@jenniferehodge1/create-cards-dynamicallyin-javascript-ac46c5eb2296





// Made this grid to push all the elements into
let grid = document.getElementById('product-grid');
grid.classList.add('grid');

// Made this for each to be able to get into the array and access the objects
storeCatalog.forEach((product) => {

  let div = document.createElement('div');
  div.classList.add('card');

  let img = document.createElement('img');
  img.classList.add('sel-img');
  img.src = product.image;

  let h2 = document.createElement('h2');
  h2.classList.add('card-title');
  h2.textContent = product.name;

  let h4 = document.createElement('h4');
  h4.classList.add('star-rating');

  h4.innerHTML = 'Star Rating: ';


  for (let x = 0; x < product.starRating; x++) {
    h4.innerHTML += '<i class="fa-solid fa-star"></i> '
  }

  let p = document.createElement('p');

  p.textContent = product.description;
  let p2 = document.createElement('p');
  p2.textContent = "Price: $" + product.price;

  const a = document.createElement('a');
  a.id = 'view';
  a.setAttribute('data-id', product.id);
  a.classList.add('btn', 'btn-primary', 'active', 'view-btn');
  a.innerHTML = 'Quick View';

  div.append(img, h2, h4, p, p2, a);
  grid.append(div);
});





// Working on the filter
const filterPriceCheap = storeCatalog.filter((cheap) => cheap.price < 10);
const filterPriceExpensive = storeCatalog.filter((expensive) => expensive.price >= 10);
const isThisShounen = storeCatalog.filter((demo) => demo.demographic === 'shounen');
const isThisShoujo = storeCatalog.filter((demo) => demo.demographic === 'shoujo');
const isThisJosei = storeCatalog.filter((demo) => demo.demographic === 'josei');
const isThisSeinen = storeCatalog.filter((demo) => demo.demographic === 'seinen');
console.log(isThisShounen);
console.log(isThisShoujo);
console.log(isThisJosei);
console.log(isThisSeinen);
console.log(filterPriceCheap);
console.log(filterPriceExpensive);

// Adding the DOM Manipulation
const showAll = document.getElementById('all');
const showShounen = document.getElementById('shounen');
const showShoujo = document.getElementById('shoujo');
const showSeinen = document.getElementById('seinen');
const showJosei = document.getElementById('josei');

showAll.addEventListener('click', function () {

  grid.innerHTML = "";

  storeCatalog.forEach((product) => {

    let div = document.createElement('div');
    div.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('sel-img');
    img.src = product.image;

    let h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.textContent = product.name;

    let h4 = document.createElement('h4');
    h4.classList.add('star-rating');

    h4.innerHTML = 'Star Rating: ';


    for (let x = 0; x < product.starRating; x++) {
      h4.innerHTML += '<i class="fa-solid fa-star"></i> '
    }

    let p = document.createElement('p');

    p.textContent = product.description;
    let p2 = document.createElement('p');
    p2.textContent = "Price: $" + product.price;

    const a = document.createElement('a');
    a.id = 'view';
    a.classList.add('.btn.btn-primary.active');
    a.innerHTML = 'Quick View';

    div.append(img, h2, h4, p, p2, a);
    grid.append(div);
  });
})

showShounen.addEventListener('click', () => {
  grid.innerHTML = "";
  if (isThisShounen === 0) {
    console.log("We don't have any shounen series");
  }

  isThisShounen.forEach((product) => {
    let div = document.createElement('div');
    div.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('sel-img');
    img.src = product.image;

    let h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.textContent = product.name;

    let h4 = document.createElement('h4');
    h4.classList.add('star-rating');

    h4.innerHTML = 'Star Rating: ';


    for (let x = 0; x < product.starRating; x++) {
      h4.innerHTML += '<i class="fa-solid fa-star"></i> '
    }

    let p = document.createElement('p');

    p.textContent = product.description;
    let p2 = document.createElement('p');
    p2.textContent = "Price: $" + product.price;

    const a = document.createElement('a');
    a.id = 'view';
    a.classList.add('.btn.btn-primary.active');
    a.innerHTML = 'Quick View';

    div.append(img, h2, h4, p, p2, a);
    grid.append(div);
  });
})

showShoujo.addEventListener('click', () => {
  grid.innerHTML = "";


  if (isThisShoujo === 0) {
    console.log("We don't have any shoujo series");
  }

  isThisShoujo.forEach((product) => {
    let div = document.createElement('div');
    div.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('sel-img');
    img.src = product.image;

    let h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.textContent = product.name;

    let h4 = document.createElement('h4');
    h4.classList.add('star-rating');

    h4.innerHTML = 'Star Rating: ';


    for (let x = 0; x < product.starRating; x++) {
      h4.innerHTML += '<i class="fa-solid fa-star"></i> '
    }

    let p = document.createElement('p');

    p.textContent = product.description;
    let p2 = document.createElement('p');
    p2.textContent = "Price: $" + product.price;

    const a = document.createElement('a');
    a.id = 'view';
    a.classList.add('.btn.btn-primary.active');
    a.innerHTML = 'Quick View';

    div.append(img, h2, h4, p, p2, a);
    grid.append(div);
  });
})

showSeinen.addEventListener('click', () => {
  grid.innerHTML = "";


  if (isThisSeinen === 0) {
    console.log("We don't have any seinen series");
  }

  isThisSeinen.forEach((product) => {
    let div = document.createElement('div');
    div.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('sel-img');
    img.src = product.image;

    let h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.textContent = product.name;

    let h4 = document.createElement('h4');
    h4.classList.add('star-rating');

    h4.innerHTML = 'Star Rating: ';


    for (let x = 0; x < product.starRating; x++) {
      h4.innerHTML += '<i class="fa-solid fa-star"></i> '
    }

    let p = document.createElement('p');

    p.textContent = product.description;
    let p2 = document.createElement('p');
    p2.textContent = "Price: $" + product.price;

    const a = document.createElement('a');
    a.id = 'view';
    a.classList.add('.btn.btn-primary.active');
    a.innerHTML = 'Quick View';

    div.append(img, h2, h4, p, p2, a);
    grid.append(div);
  });
})
showJosei.addEventListener('click', () => {
  grid.innerHTML = "";


  if (isThisJosei === 0) {
    console.log("We don't have any josei series");
  }

  isThisJosei.forEach((product) => {
    let div = document.createElement('div');
    div.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('sel-img');
    img.src = product.image;

    let h2 = document.createElement('h2');
    h2.classList.add('card-title');
    h2.textContent = product.name;

    let h4 = document.createElement('h4');
    h4.classList.add('star-rating');

    h4.innerHTML = 'Star Rating: ';


    for (let x = 0; x < product.starRating; x++) {
      h4.innerHTML += '<i class="fa-solid fa-star"></i> '
    }

    let p = document.createElement('p');

    p.textContent = product.description;
    let p2 = document.createElement('p');
    p2.textContent = "Price: $" + product.price;

    const a = document.createElement('a');
    a.id = 'view';
    a.classList.add('.btn.btn-primary.active');
    a.innerHTML = 'Quick View';

    div.append(img, h2, h4, p, p2, a);
    grid.append(div);
  });
})


Object.keys(buttons).forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    renderGrid(buttons[id]);
  });
});

// Making Something for the Quick View

const modalCatalog = [
  {
    title: "My Hero Academia",
    rating: "PG-13",
    isOngoing: false
  },
  {
    title: "Fruits Basket",
    rating: "PG-13",
    isOngoing: false
  },
  {
    title: "Hunter x Hunter",
    rating: "PG-13",
    isOngoing: true
  },
]





let modal = document.getElementsByClassName('quick'); 

a.addEventListener('click',function(){
  modal.style.display = 'flex';
})


window.addEventListener('click',function(e){
  if(e.target === modal)
  {
    modal.style.display = 'none';
  }
})


// LocalStorage Synchronization

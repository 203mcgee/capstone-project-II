// 05/26 I created the array to loop through the products 
const storeCatalog = [
  {
    id: "prod-01",
    name: "My Hero Academia",
    starRating: 4,
    price: 9.99,
    image: "assets/images/download.jpg",
    description: "In a world filled with super powered individuals, Izuku Midoriya wants become a hero. Unfortunately, he was not born with powers to be able to become. Luckily, the greatest hero gives his power to him.",
    inStock: true
  },
  {
    id: "prod-02",
    name: "Fruits Basket",
    starRating: 5,
    price: 9.99,
    image: "assets/images/Fruitsbasket.jpg",
    description: "Tohru is a girl that is living in a tent. The Soma family learns that she lives in the tent and invite her in their home. She finds out their secret that can turn into animals when hug by the opposite sex.",
    inStock: true
  },
  {
    id: "prod-03",
    name: "Hunter x Hunter",
    starRating: 5,
    price: 9.99,
    image: "assets/images/hunter.jpg",
    description: "A boy that leaves his aunt to chase after his deadbeat father , meets a kid assassin , a lone survivor of a clan that looks like a girl , and a teenage boy wanting to be a doctor tries to become hunters.",
    inStock: true
  },
  {
    id: "prod-04",
    name: "Cheeky Brat",
    starRating: 4,
    price: 11.99,
    image: "assets/images/cheeky.jpg",
    description: "Yuki , strict basketball assisstant, has a crush which a cocky underclassmen teases her about. She eventually learns becomes more open with her emotions.",
    inStock: true
  },
  {
    id: "prod-05",
    name: "Nana",
    starRating: 5,
    price: 13.99,
    image: "assets/images/nana.jpg",
    description: "A girl named Nana meets an another girl whose name is also Nana.They both move to Tokyo at the time and on the same train. They eventually become roomates.",
    inStock: true
  },
  {
    id: "prod-06",
    name: "Berserk",
    starRating: 5,
    price: 20.99,
    image: "assets/images/berserk.jpg",
    description: "A swordmans name Guts and his friend Griffith go on journey together. They eventually part ways to do major event that scars Guts for life.",
    inStock: true
  },
  {
    id: "prod-07",
    name: "Blue Period",
    starRating: 5,
    price: 12.99,
    image: "assets/images/blue.jpg",
    description: "Yatora Yaguchi is a popular highschool student that excels in school but he doesn't have any passion in his life. He eventually sees a beautiful painting that inspires him. He finds a new passion in art and tries to become an artist.",
    inStock: true
  }, 
  {
    id: "prod-08",
    name: "Komi Can't Communicate",
    starRating: 4,
    price: 9.99,
    image: "assets/images/komi.jpg",
    description: "Tadano starts his first year in Highschool. He soon meets this beautiful girl named Komi who is very quiet and shy. Tadano helps Komi with her dream to make one hundred friends. ",
    inStock: true
  },
  {
    id: "prod-09",
    name: "Spy X Family",
    starRating: 5,
    price: 9.99,
    image: "assets/images/spyxfmaily.jpg",
    description: "A spy name Twilight is assigned a misson to stop another nation from starting a war. In able to stop the war, he has to get close to one of the prime ministers and only way to do is make a family.",
    inStock: true
  }


];

//  <div class="card">
//                 <img class="sel-img" src="./assets/images/spyxfmaily.jpg" alt="A Picture of SpyXFamily Manga">
//                 <h2 class="card-title">Spy X Family</h2>
//                 <h4 class="star-rating">Star Rating: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
//                 </h4>
//                 <p class="card-description">A spy name Twilight is assigned a misson to stop another nation from
//                     starting a war. In able to
//                     stop
//                     the war, he has to get close to one of the prime ministers and only way to do is make a family.
//                 </p>
//                 <p class="price">Price: $9.99 </p>
//                //? <a id="view" class="btn btn-primary active" href="#" role="button">Quick View</a>
//             </div>


// https://medium.com/@jenniferehodge1/create-cards-dynamicallyin-javascript-ac46c5eb2296
// function displayProducts(...products){
//   let grid = document.getElementById('product-grid');
//   products.forEach((product)=>{
//     let div = document.createElement('div');
//     div.classList.add('card');
//     let img = document.createElement('img');
//     img.src = product.image;
//     let h2 = document.createElement('h2');
//     h2.textContent = product.name;
//     let h4 = document.createElement('h4');
//     h4.textContent = product.starRating;
//     let p = document.createElement('p');
//     p.textContent = product.description;
//     let p2 = document.createElement('p');
//     p2.textContent = product.price;

//    grid.append(product); // this is works somehow

//   });
// }

// displayProducts(storeCatalog);




let grid = document.getElementById('product-grid');
grid.classList.add('grid');
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

  console.log(storeCatalog.length)

  // for (let x = 0; x <= storeCatalog.length; x++) {
    
  //   // for (let y = 0; y <= product.starRating; y++) {
  //   //   console.log(y);
  //   //   console.log(product.starRating);
  //   //   h4.innerHTML += '<i class="fa-solid fa-star"></i>';
      
  //   // }
  // }
  let p = document.createElement('p');

  p.textContent = product.description;
  let p2 = document.createElement('p');
  p2.textContent = "Price: $"+product.price;
  const a =  document.createElement('a');
  a.id = 'view';
  a.classList.add('.btn.btn-primary.active');
  a.innerHTML = 'Quick View';

  div.append(img, h2, h4, p, p2,a);
  grid.append(div);
});


// SECTION data 

const iceCream = [{ id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]

const vessels = [{ id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [{ id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { id: 7, name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]


const cart = []

function drawProducts() {
  let creamTemplate = `
  <div class="col-12">
    <h1>Ice Cream</h1>
  </div>
  `
  let vesselsTemplate = `
  <div class="col-12">
  <h1>Vessels</h1>
</div>
  `
  let toppingsTemplate = `
  <div class="col-12">
  <h1>Toppings</h1>
</div>
  `
  iceCream.forEach(cream => {
    creamTemplate += `
    <div class="col-4">
    <div class="product my-4" onclick="addToCart(findProduct('ice-cream', '${cream.id}'))">
      <img src="${cream.image}" class="img-fluid p-3" alt="">
      <h3>${cream.name}: $${cream.price}</h3>
    </div>
  </div>
    `
  })
  vessels.forEach(v => {
    vesselsTemplate += `
    <div class="col-4">
    <div class="product my-4" onclick="addToCart(findProduct('vessel', '${v.id}'))">
      <img src="${v.image}" class="img-fluid p-3" alt="">
      <h3>${v.name}: $${v.price}</h3>
    </div>
  </div>
    `
  })
  toppings.forEach(t => {
    toppingsTemplate += `
    <div class="col-4">
    <div class="product my-4" onclick="addToCart(findProduct('topping', '${t.id}'))">
      <img src="${t.image}" class="img-fluid p-3" alt="">
      <h3>${t.name}: $${t.price}</h3>
    </div>
  </div>
    `
  })
  document.getElementById("toppings-list").innerHTML = toppingsTemplate
  document.getElementById("vessels-list").innerHTML = vesselsTemplate
  document.getElementById("ice-cream-list").innerHTML = creamTemplate
}

function drawCart() {
  let template = ``
  cart.forEach(i => {
    template += `
    <div class="col-6">
      <h2>${i.name}</h2>
    </div>
    <div class="col-2">
      <h2>${i.count}</h2>
   </div>
    <div class="col-2">
      <h2>${i.price}</h2>
    </div>
    <div class="col-2">
      <h2>${i.count * i.price}</h2>
    </div>
    `
  })
  document.getElementById("cart-items").innerHTML = template
}

function findProduct(type, id) {
  let searched;
  if (type == "topping") {
    searched = toppings.find(top => top.id == id)
  }
  else if (type == "ice-cream") {
    searched = iceCream.find(cream => cream.id == id)
  }
  else if (type == "vessel") {
    searched = vessels.find(ves => ves.id == id)
  }
  return searched
}

function addToCart(object) {
  let trial = cart.find(i => i.id == object.id)
  if (!trial) {
    object.count = 1
    cart.push(object)
  }
  else {
    object.count++
  }
  console.log(cart);
  drawCart()
}


// SECTION on start
drawProducts()
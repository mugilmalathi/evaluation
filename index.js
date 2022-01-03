

let url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let arr = JSON.parse(localStorage.getItem('foods')) || [];
displayFoods(arr)


async function foods(){

try{
    let food = await fetch(url);
    let data = await food.json();
    console.log(data)

   
localStorage.setItem('foods', JSON.stringify(data));
displayFoods(data)
}catch(err){
    console.log(err);
 }
}

function displayFoods(e){
    // arr.forEach(function(e){

    let div = document.createElement('div');
    div.setAttribute('id', 'foodDiv')

    let img = document.createElement('img');
    img.setAttribute('src', e.strCategoryThumb)
    img.setAttribute('class', 'foodimg')

    let name = document.createElement('h4');
    name.textContent = e.strCategory;
    name.setAttribute('class', 'name')

    let desc = document.createElement('p');
    desc.textContent = e.strCategoryDescription;
    desc.setAttribute('class', 'category')

    let price = document.createElement('h4');
    price.textContent = Math.random('$500');
    price.setAttribute('class', 'price')

    let button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.setAttribute('class', 'cart')
    button.addEventListener('click', function(){
        window.location.href = 'cart.html';
    })

    div.append(img, name, desc, price, button);
    document.querySelector('#flex').append(div);

    
    
    // })
}




document.querySelector('.signup').addEventListener('click', function(){
    window.location.href = 'registration.html'
})

document.querySelector('.login').addEventListener('click', function(){
    window.location.href = 'login.html'
})


var arr = JSON.parse(localStorage.getItem('foods'));
display(arr)

function display(e){
    // arr.map(function(e){
        let img = document.createElement('img');
        img.setAttribute('src', e.img);
    
        let price = document.createElement('h4');
        price.textContent = Math.random('$500');
    
        let button = document.createElement('button');
        button.setAttribute('class', 'buy');
        button.textContent = 'BUY NOW';
        button.addEventListener('click', function(){
    
            setTimeout(function(){
                alert("Your Order is Accepted");
            }, 3000)
    
            setTimeout(function(){
                alert("Your Order is cooked");
            }, 8000)
    
            setTimeout(function(){
                alert("Your Order is Ready");
            }, 10000)
    
            setTimeout(function(){
                alert("Your Order is Delivered..!");
                window.location.href = 'order.html';
            }, 12000)
    
        })
    
        document.getElementById('mainBox').append(img, price, button);
    // })
}
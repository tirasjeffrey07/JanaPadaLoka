
//for the 'search' button to actually work like a fomr submit button, found on
//stack overflow

// window.addEventListener("DOMContentLoaded", function () {
//     var form = document.getElementById("form-1");
//     document.getElementById("search").addEventListener("click", function () {
//         form.submit();
//       });
//   });

//navbar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//products page

let products={
    data:[{
        productName:"Deluxe Suite",
        city:"mangalore",
        category:"hotel",
        price:"8000",
        image:"images/deluxe-suite.jpg"

    },
    {
        productName:"Executive suite",
        city:"manipal",
        category:"hotel",
        price:"6000",
        image:"images/executive-suite.jpg"

    },
    {
        productName:"Standard Suite",
        city:"udupi",
        category:"hotel",
        price:"4000",
        image:"images/standard-suite.jpg"

    },
    {
        productName:"Economy Suite",
        city:"bangalore",
        category:"hotel",
        price:"2700",
        image:"images/economy-suite.jpg"

    },
    {
        productName:"Single Bed",
        city:"mangalore",
        category:"dorm",
        price:"2000",
        image:"images/singlebed-dorm.jpg"

    },
    {
        productName:"Bunk Bed",
        city:"bangalore",
        category:"dorm",
        price:"1800",
        image:"images/bunkbed-dorm.jpg"

    },
    {
        productName:"Rosa",
        city:"udupi",
        category:"guesthouse",
        price:"9000",
        image:"images/rosa-gh.jpg"

    },
    {
        productName:"Verde",
        city:"mangalore",
        category:"guesthouse",
        price:"7000",
        image:"images/verde-gh.jpg"

    },
    {
        productName:"Azul",
        city:"mangalore",
        category:"guesthouse",
        price:"8000",
        image:"images/azul-gh.jpg"

    }
    
]

};

for(let i of products.data){
    //creating cards
    let card=document.createElement("div");
    
    //card should have city and shoud stay hidden initially
    card.classList.add("card",i.category,"hide");
    
    //image div
    let imageContainer=document.createElement("div");
    imageContainer.classList.add("image-container");
    
    //image tag
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText=i.productName.toUpperCase();
    container.appendChild(name);

    //city name
    let city = document.createElement("h5");
    let textnode = document.createTextNode(i.city.toUpperCase());
    city.appendChild(textnode);
    container.appendChild(city);


    //price
    let price = document.createElement("h6");
    price.innerText="Rs "+i.price+"/-";
    container.appendChild(price);

    //hyperlink to the booking page
    let booknow = document.createElement("a");
    booknow.innerHTML="Book Now!";
    booknow.href="booking.html";
    container.appendChild(booknow);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// passed parameter from the button (which is category)
function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active"); //button stays in active state until condition becomes false
        }
        else{
            button.classList.remove("active");
        }

    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop thru all cards
    elements.forEach((element) => {
        //display all cards when 'all' button is clicked
        if(value == "all"){
         element.classList.remove("hide");   
        }
        else{
            if(element.classList.contains(value)){
                //display the corresponding element
                element.classList.remove("hide");
            }
            else{
                //hide other elements
                element.classList.add("hide");
            }

        } 


    });

}

//search button functionality
document.getElementById("search").addEventListener
 ("click", () => { 
     //initialization
     let searchInput = document.getElementById("search-input").value;
    let elements=document.querySelectorAll(".category-name");
    let cards = document.querySelectorAll(".card");
   

     //loop thru all elements
    elements.forEach((element,index) => {
        //check if text includes teh search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
            cards[index].classList.remove("hide");
        }
        else{
            //hide other cards
            cards[index].classList.add("hide");
        }
    })
}

);


//initially displays all products
window.onload = () => {
    filterProduct("all");
};
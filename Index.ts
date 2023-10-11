type Rating ={
    rate:number;
    count:number;
};

type Product ={
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

//Global variables
let allProducts: Product[] = [];

//Handlers
function filterProducts(value:String){
const filteredProducts:Product[] = allProducts.filter(p: Product) => p.title.toLowerCase().includes(value.toLowerCase())|| p.description.toLowerCase().includes(value.toLowerCase());
console.log('filteredProducts', filteredProducts);
}
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products:Product[])=>{
    //prepare HTML Table
    let tableHtml: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody></tbody>';
    //loop thru all products to generate rows on the table 
    products.forEach((p:Product) => {
        tableHtml += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    //close table body
    tableHtml += '</tbody>';
    //grab table element to set its inner HTML
    document.querySelector('#tableElement')!.innerHTML = tableHtml;
    // Hide spinner
    const spinnerElement: HTMLElement = document.querySelector('#loaderContainer')!;
    spinnerElement.style.display = 'none';

})

//Global variables
var allProducts = [];
//Handlers
function filterProducts(value) {
    var filteredProducts = allProducts.filter(function (p) { return p.title.toLowerCase().includes(value.toLowerCase()) || p.description.toLowerCase().includes(value.toLowerCase()); });
    console.log('filteredProducts', filteredProducts);
}
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    allProducts = products;
    //prepare HTML Table
    var tableHtml = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody></tbody>';
    //loop thru all products to generate rows on the table 
    products.forEach(function (p) {
        tableHtml += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    //close table body
    tableHtml += '</tbody>';
    //grab table element to set its inner HTML
    document.querySelector('#tableElement').innerHTML = tableHtml;
    // Hide spinner
    var spinnerElement = document.querySelector('#loaderContainer');
    spinnerElement.style.display = 'none';
});

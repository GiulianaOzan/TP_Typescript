fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    //Prepare table html
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    //Loop thru all product to generate rows of the table
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    // Close table body
    tableHTML += '</tbody>';
    //Grab table element to set its inner html
    document.querySelector('#tableElement').innerHTML = tableHTML;
    //hide spinner
    var spinnerElement = document.querySelector('#SpinnerContainer');
    spinnerElement.style.display = 'none';
});
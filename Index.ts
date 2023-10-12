type Rating ={
    count:number;
    rate:number;
};

type Product ={
    id: number;
    title: string;
    price: number;
    category:string;
    description: string;
    image: string;
    rating: Rating;
};


fetch ('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products :Product[]) => {
        //Prepare table html
        let tableHTML: string ='<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
        //Loop thru all product to generate rows of the table
        products.forEach((p: Product) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
        });
        // Close table body
        tableHTML += '</tbody>';
        //Grab table element to set its inner html
        document.querySelector('#tableElement')!.innerHTML = tableHTML;
        //hide spinner
        const spinnerElement : HTMLElement =document.querySelector('#SpinnerContainer')!;
        spinnerElement.style.display = 'none';
    });
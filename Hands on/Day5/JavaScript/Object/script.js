var arr = [{
        author: "Valmiki",
        book: "Ramayana",
        price: 500,
        publication: "Renuka Miller Publications",
    },

    {
        author: "Alessandro",
        book: "Amorres Perros",
        price: 600,
        publication: "Renuka Miller Publications",
    },

    {
        author: "Pulp Fiction",
        book: "Tarantino",
        price: 700,
        publication: "Renuka Miller Publications",
    },

    {
        author: "Tenet",
        book: "Nolan",
        price: 900,
        publication: "Renuka Miller Publications",
    },
];

var mapMethod = arr.map((value, index, arr) => {
    console.log(value.author);
    console.log(value.book);
    console.log(value.price);
    console.log(value.publication);
});
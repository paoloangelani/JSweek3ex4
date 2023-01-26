const book = async function () {
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/books", {
            method: "GET"
        });
        if (res.ok) {
            let booksList = await res.json();
            let card = document.getElementById("container-books");
            booksList.forEach((book) => {
                card.innerHTML += `
                    <div class="card col col-12 mb-4 mx-2" style = "width: 13rem;">
                        <img src="${book.img}" class="card-img-top" alt="${book.title} pic" >
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">${book.price}</p>
                                <a href="#" class="btn btn-primary">Skip</a>
                            </div>
                        </div>
                        `;

            });
        } else {
            console.log("qualcosa è andato storto");
        }
    } catch (error) {
        console.log(error);
    }
};

book();


const hideCard = function (eve) {
    const myCard = eve.srcElement.offsetParent;
    myCard.style.display = "none";
};
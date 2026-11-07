 async function getBooks(){
            try{
                const response = await fetch("https://upadhayay.github.io/db.json")
                const data = await response.json();

                //js dom
                const mybooks_div = document.querySelector(".papers");

                
                for (const book of data.books){
                    console.log(book)
                    const single_book_div = document.createElement("div")
                    // single_book_div.textContent = `Title: ${book.title} Year: ${book.year} Published: ${book.published}`;
                    single_book_div.innerHTML = `
                    <img src="images/paper_icon.png" alt="Paper icon">
                    <h2> Title: ${book.title} </h2>
                    <h3> Year: ${book.year} </h3>
                    <h3> Published: ${book.published} </h3>
                    `

                    single_book_div.classList.add('single_book')

                    mybooks_div.append(single_book_div)
                }
            }
            catch(error){
                // console.log("Error: ", error)
                console.log("Error in fetch;")
            } 
        }
        getBooks();
        console.log("this is fetch api example")
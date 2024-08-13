// GET THE REFERENCES
const container = document.getElementById('dynamic-content');
const links = document.querySelectorAll('nav ul li a');
let url = 'partials/articles.html';


// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
/*
IMPORTANT NOTES:
loadContent RUNS EVERY TIME A LINK IS CLICKED.
loadContent REQUIRES THE INPUT. THIS INPUT IS
THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
EVERY TIME A LINK IS CLICKED, urlFeed WILL GET
THE UPDATED PATH TO THE REQUESTED CONTENT.
*/




const loadContent = (urlFeed) => {

    // RUN THE fetch(urlFeed).then().then().catch()
    fetch(urlFeed)
        .then(function (response) {
            if (response.ok) {
                return response.text();
            }

            throw new Error('Network Issues');
        })

        .then(function (data) {
            container.innerHTML = data;
        })

        .catch (function (error){
            console.error('Error in fetching data', error);
        )}
}

// CLOSE YOUR FUNCTION loadContent HERE
loadContent(url);


// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = (event) => {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    event.preventDefault();

    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    const marker = event.target.getAttribute('href');


    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
    loadContent(marker);
}

// CLOSE YOUR FUNCTION selectContent HERE


// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!

for (let link of links) {
    link.addEventListener('click', selectContent);
}

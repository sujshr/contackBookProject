// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
let get_contacts = fetch("https://jsonplaceholder.typicode.com/users");
get_contacts.then((response) => {
    return response.json();
}).then((data) => {
    handleData(data);
}).catch((error) => {
    handleError(error);
});

// Progression 2: Display the fetched data in the form of list
function handleData(data) {
    let container = document.getElementById("contactBook");
    console.log(data);
    data.forEach(details => {
        let personDetailsDiv = document.createElement('div');
        personDetailsDiv.classList.add('contact');
        personDetailsDiv.innerHTML = `
        <p><span class="label">Name:</span> ${details.name}</p>
        <p><span class="label">Email:</span> ${details.email}</p>
        <p><span class="label">Phone:</span> ${details.phone}</p>
        <p><span class="label">Website:</span> ${details.website}</p>
        <p><span class="label">Company:</span> ${details.company.name}</p>
        <p><span class="label">City:</span> ${details.address.city}</p>
        <p><span class="label">ZipCode:</span> ${details.address.zipcode}</p>
      `;
        container.appendChild(personDetailsDiv);
    });
}
// Progression 3: When the promise call is rejected then throw an error
const handleError = (error) => {
    console.log('Promise rejected.');
    console.log(error.message);
};
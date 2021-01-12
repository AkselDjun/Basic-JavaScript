const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = form.title.value,
        text = form.text.value,
        description = form.description.value;

    // saveForm({ title, text, description });
    saveForm(title, text, description);
});

// Spread operator
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     };

//     console.log("Form data: ", formData);
// };

// Rest operator
function saveForm(...args) {

    const [title, text, description] = args;

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    };

    console.log("Form data: ", formData);
};
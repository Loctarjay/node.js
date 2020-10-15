const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer-copyright");
const copyrightElement = document.createTextNode("© " + currentYear);
footerCopyright.appendChild(copyrightElement);

const formMessage = document.getElementById("form-message").value;
console.log(formMessage);

function handlerFormSubmitted() {
    const formMessage = document.getElementById("form-message").value;
    /*$.get("/form?message="+formMessage+"", (response) => {
        console.log(response);
    });*/

    $.ajax({
        url: "/form",
        type: "POST",
        success: (response) => {
            console.log(response.data);
        },
        data: { formMessage }
    });
};

function validateForm() {
    
}
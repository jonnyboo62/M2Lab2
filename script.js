window.addEventListener('load', function (){

    const form = document.getElementById('empForm');

    form.addEventListener("submit", function(event) {
        "use strict";
        event.preventDefault();
        window.console.log(`Employee ID: ${window.document.getElementById("id").value}`);
        window.console.log(`Name: ${window.document.getElementById("name").value}`);
        window.console.log(`Extension: ${window.document.getElementById("ext").value}`);
        window.console.log(`Email: ${window.document.getElementById("email").value}`);
        window.console.log(`Department: ${window.document.getElementById("department").value}`);
    });
});

fetch("http://localhost:5000/projects")
    .then(response => response.json())
    .then(data => {

        let output = "";

        data.forEach(project => {
            output += `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        });

        document.getElementById("projects").innerHTML = output;
    })
    .catch(err => console.log(err));
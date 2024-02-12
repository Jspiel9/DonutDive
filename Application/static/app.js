const button = document.getElementById("clickBtn");

button.onclick = () => {
    // Remove the click event listener after the button is clicked once
    button.onclick = null;
    
    // Create a <div> element
    const div = document.createElement("div");
    
    // Set the content of the div to JavaScript Best Practices from W3Schools
    div.innerHTML = `
        <h2>JavaScript Best Practices</h2>
        <p>
            Here are some best practices for writing JavaScript code:
            <ul>
                <li><a href="https://www.w3schools.com/js/js_best_practices.asp" target="_blank">W3Schools - JavaScript Best Practices</a></li>
            </ul>
        </p>
    `;
    
    // Append the div to the body
    document.body.appendChild(div);
};
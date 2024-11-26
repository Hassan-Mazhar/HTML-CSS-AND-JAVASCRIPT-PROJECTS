const fetchButton = document.getElementById("fetch-btn");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

// Using Promises
function fetchPostWithPromises() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            postTitle.textContent = `Title: ${data.title}`;
            postBody.textContent = `Body: ${data.body}`;
        })
        .catch(error => {
            postTitle.textContent = "Error:";
            postBody.textContent = error.message;
        });
}

// Using Async/Await
async function fetchPostWithAsyncAwait() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        postTitle.textContent = `Title: ${data.title}`;
        postBody.textContent = `Body: ${data.body}`;
    } catch (error) {
        postTitle.textContent = "Error:";
        postBody.textContent = error.message;
    }
}

// Attach event listener to button
fetchButton.addEventListener("click", () => {
    // Uncomment one of the following based on which implementation you want to use
    // fetchPostWithPromises();
    fetchPostWithAsyncAwait();
});

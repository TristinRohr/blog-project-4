document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('postList');
    const toggleModeButton = document.getElementById('toggleMode');
    const postTheme = document.getElementById('post');
    // Get posts from localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Display posts
    if (posts.length === 0) {
        postList.innerHTML = '<p>No posts yet.</p>';
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>By: ${post.username}</p>
            <p>${post.content}</p>
            `;
            postList.appendChild(postElement);
        });
    }
});

backButton.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the landing page
});

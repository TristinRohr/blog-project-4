document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const toggleModeButton = document.getElementById('toggleMode');
    
    // Toggle light/dark mode on button click
    let isDarkMode = localStorage.getItem('darkMode') || false;
    toggleModeButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.getElementById('username').classList.toggle('dark-mode', isDarkMode)
        toggleModeButton.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
        localStorage.setItem('darkMode', isDarkMode)
    });
    

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        if (!username || !title || !content) {
            alert('Please complete the form.');
            return;
        }
        
        const postData = {
            username: username,
            title: title,
            content: content
        };

        // Store data to localStorage
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(postData);
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to posts page
        window.location.href = 'post.html';
    });
   
});


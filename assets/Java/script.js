document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const toggleModeButton = document.getElementById('toggleMode');
    
    // Check if dark mode is enabled in local storage
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

     // Set initial mode based on local storage
     if (isDarkMode) {
         enableDarkMode();
     } else {
         enableLightMode();
     }
 
     // Toggle mode button click event
     toggleModeButton.addEventListener('click', () => {
         if (isDarkMode) {
             enableLightMode();
             localStorage.setItem('darkMode', 'false');
         } else {
             enableDarkMode();
             localStorage.setItem('darkMode', 'true');
         }
     });
 
     // Function to enable light mode
     function enableLightMode() {
         document.body.classList.remove('dark-mode');
         toggleModeButton.textContent = 'Dark Mode';
         isDarkMode = false;
     }
 
     // Function to enable dark mode
     function enableDarkMode() {
         document.body.classList.add('dark-mode');
         toggleModeButton.textContent = 'Light Mode';
         isDarkMode = true;
     }

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


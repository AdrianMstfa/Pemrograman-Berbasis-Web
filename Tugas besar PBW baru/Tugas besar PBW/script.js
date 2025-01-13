document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


document.querySelector('form').addEventListener('submit', event => {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector('textarea[placeholder="Your Message"]');

    let isValid = true;

    
    if (name.value.trim() === '') {
        isValid = false;
        alert('Name is required.');
        name.focus();
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        alert('Please enter a valid email address.');
        email.focus();
        return;
    }

    
    if (message.value.trim() === '') {
        isValid = false;
        alert('Message is required.');
        message.focus();
        return;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});


const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

let comments = [];

function renderComments() {
    commentList.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <p><strong>${comment.author}</strong>: ${comment.text}</p>
            <button onclick="editComment(${index})">Edit</button>
            <button onclick="deleteComment(${index})">Delete</button>
        `;
        commentList.appendChild(commentDiv);
    });
}

function addComment(author, text) {
    comments.push({ author, text });
    renderComments();
}

function editComment(index) {
    const newAuthor = prompt('Edit your name:', comments[index].author);
    const newText = prompt('Edit your comment:', comments[index].text);
    if (newAuthor && newText) {
        comments[index] = { author: newAuthor, text: newText };
        renderComments();
    }
}

function deleteComment(index) {
    if (confirm('Are you sure you want to delete this comment?')) {
        comments.splice(index, 1);
        renderComments();
    }
}

commentForm.addEventListener('submit', event => {
    event.preventDefault();
    const author = document.getElementById('comment-author').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    if (author && text) {
        addComment(author, text);
        commentForm.reset();
    } else {
        alert('Both fields are required!');
    }
});

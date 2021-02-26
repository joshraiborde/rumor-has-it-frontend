const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")
const postURL = `http://localhost:3000/posts`
const commentURL = `http://localhost:3000/comments`

// postForm.addEventListener("submit", Post.submitPost)
// Post.fetchPosts()

document.getElementById("clickButton").addEventListener("click", Post.submitPost)

Post.fetchPosts()

document.getElementById("post-form").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
        e.preventDefault();

        Post.submitPost();

    }
  }




// postForm.addEventListener(Post.submitPost)
// document.getElementById("clickButton").addEventListener("click", Post.submitPost)

// Post.fetchPosts()

// window.onload = function() {
//     Post.fetchPosts()
// }


// document.addEventListener('DOMContentLoaded', () => {
//     Post.fetchPosts()
//     })




// postForm.addEventListener('submit', (e) => this.getPreset(e))
// document.addEventListener('DOMContentLoaded', () => {

//     Post.fetchPosts()
// })

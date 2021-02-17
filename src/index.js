const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")
const postURL= `http://localhost:3000/posts`
const commentURL= `http://localhost:3000/comments`


function fetchPosts(){
    fetch(postURL)
    .then(res => res.json())
    .then(posts => posts.forEach(post => renderPost(post.content)))
}

postForm.addEventListener("submit", submitPost)

// fetch request
function submitPost() {
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept-type": "application/json"
        },
        body: JSON.stringify({
            content: postInput.value
        })
    }
    fetch(postURL, configObj)

    renderPost(postInput.value)
}
 
// render post to dom
function renderPost(post){
    const li = document.createElement('li') // contains the info from the post and comment form.

    const p = document.createElement('p')
    p.innerText = post
    

    // comment form element
    const commentForm = document.createElement('form')
    commentForm.innerHTML += `<input type="text" id="comment-input"><input type="submit">`
    commentForm.addEventListener("submit", renderComment)

    const commentList = document.createElement('ul')

    li.append(p,  commentForm, commentList)

    postList.appendChild(li)

    postForm.reset()

}

function renderComment(e){ // using e.target can identify which form a comment goes into
    e.preventDefault()
    const commentInput = e.target.children[0].value
    const commentList = e.target.nextElementSibling

    const li = document.createElement('li')
    li.innerText = commentInput
    commentList.appendChild(li)

    submitComment(commentInput)

    e.target.reset() // in the comment form, this will reset the input slot, after the submit button is clicked
}

function submitComment(comment){
    fetch(commentURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept-type": "application/json"
        },
        body: JSON.stringify({
            content: comment 
        })
    })
}

 

fetchPosts()


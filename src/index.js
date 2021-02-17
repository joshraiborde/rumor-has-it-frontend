const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")
const postURL= `http://localhost:3000/posts`


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
function renderPost(){
    const li = document.createElement('li') // contains the info from the post and comment form.

    const p = document.createElement('p')
    p.innerText = postInput.value
    

    // comment form element
    const commentForm = document.createElement('form')
    commentForm.innerHTML += `<input type="text" id="comment-input"><input type="submit">`
    commentForm.addEventListener("submit", submitComment)

    const commentList = document.createElement('ul')

    li.append(p,  commentForm, commentList)

    postList.appendChild(li)

    postForm.reset()

}

function submitComment(e){ // using e.target can identify which form a comment goes into
    e.preventDefault()
    const commentInput = e.target.children[0].value
    const commentList = e.target.nextElementSibling

    const li = document.createElement('li')
    li.innerText = commentInput
    commentList.appendChild(li)

    e.target.reset() // in the comment form, this will reset the input slot, after the submit button is clicked
}

fetchPosts()

 // stopped at 00:47:00
 // page 6, number 70
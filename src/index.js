const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")

postForm.addEventListener("submit", submitPost)

function submitPost() {
    event.preventDefault()
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

 
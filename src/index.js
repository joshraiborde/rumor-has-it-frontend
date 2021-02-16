const postForm = document.getElementById("post-form")
const postInput = document.getElementById("post-input")
const postList = document.getElementById("post-list")

postForm.addEventListener("submit", submitPost)

function submitPost() {
    event.preventDefault()
    console.log(postInput.value)
    const li = document.createElement('li') // contains the info from the post and comment form.

    const p = document.createElement('p')
    p.innerText = postInput.value
    

    // comment form element
    const commentForm = document.createElement('form')
    commentForm.innerHTML += `<input type="text"><input type="submit">`
    li.append(p,  commentForm)

    postList.appendChild(li)

}

 
class Post{

    static allPosts = []

    constructor(post){
        this.id = post.id
        this.content = post.attributes.content
        this.comments = post.attributes.comments
        Post.allPosts.push(this)
    }

    

}
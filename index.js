
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },

]

const postSection = document.getElementById('insta-post-1')

for (post of posts){
    postSection.innerHTML += `
    <section class="insta-post">
    <div class="user-info">
        <img class="user-thumb" src=${post.avatar} alt="">
    <span class="user-info-text">
        <h1 class="user-name">${post.name}</h1>
        <p class="user-location">${post.location}</p>
    </span>
    </div>

    <img class="user-post" src=${post.post} alt="">

    <div id="interaction">
        <div class="react-icons">
            <img src="images/icon-heart.png" alt="">
            <img src="images/icon-comment.png" alt="">
            <img src="images/icon-dm.png" alt="">
        </div>

        <div class="like-info">
            <h1 class="like-numbers">${post.likes}</h1> <p class="likes">likes</p>
        </div>

        <div class="commentary">
            <h1 class="user-id">${post.username}</h1>
            <p class="user-commentary">${post.comment}</p>
        </div>
    </div>
 </section>

    <div class='break'></div>
    
    `
}
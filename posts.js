function posts() {
    fetch("/res/json/posts.json")
    .then((response) => response.json())
    .then(posts => {
        const postsContainer = document.getElementById("posts-container");

        for (let post of posts) {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            const authorDiv = document.createElement("div");
            authorDiv.classList.add("author");
            authorDiv.textContent = `Author: ${post.author}`;

            const creationDiv = document.createElement("div");
            creationDiv.classList.add("creation");
            creationDiv.textContent = `Creation Date: ${post.creation}`;

            const pictureImg = document.createElement("img");
            pictureImg.classList.add("picture");
            pictureImg.src = post.picture;
            pictureImg.alt = post.caption;

            const captionDiv = document.createElement("div");
            captionDiv.classList.add("caption");
            captionDiv.textContent = post.caption;

            const profilepicImg = document.createElement("img");
            profilepicImg.classList.add("profilepic");
            profilepicImg.src = post.profilepic;
            profilepicImg.alt = `Profile Pic of ${post.author}`;

            const likeImg = document.createElement("img");
            likeImg.classList.add("like");
            likeImg.src = post.like;
            likeImg.alt = "Like";

            postDiv.appendChild(authorDiv);
            postDiv.appendChild(creationDiv);
            postDiv.appendChild(pictureImg);
            postDiv.appendChild(captionDiv);
            postDiv.appendChild(profilepicImg);
            postDiv.appendChild(likeImg);

            postsContainer.appendChild(postDiv);
        }
    })
};

function dropdownmenu(){
    const dropdown = document.getElementsByClassName("logo");
    const content = document.getElementsByClassName("dropdown-content");
    var isdropdown = false;
    dropdown[0].onclick = function(){
        if (isdropdown){
            content[0].style.display = "none";
            isdropdown = false
        }else{
            content[0].style.display = "block";
            isdropdown = true;
        }
    }
}

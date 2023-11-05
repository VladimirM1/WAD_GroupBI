function posts() {
    fetch("https://api.npoint.io/7d9797c9cba2f88c625e")
    .then((response) => response.json())
    .then(posts => {
        const postsContainer = document.getElementById("posts-container");

        for (let post of posts) {
            console.log(post);

            const postContainer = document.createElement('div');
            const postDateElement = document.createElement('span');
            const profilePicElement = document.createElement('img');
            const likeElement = document.createElement('img');
            const likeAnchor = document.createElement('a');
            likeAnchor.href = '#';
            const profilePicAnchor = document.createElement('a');
            profilePicAnchor.href = '#';

            profilePicElement.className = "post-profile-pic";
            profilePicElement.setAttribute("width", "6%");
            likeElement.setAttribute("width", "7%");
            profilePicElement.src = post.profilepic;
            likeElement.src = post.like;
            postDateElement.textContent = post.creation;
            const postCaptionElement = document.createElement('p');
            postCaptionElement.textContent = post.caption;
            const postImageElement = document.createElement("img");
            postImageElement.className = "post-image";
            postImageElement.src = post.picture;

            likeAnchor.appendChild(likeElement);
            profilePicAnchor.appendChild(profilePicElement);

            postContainer.appendChild(profilePicAnchor);
            postContainer.appendChild(postDateElement);
            postContainer.appendChild(postImageElement);
            postContainer.appendChild(postCaptionElement);
            postContainer.appendChild(likeAnchor);

            const flexContainer = document.getElementsByClassName("flex-container");
            flexContainer[0].appendChild(postContainer);
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

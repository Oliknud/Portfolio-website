const blogContainer = document.querySelector(".blogs");
const blogUrl = "https://knudsenweb.no/wp-json/wp/v2/posts?_embed=true&per_page=3";


function blogList(posts) {
    for (post of posts) {
        let img = post._embedded["wp:featuredmedia"][0].source_url;
        
        blogContainer.innerHTML += `<div class="index-card post">
                                        <h3>${post.title.rendered}</h3>
                                        <img src="${img}">
                                        <a href="#" class="view-btn">View post</a>
                                    </div>`
    }
}




fetch(blogUrl)
    .then(response => response.json())
    .then(data => blogList(data))
    .catch((error) => {
        console.log(error)
    });
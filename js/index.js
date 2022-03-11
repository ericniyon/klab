// javascript for index.html
const conteiner = document.querySelector('.blogs');

const getingPost = async () => {
  const url = 'http://localhost:3000/posts';
  const res = await fetch(url);
  const posts = await res.json();

  let template = '';

  posts.forEach(post => {
    template += `
    <div class="posts">
    <h2>${post.title}</h2>
    <p><small>${post.likes} likes</small></p>
    <p>${post.body.slice(0,150)}</p>
    <a href="/details.html?id=${post.id}">Read more</a>
    </div>
   `;
  });
  conteiner.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => getingPost());

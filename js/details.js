// javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');

const blogDetails = document.querySelector('.details');

const getDeteails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id);

  // const res = await fetch(url + id);
  const post = await res.json();

  let template = `
    <div class="posts">
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </div>
   `;
  blogDetails.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => getDeteails());

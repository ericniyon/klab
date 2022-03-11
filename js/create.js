// javascript for create.html

const createForm = document.querySelector('form');
const createBtn = document.querySelector('button');

const createBlog = async (e) => {
  e.preventDefault();

  let info = {
    title: createForm.title.value,
    body: createForm.body.value,
    likes: 0,
  };

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(info),
    headers: { 'Content-Type': 'application/json' },
  });

  window.location.replace('/index.html');
};

createForm.addEventListener('submit', createBlog);

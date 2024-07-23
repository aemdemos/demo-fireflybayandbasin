
export default function decorate(block) {
  // Adding a class to the block
  block.classList.add('cards');

  // Selecting all the children of the block
  const children = Array.from(block.children);
  
  children.forEach((child) => {
    const newWrapper = document.createElement('div');
    newWrapper.classList.add('card-wrapper');
    
    const title = child.querySelector('h2');
    const description = child.querySelector('p');
    const link = child.querySelector('a');
    const img = child.querySelector('img');

    if (title) {
      const titleWrapper = document.createElement('div');
      titleWrapper.classList.add('card-title');
      titleWrapper.appendChild(title);
      newWrapper.appendChild(titleWrapper);
    }

    if (description) {
      const descriptionWrapper = document.createElement('div');
      descriptionWrapper.classList.add('card-description');
      descriptionWrapper.appendChild(description);
      newWrapper.appendChild(descriptionWrapper);
    }

    if (link) {
      const linkWrapper = document.createElement('div');
      linkWrapper.classList.add('card-link');
      linkWrapper.appendChild(link);
      newWrapper.appendChild(linkWrapper);
    }

    if (img) {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('card-image');
      imgWrapper.appendChild(img);
      newWrapper.appendChild(imgWrapper);
    }

    child.innerHTML = '';
    child.appendChild(newWrapper);
  });
}

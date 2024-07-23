
export default function decorate(block) {
  // Add classes to the elements to match the target HTML structure.
  block.classList.add('hero');

  const innerDiv = block.querySelector('div');
  const contentDiv = innerDiv.querySelector('div');

  contentDiv.classList.add('hero-content');

  const heading1 = contentDiv.querySelector('h1');
  const heading2 = contentDiv.querySelector('h2');
  const paragraph1 = contentDiv.querySelector('p');
  const paragraph2 = contentDiv.querySelector('p + p');

  heading1.classList.add('hero-heading1');
  heading2.classList.add('hero-heading2');
  paragraph1.classList.add('hero-paragraph');
  paragraph2.classList.add('hero-link');

  const link = paragraph2.querySelector('a');
  link.classList.add('hero-button');
}

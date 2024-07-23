
export default function decorate(block) {
  const img = block.querySelector('img');
  const h1 = block.querySelector('h1');
  const h2 = block.querySelector('h2');
  const p = block.querySelectorAll('p');
  const a = block.querySelector('a');

  // Add classes for styling
  img.classList.add('hero-firefly-img');
  h1.classList.add('hero-firefly-h1');
  h2.classList.add('hero-firefly-h2');
  p.forEach((paragraph) => paragraph.classList.add('hero-firefly-p'));
  a.classList.add('hero-firefly-a');

  // Structure the HTML to match the desired layout
  block.innerHTML = `
    <div class="hero-firefly-content">
      <div class="hero-firefly-text">
        ${h1.outerHTML}
        ${h2.outerHTML}
        ${Array.from(p).map((paragraph) => paragraph.outerHTML).join('')}
        ${a.outerHTML}
      </div>
      <div class="hero-firefly-image">
        ${img.outerHTML}
      </div>
    </div>
  `;
}

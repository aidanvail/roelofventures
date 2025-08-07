const projectImageCount = 60;
const projectImages = Array.from(
  { length: projectImageCount },
  (_, i) => `images/project${i + 1}.jpg`
);

const projectsGrid = document.querySelector('.projects-grid');
const loadMoreBtn = document.getElementById('loadMore');
let imagesLoaded = 0;
const imagesPerLoad = 12;

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function createCard(file, index) {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  const picture = document.createElement('picture');
  const webpSource = document.createElement('source');
  webpSource.type = 'image/webp';
  webpSource.srcset = file.replace(/\.[^/.]+$/, '.webp');
  const img = document.createElement('img');
  img.src = file;
  img.alt = `Project image ${index + 1}`;
  img.loading = 'lazy';
  img.decoding = 'async';
  picture.appendChild(webpSource);
  picture.appendChild(img);
  card.appendChild(picture);
  projectsGrid.appendChild(card);
  observer.observe(card);
}

function loadImages() {
  const slice = projectImages.slice(imagesLoaded, imagesLoaded + imagesPerLoad);
  slice.forEach((file, idx) => createCard(file, imagesLoaded + idx));
  imagesLoaded += slice.length;
  if (imagesLoaded >= projectImages.length) {
    loadMoreBtn.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadImages();
  loadMoreBtn.addEventListener('click', loadImages);
});

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

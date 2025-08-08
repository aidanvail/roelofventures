const projectImages = [
'2LB-House-by-Raphaël-Nussbaumer-Architectes-01.jpg',
'9e415847efe69fb060683df2d5e2fdc4.jpg',
'2013-11-21 12.27.41.jpg',
'2013-11-21 12.29.36.jpg',
'2013-11-21 12.31.27.jpg',
'2014-09-10 11.20.26.jpg',
'3731dbd21ad58476f8b8def8dd4ea60f.jpg',
'3842.jpg',
'3908.jpg',
'3999.jpg',
'4008.jpg',
'4038.jpg',
'4060.jpg',
'4065.jpg',
'4082.jpg',
'69017_514124231976106_128607971_n.jpg',
'531116_485446544833872_2069607165_n.jpg',
'870214f03d1eaa4b979ff46f6f4ea340.jpg',
'1053029_507869422601587_187732591_o.jpg',
'1236972_533113756743820_1525563638_n.jpg',
'1377330_529549663786921_1710321252_n.jpg',
'10603404_675908629130998_1150541929338612471_n.jpg',
'10696261_694719080583286_1935969984063605957_n (1).jpg',
'AFGRI BYLS BRIDGE 038.jpg',
'AFGRI BYLS BRIDGE 043.jpg',
'AFGRI BYLS BRIDGE 066.jpg',
'AFGRI BYLS BRIDGE 089.jpg',
'DSC_0076.JPG',
'DSCF2554.JPG',
'DSCF2559.JPG',
'DSCF2562.JPG',
'IMG_20151021_100504.jpg',
'IMG_20151021_100548.jpg',
'IMG_20210418_142707.jpg',
'IMG_20210514_125458.jpg',
'IMG_20210602_091136.jpg',
'IMG_20210713_142445.jpg',
'IMG_20210805_165455.jpg',
'Lord Charles 001.jpg',
'Lord Charles 002.jpg',
'Lord Charles 003.jpg',
'Lord Charles 006.jpg',
'Lord Charles 008.jpg',
'scaled0nb1bp.JPG',
'scaled9ke7sh.JPG',
'Screenshot_20210805_215917_com.whatsapp_edit_72572909677987.jpg',
'Screenshot_20210805_215925_com.whatsapp_edit_72548424754554.jpg',
'Screenshot_20210805_215932_com.whatsapp_edit_72520528914454.jpg',
'Wonderboom 004.jpg',
'Wonderboom 007.jpg',
'Wonderboom 009.jpg',
'Wonderboom 033.jpg',
'WP_000018.jpg',
'WP_000019.jpg',
'WP_000032.jpg',
'WP_000038.jpg',
'WP_000046.jpg',
];

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
  const img = document.createElement('img');
  img.src = file;
  img.alt = `Project image ${index + 1}`;
  img.loading = 'lazy';
  img.decoding = 'async';
  card.appendChild(img);
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

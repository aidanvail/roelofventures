const projectImages = [
'e1c7b89e996c60b9e1811fd238bb393.jpg',
'2LB-House-by-Raphaël…s-01.jpg',
'9e415847efe69fb060683…fdc4.jpg',
'183dfef303812f22ef8a6c…238.jpg',
'2013-11-21 12.27.41.jpg',
'2013-11-21 12.29.36.jpg',
'2013-11-21 12.31.27.jpg',
'2014-09-10 11.20.26.jpg',
'3731dbd21ad58476f8b8…ea60f.jpg',
'3842.jpg',
'3908.jpg',
'3999.jpg',
'4008.jpg',
'4038.jpg',
'4060.jpg',
'4065.jpg',
'4082.jpg',
'69017_514124231976106…71_n.jpg',
'531116_48544654483838…5_n.jpg',
'870214f03d1eaa4b979ff4…a340.jpg',
'934792_7488285684915…55_n.jpg',
'1049244_540308082695…79_o.jpg',
'1053029_507869422601…91_o.jpg',
'1185858_523067557765…69_n.jpg',
'1186264_628910547129…44_n.jpg',
'1236972_5331137567473…38_n.jpg',
'1270605_4004944034111…66_n.jpg',
'1270975_636533359700…66_o.jpg',
'1377330_52954966378e…52_n.jpg',
'1392748_356593434478…25_n.jpg',
'10153796_69471486391…47_n.jpg',
'10525917_74080212262…63_n.jpg',
'10603404_6759098629133…71_n.jpg',
'10696261_69471908058…n (1).jpg',
'AFGRI BYLS BRIDGE 038.jpg',
'AFGRI BYLS BRIDGE 043.jpg',
'AFGRI BYLS BRIDGE 048.jpg',
'AFGRI BYLS BRIDGE 066.jpg',
'AFGRI BYLS BRIDGE 089.jpg',
'Butterfly-Beach-by-Maie…n-16.jpg',
'Celadon-Villa-in-Koh-Sa…d-08.jpg',
'DSC_0076.JPG',
'DSCF0694.JPG',
'DSCF2039.JPG',
'DSCF2554.JPG',
'DSCF2555.JPG',
'DSCF2559.JPG',
'DSCF2562.JPG',
'DSCF3976.JPG',
'WP_000046.jpg',
'WP_000038.jpg',
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
'scaled9bhe1.JPG',
'scaled9ke7sh.JPG',
'Screenshot_20210805_2…7987.jpg',
'Screenshot_20210805_2…4554.jpg',
'Screenshot_20210805_2…454.jpg',
'Wonderboom 004.jpg',
'Wonderboom 007.jpg',
'Wonderboom 009.jpg',
'Wonderboom 033.jpg',
'WP_000018.jpg',
'WP_000019.jpg',
'WP_000032.jpg',
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

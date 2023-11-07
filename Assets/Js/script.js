const links = document.querySelectorAll('ul li a');
const borders = document.querySelectorAll('.border-b');
const projectItem = document.querySelectorAll('.project-item');
const projectHover = document.querySelectorAll('.project-hover');
const itemHover = document.querySelectorAll('.project-item h2');
const social = document.querySelectorAll('.social');
const segFoot = document.querySelectorAll('.second-foot ul li a');
const borderBo = document.querySelectorAll('.border-bo');
const menuMobile = document.querySelector('.menu-mobile');
const container = document.querySelector('.container');
const homeAbout = document.querySelector('.home-about');
const homeList = document.querySelector('.home-li');

links.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    borders[index].style.display = 'block';
  });
  link.addEventListener('mouseout', () => {
    borders[index].style.display = 'none';
  });
});

 function checkSize() {
  projectItem.forEach((e) => {
    if(window.innerWidth <= 750) {
      const img = e.getAttribute('data-img');
      e.style.backgroundImage = `url(./Assets/images/mobile/${img}.jpg)`;
    }else {
      const img = e.getAttribute('data-name');
      e.style.backgroundImage = `url(./Assets/images/desktop/${img}.jpg)`;
    }
  })
 };

 window.addEventListener('load', checkSize);
 window.addEventListener('resize', checkSize);



projectHover.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    itemHover[index].style.color = 'black';
  });
  link.addEventListener('mouseout', () => {
    itemHover[index].style.color = 'white';
  });
});

segFoot.forEach((l, i) => {
  l.addEventListener('mouseover', () => {
    borderBo[i].style.backgroundColor = 'white';
  });
  l.addEventListener('mouseout', () => {
    borderBo[i].style.backgroundColor = 'black';
  });
});

social.forEach((b) => {
  const soc = b.getAttribute('data-social');
  b.style.backgroundImage = `url(./Assets/images/${soc}.svg)`;
})

menuMobile.addEventListener('click', () => {
  if(homeList.classList.contains('none')) {
    menuMobile.style.backgroundImage = 'url(./Assets/images/icon-close.svg)';
    homeList.classList.remove('none');
    homeList.classList.add('contents');
    container.style.backgroundImage = 'url()';
    container.style.backgroundColor = 'black';
    homeAbout .style.display = 'none';
  }else if(homeList.classList.contains('contents')) {
    menuMobile.style.backgroundImage = 'url(./Assets/images/icon-hamburger.svg)';
    homeList.classList.remove('contents');
    homeList.classList.add('none');
    container.style.backgroundImage = 'url(./Assets/images/mobile/image-hero.jpg)';
    container.style.backgroundColor = 'red';
    homeAbout.style.display = 'flex';
    homeAbout.style.flexDirection = 'column';
  }
})
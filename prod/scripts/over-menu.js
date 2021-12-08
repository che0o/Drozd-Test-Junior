const menuOverlay = document.querySelector('.menu-overlay');

const menuServices = document.querySelector('.menu-services');
const contentBottom = document.querySelector('.menu__content-bottom');
const servicesBtn = document.getElementById('services-btn');

const menuServicesHeader = document.querySelector('.menu-services__header');
const menuServicesOptions = document.querySelector('.menu-services__options');
const servOptItem = document.querySelector('.menu-services__options--item');
const menuCloud = document.querySelector('.menu-cloud');
const menuCloudHeader = document.querySelector('.menu-cloud__header');



servicesBtn.onclick = (e) => {
    menuOverlay.style.marginLeft = '-9999px';
  contentBottom.style.marginLeft = '-200px';

    menuServices.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    contentBottom.classList.toggle('active');
  
};

menuServicesHeader.onclick = () => {
  menuServices.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  contentBottom.classList.toggle('active');

    menuOverlay.style.marginLeft = '0px';
    contentBottom.style.marginLeft = '0px';
};

servOptItem.onclick = () => {
  menuServicesOptions.style.marginLeft = '-200px';

    menuServices.classList.toggle('active');
    menuCloud.classList.toggle('active');
};

menuCloudHeader.onclick = () => {
  menuCloud.classList.toggle('active');
  menuServices.classList.toggle('active');

    menuServicesOptions.style.marginLeft = '0px';
};
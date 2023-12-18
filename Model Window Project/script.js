'use strict';
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');

const btnsOpenModel = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', function () {
    console.log(btnsOpenModel[i]);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const closingFun = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModel.addEventListener('click', closingFun);
overlay.addEventListener('click', closingFun);

//Adding Escape button for closing the model

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closingFun();
  }
});

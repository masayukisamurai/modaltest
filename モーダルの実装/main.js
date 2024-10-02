const xModal = document.getElementById('xModal');

const btn = document.getElementById('btn');

const modalFlame = document.getElementById('modal-frame');

btn.onclick = function () {
  xModal.style.display = 'block';
};

modalFlame.onclick = function () {
  xModal.style.display = 'none';
};
document.onclick = function (event) {
  if (event.target == xModal) {
    xModal.style.display = 'none';
  }
};

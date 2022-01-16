const p = document.querySelectorAll('p');
p[0].textContent.trim().length;

const arrayP = Array.from(p);
const getLength = (element) => element.innerText.length;

const lengthAllp = arrayP.reduce((total, valor) => {
  return (total += getLength(valor));
}, 0);

lengthAllp;

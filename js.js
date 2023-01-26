let heading = document.querySelector('h2');

const vsCode = document.querySelector('#vs-code');
vsCode.addEventListener('click', () => {
	vsCode.classList.toggle('vs-code');
	heading.innerText = 'Creating Logo of Visual Studio Code like a button';
});

const arrowUp = document.querySelector('#arrow-up');
arrowUp.addEventListener('click', () => {
	arrowUp.classList.toggle('arrow-up');
	heading.innerText = 'upper arrow button';
});

const arrow2 = document.querySelector('#arrow-2');
arrow2.addEventListener('click', () => {
	arrow2.classList.toggle('arrow-2');
	heading.innerText = 'arrow button';
});

const arrow = document.querySelector('#arrow');
arrow.addEventListener('click', () => {
	arrow.classList.toggle('arrow');
});

const cross = document.querySelector('#cross');
cross.addEventListener('click', () => {
	cross.classList.toggle('cross');
});

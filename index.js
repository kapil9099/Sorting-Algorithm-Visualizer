let array = [];
let isSorting = false;

function generateRandomArray() {
    if (isSorting) return;
    array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 10);
    renderArray();
}

function generateArrayFromInput() {
    if (isSorting) return;
    const input = document.getElementById('array-input').value;
    array = input.split(',').map(Number);
    renderArray();
}

function renderArray() {
    const container = document.getElementById('array-container');
    container.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value}px`;
        container.appendChild(bar);
    });
}

async function animateSwap(i, j) {
    const bars = document.querySelectorAll('.bar');
    bars[i].classList.add('active');
    bars[j].classList.add('active');
    await sleep(100);
    bars[i].classList.remove('active');
    bars[j].classList.remove('active');
}

function sortArray(algorithm) {
    if (isSorting) return;
    const sortingAlgorithm = sortingAlgorithms[algorithm];
    if (sortingAlgorithm) {
        isSorting = true;
        sortingAlgorithm(array).then(() => isSorting = false);
    }
}

generateRandomArray();

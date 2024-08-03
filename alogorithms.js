const sortingAlgorithms = {
    bubbleSort: async function(arr) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    renderArray();
                    await animateSwap(j, j + 1);
                }
            }
        }
    },

    quickSort: async function(arr, low = 0, high = arr.length - 1) {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await sortingAlgorithms.quickSort(arr, low, pi - 1);
            await sortingAlgorithms.quickSort(arr, pi + 1, high);
        }
    }
};

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
            renderArray();
            await animateSwap(i, j);
        }
    }
    swap(arr, i + 1, high);
    renderArray();
    await animateSwap(i + 1, high);
    return i + 1;
}

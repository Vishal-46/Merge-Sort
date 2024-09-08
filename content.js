let data = [8, 3, 5, 2, 9, 1, 6, 7];
let bars = [];
let w = 20;
let h = 400;

function setup() {
    createCanvas(400, 400);
    bars = [];
    for (let i = 0; i < data.length; i++) {
        bars.push(data[i]);
    }
    mergeSort(data, 0, data.length - 1);
}

function draw() {
    background(255);
    for (let i = 0; i < bars.length; i++) {
        let barHeight = map(bars[i], 0, max(bars), 0, height);
        fill(100, 150, 255);
        rect(i * w, height - barHeight, w, barHeight);
    }
}

function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L = arr.slice(left, mid + 1);
    let R = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
        bars = [...arr];
        redraw();
        noLoop();
        setTimeout(() => loop(), 500);
    }

    while (i < n1) {
        arr[k++] = L[i++];
        bars = [...arr];
        redraw();
        noLoop();
        setTimeout(() => loop(), 500);
    }

    while (j < n2) {
        arr[k++] = R[j++];
        bars = [...arr];
        redraw();
        noLoop();
        setTimeout(() => loop(), 500);
    }
}

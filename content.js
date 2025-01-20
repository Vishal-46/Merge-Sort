let data = [8, 3, 5, 2, 9, 1, 6, 7];
let bars = [];
let w = 40; // Width of bars
let h = 400; // Height of canvas
let i = 0, j = 0;
let sorting = false;
function setup() {
    createCanvas(400, 400);
    bars = data.slice(); // Copy the data to bars
    noLoop(); // Stop draw loop, we'll manually control the animation
    selectionSort();
}

function draw() {
    background(255);
    for (let k = 0; k < bars.length; k++) {
        let barHeight = map(bars[k], 0, max(bars), 0, height);
        fill(100, 150, 255);
        rect(k * w, height - barHeight, w - 2, barHeight);
    }
}

function selectionSort() {
    if (i < bars.length - 1) {
        let minIndex = i;
        if (j < bars.length) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j;
            }
            j++;
            bars = bars.slice(); // Update visualization
            redraw(); // Redraw the canvas
            noLoop(); // Pause animation
            setTimeout(() => {
                loop(); // Resume animation after delay
                selectionSort();
            }, 500);
        } else {
            if (minIndex !== i) {
                // Swap bars[i] and bars[minIndex]
                let temp = bars[i];
                bars[i] = bars[minIndex];
                bars[minIndex] = temp;
            }
            i++;
            j = i;
            selectionSort();
        }
    }
}

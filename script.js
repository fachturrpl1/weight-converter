const inputWeight = document.getElementById("weight");

const inputUnit = document.getElementById("units");

const rKg = document.getElementById("kg");
const rLb = document.getElementById("lb");
const rSt = document.getElementById("st");
const rOz = document.getElementById("oz");
const rG = document.getElementById("g");

function convert() {
    const weight = parseFloat(inputWeight.value);
    const unit = inputUnit.value;

    if (isNaN(weight)) {
        rKg.textContent = "0";
        rLb.textContent = "0";
        rSt.textContent = "0";
        rOz.textContent = "0";
        rG.textContent = "0";
        return;
    }

    let rWeight = 0;

    if (unit === "ukg") {
        rWeight = weight;
    } else if (unit === "ulb") {
        rWeight = weight * 0.45359237;
    } else if (unit === 'ust') {
        rWeight = weight * 6.35029318;
    } else if (unit === 'uoz') {
        rWeight = weight * 0.0283495;
    } else if (unit === 'ug') {
        rWeight = weight * 0.001;
    }

    rKg.textContent = rWeight.toFixed(4);
    rLb.textContent = (rWeight / 0.45359237).toFixed(6);
    rSt.textContent = (rWeight / 6.35029318).toFixed(6);
    rOz.textContent = (rWeight * 35.2739619).toFixed(3);
    rG.textContent = (rWeight * 1000).toFixed(0);
}

inputWeight.addEventListener("input", convert);
inputUnit.addEventListener("change", convert);
const convertBtn = document.querySelector("#convertBtn");
convertBtn.addEventListener("click", function () {
    const inputValue = document.querySelector("#inputValue").value;
    const inputUnit = document.querySelector("#inputUnit").value;
    const outputValue = document.querySelector("#outputValue");
    const outputUnit = document.querySelector("#outputUnit").value;

    switch (inputUnit) {
        case "ounces":
            switch (outputUnit) {
                case "pounds":
                    outputValue.value = inputValue / 16;
                    break;
                case "grams":
                    outputValue.value = inputValue * 28.35;
                    break;
                case "kilograms":
                    outputValue.value = inputValue * 0.02835;
                    break;
                case "milligrams":
                    outputValue.value = inputValue * 28350;
                    break;
                default:
                    outputValue.value = inputValue;
            }

            break;
        case "pounds":
            switch (outputUnit) {
                case "ounces":
                    outputValue.value = inputValue * 16;
                    break;
                case "grams":
                    outputValue.value = inputValue * 453.59;
                    break;
                case "kilograms":
                    outputValue.value = inputValue * 0.45359;
                    break;
                case "milligrams":
                    outputValue.value = inputValue * 453592;
                    break;
                default:
                    outputValue.value = inputValue;
            }

            break;
        case "grams":
            switch (outputUnit) {
                case "ounces":
                    outputValue.value = inputValue / 28.35;
                    break;
                case "pounds":
                    outputValue.value = inputValue / 453.59;
                    break;
                case "kilograms":
                    outputValue.value = inputValue * 0.001;
                    break;
                case "milligrams":
                    outputValue.value = inputValue * 1000;
                    break;
                default:
                    outputValue.value = inputValue;
            }

            break;
        case "kilograms":
            switch (outputUnit) {
                case "ounces":
                    outputValue.value = inputValue * 35.274;
                    break;
                case "pounds":
                    outputValue.value = inputValue * 2.20462;
                    break;
                case "grams":
                    outputValue.value = inputValue * 1000;
                    break;
                case "milligrams":
                    outputValue.value = inputValue * 1000000;
                    break;
                default:
                    outputValue.value = inputValue;
            }
            
            break;
        case "milligrams":
            switch (outputUnit) {
                case "ounces":
                    outputValue.value = inputValue / 28350;
                    break;
                case "pounds":
                    outputValue.value = inputValue / 453592;
                    break;
                case "grams":
                    outputValue.value = inputValue / 1000;
                    break;
                case "kilograms":
                    outputValue.value = inputValue / 1000000;
                    break;
                default:
                    outputValue.value = inputValue;
            }
    }
})
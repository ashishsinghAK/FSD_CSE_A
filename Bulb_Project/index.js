const button = document.getElementsByClassName('btn')
const inp = document.getElementsByClassName('in')
button[0].addEventListener("click",()=>{
    inp[0].style.display="block";
    button[0].style.display="none"
})

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".btn");
    const inputContainer = document.querySelector(".in");
    const showButton = document.querySelector(".btn2");
    const inputField = document.getElementById("inpt");
    const mainContainer = document.querySelector(".main");

    startButton.addEventListener("click", () => {
        inputContainer.style.display = "block";
    });

    showButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        const bulbCount = parseInt(inputField.value);
        
        if (!isNaN(bulbCount) && bulbCount > 0) {
            clearImages();

            for (let i = 0; i < bulbCount; i++) {
                const imageContainer = document.createElement("div");
                imageContainer.style.display = "inline-block";
                imageContainer.style.textAlign = "center";
                imageContainer.style.margin = "10px";

                const img = document.createElement("img");
                img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png"; 
                img.alt = "Bulb Image";
                img.style.height = "100px";
                img.style.width = "50px";
                img.classList.add("bulb-image");

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.style.display = "block";
                checkbox.style.marginTop = "5px";

                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png"; 
                    } else {
                        img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png"; 
                    }
                });

                imageContainer.appendChild(img);
                imageContainer.appendChild(checkbox);

                mainContainer.appendChild(imageContainer);
            }
        } else {
            alert("Please enter a valid number of bulbs.");
        }
    });

    function clearImages() {
        mainContainer.innerHTML = '';
    }
});
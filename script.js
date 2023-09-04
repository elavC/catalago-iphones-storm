const table = document.querySelectorAll(".smartphone");


for (let index = 0; index < table.length; index++) {
    const element = table[index];

    if(element%2 == 0) {
        table.style.backgroundColor = "blue";
    }
}

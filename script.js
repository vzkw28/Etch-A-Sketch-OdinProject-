const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = 'size';

const container = document.createElement('div');
container.setAttribute('id', 'container');

let sizeOfTable = 16;

body.appendChild(button);
body.appendChild(container);

function createTheTable(size) {
    for(i = 0; i<size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);

        for(j = 0; j<size; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);

            row.addEventListener('mouseover', function(e){
                e.target.style.background = 'green';
            })

            row.addEventListener('click', function(e){
                e.target.style.background = 'white';
            })

        }
    }
}

createTheTable(sizeOfTable);

button.addEventListener('click', () => {
    sizeOfTable = prompt("Enter your dimension! (100 is the max)");
    console.log(sizeOfTable);
    while(isNaN(sizeOfTable) || sizeOfTable>100 || sizeOfTable<2){
        sizeOfTable = prompt('Enter a value that is acceptable!')
    }
    console.log(sizeOfTable);
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    createTheTable(sizeOfTable);
})
const container=document.getElementById("container")
const containerSize=840
const createGridButton=document.getElementById("creategrid")
const grsize=document.getElementById("gridsize")

// cellsize



// create grid
function makeGrid(rows){
    for (i=0; i< rows*rows;i++){
        let cell=document.createElement("div");
        cell.style.width = containerSize/rows+"px";
        cell.style.height = containerSize/rows+"px";
        container.appendChild(cell).className="item"
        cell.addEventListener("mouseover",()=>{
            cell.style.backgroundColor=randomColor()
        })
    }
}

// random color
function randomColor(){
    let color=[]
    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb('+color.join(', ')+')';
}

// create grid button

createGridButton.addEventListener("click",()=>{
    const size= parseInt(grsize.value);
    container.innerHTML="";
    if (100 >= size > 0){
        makeGrid(size)
    }
    else{
        alert("Please enter a valid grid size.")
    }
})
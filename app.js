let topLeft = document.getElementById('topleft')
let topRight = document.getElementById('topright')
let bottomLeft = document.getElementById('bottomleft')
let bottomRight = document.getElementById('bottomright')
let size = document.getElementById('size')
let borderColor = document.getElementById('border-color')
let boxColor = document.getElementById('box-color')
let border = document.getElementById('border')
let div = document.getElementById('boxDiv')
div.style.border='2px solid #000000'
div.style.backgroundColor='#007BFF'

//   br issue herererererererererererererererer

copyArea.innerText = `border : 2px solid #000000;`

// border-radius : 2px 2px 2px 2px;

function borderGen() {
    div.style.borderTopLeftRadius=`${topLeft.value}%`
    div.style.borderTopRightRadius=`${topRight.value}%`
    div.style.borderBottomRightRadius=`${bottomRight.value}%`
    div.style.borderBottomLeftRadius=`${bottomLeft.value}%`
    div.style.border=`${size.value}px ${border.value} ${borderColor.value}`
    div.style.backgroundColor=`${boxColor.value}`

    copyArea.innerText = `border :${size.value}px ${border.value} ${borderColor.value};`
    
    // border-radius: ${topLeft.value}px ${topRightight.value}px ${bottomLeft.value}px ${bottomRight.value}px;
    
}

function copyText() {
    let copyText = document.getElementById("copyArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    Swal.fire({
        title: "Good job!",
        text: "You Copied The Text",
        icon: "success"
      });
}
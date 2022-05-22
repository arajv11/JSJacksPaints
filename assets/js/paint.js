function configureListeners() {
    let images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {        
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false);
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false);
    } 
}

function addOpacity(event) {
    if (this.classList.contains('dim') == false) {
        this.classList.add('dim');
    }
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }

    let color = document.getElementById('color-name');
        color.textContent = '';
        
    let element = document.getElementById('color-price');
        element.textContent = '';
    
    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':
            colorName = 'Green';
            price = '$1';
            updatePrice(colorName, price);
            break;           
        case 'pn2':
            colorName = 'Brown';
            price = '$2';
            updatePrice(colorName, price);
            break;            
        case 'pn3':
            colorName = 'Blue';
            price = '$3';
            updatePrice(colorName, price);
            break;   
        case 'pn4':
            colorName = 'Red';
            price = '$4';
            updatePrice(colorName, price);
            break;   
        case 'pn5':
            colorName = 'Gray';
            price = '$5';
            updatePrice(colorName, price);
            break;   
        case 'pn6':
            colorName = 'Black';
            price = '$6';
            updatePrice(colorName, price);
            break;   
        case 'pn7':
            colorName = 'Cyan';
            price = '$7';
            updatePrice(colorName, price);
            break;   
        case 'pn8':
            colorName = 'Purple';
            price = '$8';
            updatePrice(colorName, price);
            break;   
        case 'pn9':
            colorName = 'Yellow';
            price = '$9';
            updatePrice(colorName, price);
            break;   
          default:              
    }

    function updatePrice(colorName, price) {       
        let color = document.getElementById('color-name');
        color.textContent = colorName;
        
        let colorPrice = document.getElementById('color-price');
        colorPrice.textContent = price;
    }
    
}

    'use strict';
    let max = 25;
    let attemps = 0;
    let arrayOfProducts = [];
    let container = document.getElementById('container')
    let Image1 = document.getElementById('image1');
    let Image2 = document.getElementById('image2');
    let Image3 = document.getElementById('image3');
    
    function NewProduct(name, source) {
        this.productName = name;
        this.source = source;
        this.selectedProducts = 0;
        this.numShowen = 0;
        arrayOfProducts.push(this);
    }
    new NewProduct('bag', 'img/bag.jpg');
    new NewProduct('banana', 'img/banana.jpg');
    new NewProduct('bathroom.', 'img/bathroom.jpg');
    new NewProduct('boots', 'img/boots.jpg');
    new NewProduct('breakfast', 'img/breakfast.jpg');
    new NewProduct('bubblegum', 'img/bubblegum.jpg');
    new NewProduct('chair', 'img/chair.jpg');
    new NewProduct('cthulhu', 'img/cthulhu.jpg');
    new NewProduct('dog-duck', 'img/dog-duck.jpg');
    new NewProduct('dragon', 'img/dragon.jpg');
    new NewProduct('pen', 'img/pen.jpg');
    new NewProduct('pet-sweep', 'img/pet-sweep.jpg');
    new NewProduct('scissors', 'img/scissors.jpg');
    new NewProduct('shark', 'img/shark.jpg');
    new NewProduct('sweep', 'img/sweep.png');
    new NewProduct('tauntaun', 'img/tauntaun.jpg');
    new NewProduct('unicorn', 'img/unicorn.jpg');
    new NewProduct('usb', 'img/usb.gif');
    new NewProduct('water-can', 'img/water-can.jpg');
    new NewProduct('wine-glass', 'img/wine-glass.jpg');
    
    let Image1Index;
    let Image2Index;
    let Image3Index;
    function render() {
        Image1Index = generateRandomIndex();
        Image2Index = generateRandomIndex();
        Image3Index = generateRandomIndex();
        while ((Image1Index === Image2Index) || (Image1Index === Image3Index) || (Image2Index === Image3Index)) {
            Image2Index = generateRandomIndex();
            Image3Index = generateRandomIndex();
        }
    
        Image1.setAttribute('src', arrayOfProducts[Image1Index].source);
        Image2.setAttribute('src', arrayOfProducts[Image2Index].source);
        Image3.setAttribute('src', arrayOfProducts[Image3Index].source);
    
        arrayOfProducts[Image1Index].numShowen++;
        arrayOfProducts[Image2Index].numShowen++;
        arrayOfProducts[Image3Index].numShowen++;
    }
    render();
    
    
    
    
    function generateRandomIndex() {
        let randomIndex = Math.floor(Math.random() * arrayOfProducts.length);
        return randomIndex;
    }
    
    container.addEventListener('click', imageClick)
    function imageClick(event) {
        if (attemps <= max) {
            if (event.target.id === 'image1') {
                attemps++;
                arrayOfProducts[Image1Index].selectedProducts++;
    
            }
            if (event.target.id === 'image2') {
                arrayOfProducts[Image2Index].selectedProducts++;
                attemps++;
    
            }
            if (event.target.id === 'image3') {
                arrayOfProducts[Image3Index].selectedProducts++;
                attemps++;
    
            }
            render();
        }
        else {
            let list = document.getElementById('list')
            let li;
            for (let i = 0; i < arrayOfProducts.length; i++) {
                li = document.createElement('li')
                list.appendChild(li);
                li.textContent = `${arrayOfProducts[i].productName} Has ${arrayOfProducts[i].selectedProducts} selectedPrds and Showen ${arrayOfProducts[i].numShowen}`
            }
            document.getElementById('view').style.display = 'block';
            container.removeEventListener('click', imageClick)
        }
    }
    
    // function viewResult() {
    //     // document.getElementById()
    //     document.getElementById('lists').style.display = 'block';
    
    // }
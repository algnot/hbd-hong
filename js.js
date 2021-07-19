window.addEventListener("DOMContentLoaded",	() => {

    const dogBtn = document.querySelector('.dog-btn'),
          dogFigure = document.querySelector('.dog-figure'),
          dogCaption = document.querySelector('.dog-caption'),
          adjectives = ["ขอให้มีความสุข","ยิ้มเยอะๆนะค้าป","มีความสุขมากๆนะค้าป","สุขภาพร่างกายเเข็งแรง",
          "ขอให้โลกใจดีกับน้องนะ","สู้ๆนร้า","ยิ้มเข้าไว้","HBD ค้าป",
          "ขอให้สมหวังนะค้าป","หิวเบียร์","อยากกินหมูกระทะ","เป็นเด็กดีของขุ่นพ่อขุ่นเเม่",
          "ขอให้สมหวังในทุกๆเรื่องเลย","ขอให้อย่าร้องไห้","ขอให้มีเงินเยอะๆ (แบ่งด้วย)","โชคดีมีชัยค้าป",
          "อยากกินเเซลม่อน","เห็นคำอวยพรนี้เลี้ยงนมตราหมี","อย่ามีเรื่องเศร้าเลยนะ"];

    //Get dog content button event listener
    dogBtn.addEventListener('click', getDog);

    //Display initial dog content
    getDog();

    function getDog() {

        //Create image element
        const dogImage = document.createElement('img');
                        
        //Set image attributes and class
        dogImage.setAttribute('src', `./img/${Math.floor(Math.random() * 8)}.JPG`);
        dogImage.classList.add('dog-media');
        
        //Display image
        document.getElementById('img').innerHTML = ''
        document.getElementById('img').appendChild(dogImage)
        // dogFigure.appendChild(dogImage);
        
        //Display caption
        dogCaption.textContent = `${adjectives[Math.floor(Math.random() * adjectives.length)]}!`;

    }   
});
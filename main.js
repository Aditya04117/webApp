contact=()=>{
    document.getElementById('connectContainer').style.display='';
    document.getElementById('screenBlock').style.display='none';
}

close=()=>{
    document.getElementById('connectContainer').style.display='none';
    document.getElementById('screenBlock').style.display='';

}
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('corss').addEventListener('click', close);
});
change=(evt)=>{
    document.getElementById('secbox1').style.backgroundColor = '#ffffff';
    document.getElementById('secbox2').style.backgroundColor = '#ffffff';
    document.getElementById('secbox3').style.backgroundColor = '#ffffff';
    if(evt==1){
        document.getElementById('imageSec3').src='assets/2-2@2x.png';
        document.getElementById('secbox1').style.backgroundColor='#FF3147';
    }else if(evt==2){
        document.getElementById('imageSec3').src='assets/image@2x.png';
        document.getElementById('secbox2').style.backgroundColor='#FF3147';

    }else if(evt==3){
        document.getElementById('imageSec3').src='assets/2-2@2x.png';
        document.getElementById('secbox3').style.backgroundColor='#FF3147';
    }else{
        document.getElementById('sec3').style.backgroundColor='#fff';
    }
    

}

window.onload =function(){
const carousel = document.querySelector('.imagBox');
        const dots = document.querySelectorAll('.dot');

        carousel.addEventListener('scroll', () => {
            const scrollLeft = carousel.scrollLeft;
            const clientWidth = carousel.clientWidth;
            const index = Math.round(scrollLeft / clientWidth);
            dots.forEach(dot => dot.src = 'assets/2.svg');
            dots[index].src = 'assets/1.svg';
        });

        dots[0].src = 'assets/1.svg';


        
    }


    
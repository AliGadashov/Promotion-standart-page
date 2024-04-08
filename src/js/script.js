var mainFooter = document.getElementById('footer-container');
var openingFooter = document.getElementById('footer-container-open');
var display = 0;

function hideShow()
{
    if(display == 0){
        mainFooter.style.visibility = 'visible';
        mainFooter.style.opacity = '1';
        openingFooter.style.visibility = 'hidden';
        openingFooter.style.opacity = '0';
        display = 1;
    }
    else{
        mainFooter.style.visibility = 'hidden';
        mainFooter.style.opacity = '0';
        openingFooter.style.visibility = 'visible';
        openingFooter.style.opacity = '1';
        display = 0;
    }
}
$(document).ready(function() {
    $('.header_burger').click(function(event) {
      $('.header_burger,.header_menu').toggleClass('active');
    });
    $('body').toggleClass('lock');
  });
  const button = document.querySelectorAll(".Button");

  function SetScrollBy()
  {
    window.scrollTo({
        top: 2000,
        left: 0,
        behavior: "smooth"
    });
  }
  SetScrollBy();
for(const slide of  button)
{
    slide.addEventListener('click', () => { 
        SetScrollBy();
    })
}
/*const Slide = document.querySelectorAll(".header_burger");

let a = 0;
function SetScrollBy()
{
    window.scrollTo ({
        top: -2000,
        left: 0,
        behavior: 'smooth'
    });
    const windowScrollTop = window.pageYOffset;
    
    console.log(windowScrollTop);
}
/*
for(const slide of Slide)
{
    slide.addEventListener('click', () => {
        
        slide.classList.add('active');
        if(a % 2 == 0)
        {
            
            slide.classList.remove('active');
        }
        a++;
    })
}
if(window.pageYOffset > 400)
    {
        console.log(12347777777777777777777777777);
    }*/
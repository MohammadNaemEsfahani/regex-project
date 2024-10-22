let btn=document.querySelector('button')
let number=document.querySelector('input');
let error= document.querySelector('.error')
console.log(error)
let regex=/(\+?989|0?9)(\d{2})[- ]?(\d{3})[- ]?(\d{4})/
btn.addEventListener('click',()=>{
     error.style.display='inline-block'
    if(regex.test(number.value)==true){
       setInterval(()=>{
         error.style.display='none'
       },2000)
    
    }
    else{
        error.style.backgroundColor='red';
        error.innerHTML='شماره موبایل وارد شده صحیح نیست'
        setInterval(()=>{
            error.style.display='none'
          },2000)

    }
})


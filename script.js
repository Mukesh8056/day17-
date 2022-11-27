           // call back hell

           let div=document.createElement("div")
           div.setAttribute("id","callback")
           document.body.append(div)
          setTimeout(()=>{
                let element=document.getElementById(div)
              console.log("10")
              div.innerHTML=`10`
  
              setTimeout(()=>{
              div.innerHTML=`9`
              console.log("9")
              setTimeout(()=>{
              div.innerHTML=`8`
              console.log("8")
              setTimeout(()=>{
              div.innerHTML=`7`
              console.log("7")
              setTimeout(()=>{
                  div.innerHTML=`6`
              console.log("6")
              setTimeout(()=>{
              div.innerHTML=`5`
              console.log("5")
              setTimeout(()=>{
                  div.innerHTML=`4`
               console.log("4")
               setTimeout(()=>{
                  div.innerHTML=`3`
               console.log("3")
                setTimeout(()=>{
               div.innerHTML=`2`
              console.log("2")
              setTimeout(()=>{
                  div.innerHTML=`1`
              console.log("1")
              setTimeout(()=>{
           div.innerHTML=`Happy Independence Day`
           console.log("Happy Independence Day")
          },2000)
          },4000) 
          },6000)
         
          },5000)
          },3000)
          },1000)
          
          },8000)
          
          },9000)
          
          },10000)
           
          },11000)
        },12000)
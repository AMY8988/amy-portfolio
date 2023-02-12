
    //loader
    $(window).on("load" , function(){

        setTimeout( ()=>{
            $(".loader-container").slideUp(700 , function(){
                $(this).remove();
            })
        } , 700 )
        
    })

    //text typing   
    let text = document.querySelector(".sec-text");

    function textLoad(){
        setTimeout( ()=> text.textContent = "AMY MOE ZAW"  , 100);
        setTimeout( ()=> text.textContent =   " 21 years old" , 4000);
        setTimeout( ()=> text.textContent = "Developer" , 8000);
    };

    textLoad();
    

    // let btn = document.getElementById("btn-animate");  
    
    //   setTimeout(function() {
    //     btn.click();
    //   }, 5000);  
    
    //   btn.addEventListener("click", function(e){
         
    
    //     //create
    //     let overlay = document.createElement('span'); 
    //     overlay.classList.add("overlay"); 
    //     e.target.appendChild(overlay);
  
    //     let xValue = e.clientX - e.target.offsetLeft; 
    //     let yValue = e.clientY - e.target.offsetTop;
  
    //     //set
    //     overlay.style.left = xValue + "px"; 
    //     overlay.style.top = yValue + "px"; 

    // })
    


    let chatBtn = document.querySelector(".chat");
    let chatclose = document.querySelector(".chat-close-btn");
    let chatBox = document.querySelector(".chat-box");

    $(window).on( "load" , function(){
        setTimeout( ()=>{
            chatBox.classList.remove("d-none");
        } , 5000 )
        
        chatBtn.addEventListener("click" ,  function(){
            // chatBox.classList.remove("d-none");
            $(".chat-box").fadeToggle(300);
                   
        })
        chatclose.addEventListener("click" ,  function(){
           
            $(".chat-box").fadeToggle(300);
                   
        })
    })


    let skills = [
        {"lang-name" : "HTML" , "skill" : 90 } ,
        {"lang-name" : "CSS" , "skill" : 70 } ,
        {"lang-name" : "SASS" , "skill" : 50 } ,
        {"lang-name" : "PHP" , "skill" : 40 } ,
        {"lang-name" : "Laravel" , "skill" : 50 } ,
        {"lang-name" : "Vue" , "skill" : 60 } ,
        {"lang-name" : "Bootstrap" , "skill" : 30 } ,
       
        

    ]


    skills.map(function(skill){
           $("#skill-progress").append(`
                   <div class="mb-3">
                   <label class=" fw-bold mb-2">${skill["lang-name"]}</label>
                   <div class="progress w-100">
                       <div class="progress-bar bg-primary-1" role="progressbar" style="width: ${skill.skill}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                   </div>
                   </div>
           `)
    })
    

    //cursor animation
    let cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove" , function(e){
        cursor.classList.remove("d-none");
        cursor.setAttribute("Style"  ,  "top :" + ( e.pageY - 10 ) + "px; left :" + (e.pageX + 10) + "px;")
    });

    document.addEventListener("click" , function(){
        cursor.classList.add("expand");

        setTimeout(()=>{
            cursor.classList.remove("expand");
            
        } , 900)
    })
    

    

    let modeLink = document.querySelector(".mode-link");
    let modeChange = document.querySelector(".mode-change");
    let icon = document.getElementById("mode-icon");

    modeChange.addEventListener("click" , function(){

        // modeLink.setAttribute( "href" , "darkmode/d-index.html" );
        icon.classList.remove("bi-cloud-moon");
        icon.classList.add("bi-cloud-sun");
    })

    let lmodeLink = document.querySelector(".light-mode-link");
    let lmodeChange = document.querySelector(".light-mode-change");

    lmodeChange.addEventListener("click" , function(){
        // lmodeLink.setAttribute( "href" , "../d-index.html" );
        icon.classList.remove("bi-cloud-sun");
        icon.classList.add("bi-cloud-moon");
    })

    

    
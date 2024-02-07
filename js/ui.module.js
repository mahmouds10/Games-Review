export class UI {
  constructor() {}
  displayGames(games) {
    let textGame = "";
    for (let i = 0; i < games.length; i++) {
      textGame += `
       <div class="col ccc" id="${games[i].id}">
       <div class="card h-100 bg-transparent">
         <div class="card-body">
             <div class="card-img">
                 <img  src="${games[i].thumbnail}" alt="">
             </div>
             <div class="card-text">
                 <div class="tags">
                    <div> <h3>${games[i].title}</h3></div>
                     <span>Free</span>
                 </div>
                 
        <div class="d-flex align-items-center">
        <p>${games[i].short_description}</p>
    </div>
                  
             </div>
         </div>
         <div class="card-footer">
             <span>${games[i].genre}</span>
             <span>${games[i].platform}</span>
            
         </div>
       </div>
     </div>
       `;
    }
    document.getElementById("displayingArea").innerHTML = textGame;
  }
  getclickedID() {
    document.querySelectorAll(".ccc").forEach((elemnt) => {
      elemnt.addEventListener("click", () => {
        console.log(elemnt.getAttribute("id"));
      });
    });
  }
  showLoading(){
    document.getElementById("loading").style.display = "flex";
    document.querySelector("body").style.height = "100vh";
  }
  hideLoading(){
    document.getElementById("loading").style.display = "none";
    document.querySelector("body").style.height = "auto";
  }
   controlNavbar(){
    window.addEventListener("scroll", () => {
      if(scrollY >= 212.8000030517578){
        document.querySelector("nav").style.borderTopRightRadius=0
        document.querySelector("nav").style.borderTopLeftRadius=0
      }
      else{
        document.querySelector("nav").style.borderTopRightRadius=20+"px"
        document.querySelector("nav").style.borderTopLeftRadius=20+"px"
      }
    })
  }
}

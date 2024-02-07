import { UI } from "./ui.module.js";

export class Details {
  constructor(gameID) {
     this.uiModule = new UI()
    document.getElementById("details").style.display = "block";
    document.querySelector(".warber").style.display = "none";
    document.querySelector("#displayingArea").style.display = "none";
    document.querySelector("nav").style.display = "none";
    this.getGameDetails(gameID);
  }
  async getGameDetails(id) {
    this.uiModule.showLoading();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b3f899123dmsh5e4b64ddd6358e0p1bcabfjsnc178b54db756",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    this.dispayGameDetails(result);
    this.uiModule.hideLoading();
  }
  dispayGameDetails(game) {
    let temp = "";
    temp += `        
    <div class="details-header d-flex justify-content-between p-3">
    <h2>Game Details</h2>
    <div id="close" class="closebtn">
      <div class="close-outer">
        <div class="close-inner">
          <label>Back</label>
        </div>
      </div>
    </div>
  </div>
  <div class="row m-0 gap-3 my-2 justify-content-between">
    <div class="col-md-4">
      <div class="details-img">
        <img src="${game.thumbnail}" alt="">
      </div>
    </div>
    <div class="col-md-7">
      <h2>Title: ${game.title}</h2>
      <div class="my-2"><h4>Category: </h4> <span>${game.genre}</span></div>
      <div class="my-2"><h4>Platform: </h4> <span>${game.platform}</span></div>
      <div class="my-2"><h4>Status: </h4> <span>${game.status}</span></div>
      <p>${game.description}</p>
      <a class="btn btn-outline-warning" href="${game.freetogame_profile_url}">Show Game</a>
    </div>
  </div>
    `;
    document.getElementById("detailsAtra").innerHTML = temp;
    this.clsoeBtn();

  }
  clsoeBtn() {
    document.getElementById("close").addEventListener("click", () => {
      document.getElementById("details").style.display = "none";
      document.querySelector(".warber").style.display = "block";
      document.querySelector("#displayingArea").style.display = "flex";
      let nav = document.querySelector("nav");
      nav.style.display = "flex";
    });
  }
}

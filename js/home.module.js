import { UI } from "./ui.module.js";
export class Home {
  category = "";
  constructor() {
    this.ui = new UI();
    this.getGames("MMORPG");
    this.clickLink();
    this.ui.controlNavbar()
  }
  clickLink() {
    const allLinks = document.querySelectorAll(".nav-link");
    allLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document
          .querySelector(".navbar-nav .active-link")
          .classList.remove("active-link");
        link.classList.add("active-link");
        this.getGames(link.innerHTML);
      });
    });
  }
  
  async getGames(category) {
    this.ui.showLoading()
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b3f899123dmsh5e4b64ddd6358e0p1bcabfjsnc178b54db756",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    this.ui.displayGames(result);
    this.ui.hideLoading()

    this.ui.getclickedID();
  }

}

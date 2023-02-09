let foodLayers = document.querySelector(".food-layers");
let buttonlar = document.querySelector(".tugma");
let prices = document.querySelector(".text");
let ps = prices.querySelectorAll("p");
let price = document.querySelector(".price");
price.innerHTML = "Total: 2$";

buttonlar.addEventListener("click", (e) => {
  let images = foodLayers.querySelectorAll("img");
  const imgUrl = e.target.className.split("-")[0];
  //   console.log(imgUrl);
  if (imgUrl !== "btn bread" && imgUrl !== "flex tugma") {
    const element = createElement("img", `./burger-layers/${imgUrl}.svg`, "");
    // console.log(images.length);
    element.setAttribute("id", `${images.length}`);
    // console.log(element);
    var allPrice = 0;
    ps.forEach((p, id) => {
      let text = p.textContent.split(" - ")[0].toLocaleLowerCase();
      let price = p.textContent.split(" - ")[1].split("")[1];
      //   console.log(price);
      if (p.textContent.split(" - ")[0].toLocaleLowerCase() == imgUrl) {
        allPrice += +price;
        element.setAttribute("price", price);
      }
    });
    let totalPrice = price.textContent
      .split(" ")[1]
      .slice(0, price.textContent.split(" ")[1].length - 1);
    // console.log(totalPrice);
    price.innerHTML = `Total: ${+totalPrice + +allPrice}$`;
    foodLayers.append(element);
  } else {
    alert("Boshqa mumkin emas");
  }
});

foodLayers.addEventListener("click", (e) => {
  //   console.log(e.target.getAttribute("id"));
  let totalPrice = price.textContent
    .split(" ")[1]
    .slice(0, price.textContent.split(" ")[1].length - 1);
  price.innerHTML = `Total: ${+totalPrice - +e.target.getAttribute("price")}$`;
  foodLayers.removeChild(e.target);
});

WINE_ELEMENT = document.getElementsByClassName("selected-wine")[0];
RECIPES_ELEMENT = document.getElementById("recipes");

if (selectedWine) {
  const wishList = JSON.parse(localStorage.getItem("wish-list"));
  const isWishListed = wishList.some((wish) => wish.id === selectedWine.id);

  const recipesForSelectedWine = JSON.parse(
    localStorage.getItem("recipes")
  ).find((recipe) => recipe.wineType === selectedWine.type).recipes;

  WINE_ELEMENT.setAttribute("id", `wine-${selectedWine.id}`);

  WINE_ELEMENT.innerHTML = `
    <img src="./assets/images/${
      selectedWine.image
    }" alt="Wine image" class="wine-card__image">

    <div class="wine">
      <h2 class="wine__name">${selectedWine.name}</h2>
      <p class="wine__type">Tipo: ${selectedWine.type}</p>
      <p class="wine__price">Preço: R$ ${selectedWine.price}</p>
      <p class="wine__description">Descrição: ${selectedWine.description}</p>

      <div class="wine__buttons">
        <button class="wine__button wine__button--cart" onclick="addToCart(${
          selectedWine.id
        })">Adicionar ao carrinho</button>
        <img 
        role="button" 
        id="wishlist-icon" 
        class="wine__button wine__button--wishlist ${
          isWishListed ? "wine__button--wishlist-active" : ""
        }"
        src="./assets/icons/heart.svg" 
        onclick="addToWishList(${selectedWine.id});"
      >
      </div> 
    </div>
  `;

  recipesForSelectedWine.forEach((recipe) => {
    RECIPES_ELEMENT.innerHTML += `
      <div class="recipe-card">
        <h3 class="recipe-card__name">${recipe.name}</h3>
        <p class="recipe-card__description">${recipe.description}</p>
      </div>
    `;
  });
} else {
  WINE_ELEMENT.innerHTML = "<p>Vinho não encontrado</p>";
}

WISH_LIST = document.getElementById('wish-list');

loadWishList();

function loadWishList() {
  WISH_LIST.innerHTML = '';

  JSON.parse(localStorage.getItem('wish-list')).forEach((wine) => {
    const wishList = JSON.parse(localStorage.getItem('wish-list'))
    const isWishListed = wishList.some(wish => wish.id === wine.id);
  
    WISH_LIST.innerHTML += `
      <li id="wine-${wine.id}" class="wine">
        <img class="wine__image" src="./assets/images/${wine.image}" alt="Imagem do vinho" onclick="view(${wine.id})">
        <section class="wine__info">
          <div class="wine__title">
            <h3 class="wine__name">${wine.name}</h3>
            <p class="wine__type">${wine.type}</p>
          </div>
          <p class="wine__price">R$ ${wine.price}</p>
          <div class="wine__buttons">
            <button class="wine__button wine__button--cart" onclick="addToCart(${wine.id})">
              Adicionar ao carrinho
            </button>
            <img 
              role="button" 
              id="wishlist-icon" 
              class="wine__button wine__button--wishlist ${isWishListed ? 'wine__button--wishlist-active' : ''}"
              src="./assets/icons/heart.svg" 
              onclick="addToWishList(${wine.id}); loadWishList();"
            >
          </div>
        </section>
      </li>
    `;
  });
}
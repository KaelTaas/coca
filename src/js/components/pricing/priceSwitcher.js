export const usePriceSwitcher = () => {
  // const switcher = document.querySelector('[data-price="swticher"]');
  const switcher = document.querySelector('.hero__switcher-checkbox');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const entriesPrice = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1680,
      withSale: 1400,
    },
    enterprise: {
      default: 2520,
      withSale: 2100,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    entriesPrice.textContent = priceList.enterprise.withSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    entriesPrice.textContent = priceList.enterprise.default;
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};

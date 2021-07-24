(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'slacklinemtl.myshopify.com',
      storefrontAccessToken: 'a858c233b9758536cdcebcdba01ba3f4',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      products.forEach(p => {
        let node = document.getElementById('product-component-'+ p.name)
        if (node) {
          ui.createComponent('product', {
            id: p.id,
            node: node,
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: shopifyOptions,
          });
        }
      });
    });
  }
})();
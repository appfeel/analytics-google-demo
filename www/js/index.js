var app = {
  startTime: new Date().getTime(),
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    analytics.startTrackerWithId('YOUR-ID-HERE');
    alert("Start Time");
    analytics.trackTiming("app", "start", new Date().getTime() - app.startTime);
  },
  setInstallerId: function (id) {
    var options = {};
    options[analytics.OPTIONS.APP_INSTALLER_ID] = id;
    analytics.setAppParams(options);
  },
  setCampaignUrl: function (url) {
    analytics.setCampaignFromUrl(url); //"http://www.appfeel.com?utm_campaign=com.analytics.google&utm_source=github&utm_content=setCampaignFromUrl&utm_medium=link");
  },
  trackSocial: function () {
    analytics.trackSocial("Facebook ", "Like", "faceboock.com/AppFeel.Inc");
  },
  setCurrency: function (cu) {
    analytics.setCustomParam("&cu", cu);
  },
  trackImpression: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.CUSTOM_DIMENSIONS] = {
      1: "Member"
    };
    options[analytics.OPTIONS.CUSTOM_METRICS] = {
      1: 30,
      4: 1.23
    };

    analytics.trackEcommerce(options);
  },
  trackEcommerceAction: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Related Products";
    options[analytics.OPTIONS.PRODUCT_LIST_SOURCE] = "My product list source";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CLICK;

    analytics.trackEcommerce(options);
  },
  trackEcommerceDetailAction: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Related Products";
    options[analytics.OPTIONS.PRODUCT_LIST_SOURCE] = "My product list source";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_DETAIL;
    options[analytics.OPTIONS.RELATED_PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.RELATED_PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.RELATED_PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.RELATED_PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.RELATED_PRODUCT_VARIANT] = "White";
    options[analytics.OPTIONS.RELATED_PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.RELATED_PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.RELATED_PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.RELATED_PRODUCT_PRICE] = 18.99;

    analytics.trackEcommerce(options);
  },
  trackAddToChart: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "+Chart";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_ADD;

    analytics.trackEcommerce(options);
  },
  trackRemoveFromChart: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REMOVE;

    analytics.trackEcommerce(options);
  },
  trackCheckout: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Checkout";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CHECKOUT;
    options[analytics.OPTIONS.CHECKOUT_STEP] = 1;
    options[analytics.OPTIONS.CHECKOUT_OPTION] = "Visa";

    analytics.trackEcommerce(options);
  },
  trackCheckoutOptionChange: function () {
    var options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "CheckoutOption";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CHECKOUT_OPTION;
    options[analytics.OPTIONS.CHECKOUT_STEP] = 1;
    options[analytics.OPTIONS.CHECKOUT_OPTION] = "Fedex";

    analytics.trackEcommerce(options);
  },
  trackTransaction: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "White";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Purchase";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_PURCHASE;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";
    options[analytics.OPTIONS.TRANSACTION_AFFILIATION] = "AppFeel Store - Online";
    options[analytics.OPTIONS.TRANSACTION_REVENUE] = 13.29;
    options[analytics.OPTIONS.TRANSACTION_TAX] = 5.70;
    options[analytics.OPTIONS.TRANSACTION_SHIPPING] = 5.00;
    options[analytics.OPTIONS.TRANSACTION_COUPON_CODE] = "SUMMER2014";

    analytics.trackEcommerce(options);
  },
  trackPartialRefund: function () {
    var options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 1;
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Refund";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REFUND;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";

    analytics.trackEcommerce(options);
  },
  trackRefund: function () {
    var options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Refund";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REFUND;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";

    analytics.trackEcommerce(options);
  },
  trackPromotionImpression: function () {
    var options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Promotion-view";
    options[analytics.OPTIONS.PROMOTION_ID] = "PROMO_1234 ";
    options[analytics.OPTIONS.PROMOTION_NAME] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_CREATIVE] = "summer_banner2";
    options[analytics.OPTIONS.PROMOTION_POSITION] = "banner_slot1";

    analytics.trackPromotion(options);
  },
  trackPromotionClick: function () {
    var options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Promotion-click";
    options[analytics.OPTIONS.LABEL] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_ID] = "PROMO_1234 ";
    options[analytics.OPTIONS.PROMOTION_NAME] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_CREATIVE] = "summer_banner2";
    options[analytics.OPTIONS.PROMOTION_POSITION] = "banner_slot1";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CLICK;

    analytics.trackPromotion(options);
  },
  testAll: function () {
    var options = {};
    options[analytics.OPTIONS.APP_INSTALLER_ID] = "com.appfeel.app";
    analytics.setAppParams(options);

    // alert("Set Campaign url");
    analytics.setCampaignFromUrl("http://www.appfeel.com?utm_campaign=com.analytics.google&utm_source=github&utm_content=setCampaignFromUrl&utm_medium=link");

    // alert("Track Social");
    analytics.trackSocial("Facebook ", "Like", "faceboock.com/AppFeel.Inc");

    analytics.setCustomParam("&cu", "EUR");

    // alert("Track impression");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.CUSTOM_DIMENSIONS] = {
      1: "Member"
    };
    options[analytics.OPTIONS.CUSTOM_METRICS] = {
      1: 30,
      4: 1.23
    };

    analytics.trackEcommerce(options);

    // alert("Track Action");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Related Products";
    options[analytics.OPTIONS.PRODUCT_LIST_SOURCE] = "My product list source";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CLICK;

    analytics.trackEcommerce(options);

    // alert("Track Detail Action");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_LIST] = "Related Products";
    options[analytics.OPTIONS.PRODUCT_LIST_SOURCE] = "My product list source";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_DETAIL;
    options[analytics.OPTIONS.RELATED_PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.RELATED_PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.RELATED_PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.RELATED_PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.RELATED_PRODUCT_VARIANT] = "White";
    options[analytics.OPTIONS.RELATED_PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.RELATED_PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.RELATED_PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.RELATED_PRODUCT_PRICE] = 18.99;

    analytics.trackEcommerce(options);

    // alert("Add to chart");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "+Chart";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_ADD;

    analytics.trackEcommerce(options);

    // alert("Remove from chart");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REMOVE;

    analytics.trackEcommerce(options);

    // alert("Add to chart again");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "+Chart";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_ADD;

    analytics.trackEcommerce(options);


    // alert("Checkout process");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Checkout";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CHECKOUT;
    options[analytics.OPTIONS.CHECKOUT_STEP] = 1;
    options[analytics.OPTIONS.CHECKOUT_OPTION] = "Visa";

    analytics.trackEcommerce(options);

    // alert("Checkout option change");
    options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "CheckoutOption";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CHECKOUT_OPTION;
    options[analytics.OPTIONS.CHECKOUT_STEP] = 1;
    options[analytics.OPTIONS.CHECKOUT_OPTION] = "Fedex";

    analytics.trackEcommerce(options);



    // alert("Track transaction");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12345";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "Black";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.PRODUCT_NAME] = "AppFeel Warhol T-Shirt";
    options[analytics.OPTIONS.PRODUCT_CATEGORY] = "Apparel/T-Shirts";
    options[analytics.OPTIONS.PRODUCT_BRAND] = "AppFeel";
    options[analytics.OPTIONS.PRODUCT_VARIANT] = "White";
    options[analytics.OPTIONS.PRODUCT_POSITION] = 2;
    options[analytics.OPTIONS.PRODUCT_SCREEN_NAME] = "My Impression Screen";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 2;
    options[analytics.OPTIONS.PRODUCT_PRICE] = 18.99;
    options[analytics.OPTIONS.PRODUCT_COUPON_CODE] = "APPARELSALE";
    options[analytics.OPTIONS.PRODUCT_LIST] = "Search Results";
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Purchase";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_PURCHASE;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";
    options[analytics.OPTIONS.TRANSACTION_AFFILIATION] = "AppFeel Store - Online";
    options[analytics.OPTIONS.TRANSACTION_REVENUE] = 13.29;
    options[analytics.OPTIONS.TRANSACTION_TAX] = 5.70;
    options[analytics.OPTIONS.TRANSACTION_SHIPPING] = 5.00;
    options[analytics.OPTIONS.TRANSACTION_COUPON_CODE] = "SUMMER2014";

    analytics.trackEcommerce(options);

    // alert("Partial refund");
    options = {};

    options[analytics.OPTIONS.PRODUCT_ID] = "P12346";
    options[analytics.OPTIONS.PRODUCT_QUANTITY] = 1;
    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Refund";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REFUND;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";

    analytics.trackEcommerce(options);


    // alert("Refund");
    options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Refund";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_REFUND;
    options[analytics.OPTIONS.TRANSACTION_ID] = "T12345";

    analytics.trackEcommerce(options);


    // alert("Promotion impression");
    options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Promotion-view";
    options[analytics.OPTIONS.PROMOTION_ID] = "PROMO_1234 ";
    options[analytics.OPTIONS.PROMOTION_NAME] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_CREATIVE] = "summer_banner2";
    options[analytics.OPTIONS.PROMOTION_POSITION] = "banner_slot1";

    analytics.trackPromotion(options);

    // alert("Promotion click");
    options = {};

    options[analytics.OPTIONS.CATEGORY] = "Ecommerce";
    options[analytics.OPTIONS.ACTION] = "Promotion-click";
    options[analytics.OPTIONS.LABEL] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_ID] = "PROMO_1234 ";
    options[analytics.OPTIONS.PROMOTION_NAME] = "Summer Sale";
    options[analytics.OPTIONS.PROMOTION_CREATIVE] = "summer_banner2";
    options[analytics.OPTIONS.PROMOTION_POSITION] = "banner_slot1";
    options[analytics.OPTIONS.PRODUCT_ACTION] = analytics.OPTIONS.PRODUCT_ACTION_CLICK;

    analytics.trackPromotion(options);
  }
};

app.initialize();
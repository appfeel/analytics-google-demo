# Instructions for testing Cordova Analytics plugin:

- [Download zip](https://github.com/appfeel/analytics-google-demo/archive/master.zip) project or clone it via git CLI:
```
git clone https://github.com/appfeel/analytics-google-demo.git AnalyticsTest
```

- Add cordova-plugin-analytics plugin to the project:
````
cd AdmobAdsTest
cordova plugin add cordova-plugin-analytics
```

- Add platforms to the project:
```
cordova platform add ios android
```

Place your UA-XXXXXX-X in `www/js/index.js`:

```javascript
receivedEvent: function (id) {
    // ...
    analytics.startTrackerWithId('YOUR-ID-HERE'); // <-- Replace with your Google Analytics tracking code
    // ...
}
````

- Emulate the application:
````
cordova emulate android
cordova emulate ios
````
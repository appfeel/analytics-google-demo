# Instructions for testing Cordova Analytics plugin:

- [Download zip](https://github.com/appfeel/analytics-google-demo/archive/master.zip) project or clone it via git CLI:
```
git clone https://github.com/appfeel/analytics-google-demo.git AnalyticsTest
```

- Add com.analytics.google plugin to the project:
````
cd AdmobAdsTest
cordova plugin add com.analytics.google
```

- Add platforms to the project:
```
cordova platform add ios android
```

- Emulate the application:
````
cordova emulate android
cordova emulate ios
````
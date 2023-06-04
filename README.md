# Aim
To query **blob** column in sqlite db in an ionic/angular/capacitor project using capacitor-community/sqlite plugin (**without typeorm**) in **Android** target

# setup
```
git clone https://github.com/veeru-d/capcacitor-sqlite-v1.git
cd capcacitor-sqlite-v1
npm i
ionic capacitor add android
```

# build
```
npm run build -verbose
npx cap sync
npm run build:cap:android
```

# test setup
```
adb -s <device> install -r -t android/app/build/outputs/apk/debug/app-debug.apk
copy testdbSQLite.db to /data/data/io.ionic.starter/databases using Android Studio's Device File Explorer
```
You can open this db in `DB Browser for SQLite` app, open `teach` table and select `img` column.
You can see the blob's png image.

# test
just launch `cap-sqlite` app in Android phone (Android 12 or newer) (not tested in any other versions)
(tested on OnePlus Nord N200 5G Android phone running OxygenOS with Android version 12)

# debug
point chrome browser to `chrome://inspect/#devices`
select `inspect` link under `io.ionic.starter` WebView
goto `Console` tab in chrome dev tools

## Actual debug log:
```
home: ngOnInit: readTable rows= Objectvalues: Array(1)0: {id: 1, name: '11:41:10 AM', img: '[B@aee96b4'}length: 1[[Prototype]]: Array(0)[[Prototype]]: Object
```

## Expected:
```
img: 'ivBORw0K...' (or something like that from a png file)
```

# Env
```
$ ionic info
[WARN] Error loading @ionic/angular package.json: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './package' is not defined by "exports" in ...\capcacitor-sqlite-v1\node_modules\@ionic\angular\package.json
[WARN] Error loading @capacitor/ios package.json: Error: Cannot find module '@capacitor/ios/package'

       Require stack:
       - ...\AppData\Roaming\npm\node_modules\@ionic\cli\lib\project\index.js
       - ...\AppData\Roaming\npm\node_modules\@ionic\cli\lib\index.js
       - ...\AppData\Roaming\npm\node_modules\@ionic\cli\index.js
       - ...\AppData\Roaming\npm\node_modules\@ionic\cli\bin\ionic

Ionic:

   Ionic CLI                     : 6.19.0 (...\AppData\Roaming\npm\node_modules\@ionic\cli)
   Ionic Framework               : not installed
   @angular-devkit/build-angular : 16.0.4
   @angular-devkit/schematics    : 16.0.4
   @angular/cli                  : 16.0.4
   @ionic/angular-toolkit        : 9.0.0

Capacitor:

   Capacitor CLI      : 5.0.4
   @capacitor/android : 5.0.4
   @capacitor/core    : 5.0.4
   @capacitor/ios     : not installed

Utility:

   cordova-res : not installed globally
   native-run  : 1.7.2

System:

   NodeJS : v16.14.0 (...\nodejs\16\node.exe)
   npm    : 8.3.1
   OS     : Windows 10
```

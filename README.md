Aim: To query blob column in sqlite db in an ionic/angular/capacitor project using capacitor-community/sqlite plugin (without typeorm) in Android target

setup:
git clone https://github.com/veeru-d/capcacitor-sqlite-v1.git
cd capcacitor-sqlite-v1
npm i
ionic capacitor add android

build:
npm run build -verbose
npx cap sync
npm run build:cap:android

test setup:
adb -s <device> install -r -t android/app/build/outputs/apk/debug/app-debug.apk
copy testdbSQLite.db to /data/data/io.ionic.starter/databases using Android Studio's Device File Explorer

test:
just launch cap-sqlite app in Android phone (Android 12 or newer)
(tested on OnePlus Nord N200 5G Android phone running OxygenOS with Android version 12)

debug:
point chrome browser to chrome://inspect/#devices
select inspect link under io.ionic.starter WebView
goto Console tab in chrome dev tools

Actual debug log:
home: ngOnInit: readTable rows= Objectvalues: Array(1)0: {id: 1, name: '11:41:10 AM', img: '[B@aee96b4'}length: 1[[Prototype]]: Array(0)[[Prototype]]: Object

Expected:
img: 'ivBORw0K...' (or something like that)


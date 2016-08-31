Memo Wall App
=============

The sample of React based App

### Usage


**install server side**

*install preview engine PhantomJS*
```
npm install -g phantomjs
```

*install preview service Manet*
```
npm install -g manet
```

*update Manet config (\AppData\Roaming\npm\node_modules\manet\src\config)*
```
host: localhost
port: 9090
cors: true
```
**install client side**

*install client packages*
```
npm install
```
**start**

*start preview service*
```
manet
```
*start client service*
```
npm start
```
**open**
```
http://localhost:3000
```

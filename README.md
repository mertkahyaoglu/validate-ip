#  IPv4 Validator

> Node module for ipv4 address validation

## Install

```sh
$ npm install --save validate-ip
```


## Usage

```js
var validateip = require('validate-ip');

validateip('255.255.255.255');
//=> true

validateip('10.0.1.256');
//=> false

validateip('192.168.1');
//=> false
```


## License

MIT © [Mert Kahyaoğlu](https://mertkahyaoglu.github.io)

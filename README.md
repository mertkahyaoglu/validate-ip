#  IPv4 Validator

> node module for ipv4 address validation

## Install

```sh
$ npm install --save validate-ip
```


## Usage

```js
var validate-ip = require('validate-ip');

validate-ip('255.255.255.255');
//=> true

validate-ip('10.0.1.256');
//=> false

validate-ip('192.168.1');
//=> false
```


## License

MIT © [Mert Kahyaoğlu](mertkahyaoglu.github.io)

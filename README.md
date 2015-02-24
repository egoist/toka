## Toka

[!donate](https://img.shields.io/gratipay/kchanzen.svg)](https://gratipay.com/kchanzen/)
[![NPM version](https://img.shields.io/npm/v/toka.svg?style=flat)](https://www.npmjs.com/package/toka)
[![NPM download](https://img.shields.io/npm/dm/toka.svg?style=flat)](https://www.npmjs.com/package/toka)
[![David Status](https://david-dm.org/kchanzen/toka.svg)](https://david-dm.org/kchanzen/toka)
[![Build Status](https://travis-ci.org/kchanzen/toka.svg?branch=master)](https://travis-ci.org/chanzen/toka)

### A handy tool to generate common files in command line

I used to search in Google then copy and paste these files, silly.

```bash
npm install toka -g

toka
toka -v
toka .gitignore <LAUNGUAGE NAMES>
toka .bowerrc <COMPONENT DIR>
toka license <LICENSE NAME>
```

Arguements:

- -d : generate default file (.gitignore)
- -a : append to an existing file (.gitignore)

Example:

```bash
toka .gitignore -d 
toka .gitignore python,go -a
toka .gitignore windows
toka .bowerrc lib
toka license MIT
```

The `.gitignore` languages we support: [Full List](lib/list/gitignore.js)

The LICENSE type we support: 

- Apache-2.0
- BSD-2
- BSD-3
- GPL-2.0
- ISC
- MIT
- MPL-2.0
- WTF

By default, `toka` is also alias to `gen`.

Yap, here we go and go happy. 

**Q: what does toka stand for?**

**A: My girlfriend, here she is: [NSFW](http://ww4.sinaimg.cn/large/a15b4afegw1enz38of1lug20dw07t1kx.gif)**

> Recently, My girlfriend AKA toka wants a Mac to help her work better, considering this project is filled with my love to toka and you Github lovers, you may donate some $ to me. Paypal and Alipay account both are i@0x142857.com

## LICENSE

[MIT](LICENSE)


## Toka

[![NPM version](https://img.shields.io/npm/v/toka.svg?style=flat)](https://www.npmjs.com/package/toka)
[![NPM download](https://img.shields.io/npm/dm/toka.svg?style=flat)](https://www.npmjs.com/package/toka)
[![David Status](https://david-dm.org/aprilorange/toka.svg)](https://david-dm.org/aprilorange/toka)

### A handy tool to generate common files in command line

I used to search in Google then copy and paste these files, silly.

```bash
npm install toka -g

toka
toka -v
toka .gitignore <LAUNGUAGE NAMES>   # alias to toka g
toka .bowerrc <COMPONENT DIR>       # alias to toka b
toka license <LICENSE NAME>         # alias to toka l
toka webpack                        # alias to toka w
```

#### Arguements:

gitignore only:

- -d : generate default file
- -a : append to an existing file

webpack only:

- -p/--path
- -f/--filename
- -e/--entry

Example:

```bash
toka .gitignore -d
toka .gitignore python,go -a
toka .gitignore windows
toka .bowerrc lib
toka license MIT
toka webpack -e src/app/app.js -p /build/js -f bundle.js
```

The `.gitignore` languages we support: [Full List](lib/list/gitignore.js)

The LICENSE type we support:

(Fuzzy search is now supported! It means you can simply type things like `toka l apa` to add Apache license)

- Apache-2.0
- BSD-2
- BSD-3
- GPL-2.0
- ISC
- MIT
- MPL-2.0
- WTF

Yap, here we go and go happy.

**Q: what does toka stand for?**

**A: My girlfriend, here she is: [NSFW](http://ww4.sinaimg.cn/large/a15b4afegw1enz38of1lug20dw07t1kx.gif)**

## LICENSE

[MIT](LICENSE)

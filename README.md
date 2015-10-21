## Toka

[![NPM version](https://img.shields.io/npm/v/toka.svg?style=flat-square)](https://www.npmjs.com/package/toka)
[![NPM download](https://img.shields.io/npm/dm/toka.svg?style=flat-square)](https://www.npmjs.com/package/toka)
[![David Status](https://img.shields.io/david/egoist/toka.svg?style=flat-square)](https://david-dm.org/egoist/toka)

### A handy tool to generate common files in command line

I used to searching in Google then copy and paste these files, silly.

```bash
npm install toka -g

toka
toka -v
toka .gitignore <LAUNGUAGE NAMES>   # alias to toka g/git
toka .bowerrc <COMPONENT DIR>       # alias to toka b
toka license <LICENSE NAME>         # alias to toka l
toka webpack                        # alias to toka w
toka gulp                           # alias to toka gu
toka dl <NAME|URL>                  # alias to toka d/download   
```

**New feature!**

```bash
>_ toka dl https://some-url.com/webpack.config.dev.js --name hotreload
:: hotreload is saved to your config file!

>_ toka dl hotreload
:: fetch : https://some-url.com/webpack.config.dev.js
::   progress : [====================] 100% 0.0s

:: hotreload is saved to current dir!

# works like wget <url> when not appending `--name`
>_ toka dl http://use-url-directly-is-ok-too.com/a.js

```

#### Arguments:

webpack/gitignore/gulp/bowerrc:

- --dir: the directory to save to

gitignore only:

- -d/--default : generate default file
- -a/--append : append to an existing file
- -g/--global : save to ~/.gitignore_global

webpack only:

- -p/--path
- -f/--filename
- -e/--entry

gulp only:

- -b/--babel : use gulpfile.babel.js

Example:

```bash
toka .gitignore -d
toka .gitignore python,go -a
toka .gitignore windows
toka .bowerrc lib
toka license MIT
toka gulp -b
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
- [SOX](https://github.com/egoist/sox-license)

Yap, here we go and go happy.

**Q: what does toka stand for?**

**A: My girlfriend, here she is: [NSFW](http://ww4.sinaimg.cn/large/a15b4afegw1enz38of1lug20dw07t1kx.gif)**

## LICENSE

[MIT](LICENSE)

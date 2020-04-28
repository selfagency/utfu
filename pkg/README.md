<h1 align="center">Welcome to utfu 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/selfagency_llc" target="_blank">
    <img alt="Twitter: selfagency\_llc" src="https://img.shields.io/twitter/follow/selfagency_llc.svg?style=social" />
  </a>
</p>

> Attempts to fix busted character encodings carried over from legacy text formats. This is a work-in-progress and not yet ready for production use.

## Install

```sh
yarn add uftu | npm install uftu
```

## Usage

Instantiate, then pass a string to either method, `hex` or `txt`. The former tries to do a regex search and replace for unicode chars. The latter tries to do a search and replace for characters in their typical misrendering (see chart [here](https://www.i18nqa.com/debug/utf8-debug.html)).

```javascript
import Uftu from 'uftu'

const dirtyText = 'On a certain level, it�s like shouting �fire� in a crowded theater.'

const uftu = new Uftu()

const cleanText = uftu.hex(dirtyText) || uftu.txt(dirtyText)
```

## Run tests

```sh
yarn run test
```

## Author

👤 **Daniel Sieradski <daniel@self.agency>**

* Website: [self.agency](https://self.agency)
* Twitter: [@selfagency\_llc](https://twitter.com/selfagency_llc)
* GitLab: [@selfagency](https://gitlab.com/selfagency)
* LinkedIn: [@selfagency](https://linkedin.com/in/selfagency)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://gitlab.com/selfagency/uftu/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

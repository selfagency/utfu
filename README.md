# üŧ⨍û ➞ utfu

[![npm](https://img.shields.io/npm/v/utfu.svg)](https://www.npmjs.com/package/utfu) [![npm](https://img.shields.io/npm/dt/utfu.svg)](https://www.npmjs.com/package/utfu) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Replaces busted characters carried over from legacy text encodings with the proper UTF-8 characters.

## Install

```sh
yarn add utfu || npm install utfu
```

## Usage

Say you've got a string that looks like this:

`Thereâ€™s no way Iâ€™m paying â‚¬30 for that!`

Pass it to either method, `hex`, `htx`, or `txt`, and you'll hopefully get back:

`There’s no way I’m paying €30 for that!`

- `hex` substitutes unicode hex values (ie., `\u20ac`)
- `htx` substitutes the HTML escape sequence (ie., `&#x20AC;`)
- `txt` substitutes the actual character (ie., `€`)

- See [substitution chart](https://www.i18nqa.com/debug/utf8-debug.html) for mappings, more or less

```javascript
import { hex, htx, txt } from 'utfu'

const dirty = 'On a certain level, it�s like shouting �fire� in a crowded theater.'

const cleanHex = hex(dirty)
// --> 'On a certain level, it\u2019s like shouting \u201Cfire\u201D in a crowded theater.'

const cleanHTML = htx(dirty)
// --> 'On a certain level, it&#x2019;s like shouting &#x201C;fire&#x201D; in a crowded theater.'

const cleanTxt = txt(dirty)
// --> 'On a certain level, it’s like shouting “fire” in a crowded theater.'
```

## Run tests

```sh
yarn test
```

## CI

This repository includes a GitHub Actions workflow that runs the test suite on push and pull requests (see `.github/workflows/ci.yml`).

## Author

👤 **Daniel Sieradski <hello@self.agency>**

- Website: [self.agency](https://self.agency)
- BlueSky: [@self.agency](https://bsky.app/profile/self.agency)

## Acknowledgements

Gracious thanks to [Mathias Bynens](https://mathiasbynens.be/), upon whose [he](https://github.com/mathiasbynens/he) and [windows-1252](https://github.com/mathiasbynens/windows-1252) packages this project depends.

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://gitlab.com/selfagency/utfu/issues).

## Show your support

Give a ⭐️ if this project helped you!

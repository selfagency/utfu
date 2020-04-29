'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const solo = [{
  utf8: {
    char: 'Á',
    regex: /\u00C1/gu,
    hex: '\u00C1'
  },
  alt: [{
    char: 'à',
    regex: /\u00E0/gu,
    hex: '\u00E0'
  }, {
    char: 'í',
    regex: /\u00ED/gu,
    hex: '\u00ED'
  }, {
    char: 'Í',
    regex: /\u00CD/gu,
    hex: '\u00CD'
  }, {
    char: 'Ï',
    regex: /\u00CF/gu,
    hex: '\u00CF'
  }, {
    char: 'Ð',
    regex: /\u00D0/gu,
    hex: '\u00D0'
  }, {
    char: 'Ý',
    regex: /\u00DD/gu,
    hex: '\u00DD'
  }],
  misrender: {
    chars: 'Ã',
    regex: /\u00C3/gu,
    hex: '\u00C3'
  }
}, {
  utf8: {
    char: '',
    regex: /\u00A0/gu,
    hex: '\u00A0'
  },
  misrender: {
    chars: 'Â',
    regex: /\u00C2/gu,
    hex: '\u00C2'
  }
}, {
  utf8: {
    char: 'Š',
    regex: /\u0160/gu,
    hex: '\u0160'
  },
  misrender: {
    chars: 'Å',
    regex: /\u00C5/gu,
    hex: '\u00C5'
  }
}];
const duo = [{
  utf8: {
    char: 'À',
    regex: /\u00C0/gu,
    hex: '\u00C0'
  },
  misrender: {
    chars: 'Ã€',
    regex: /\u00C3\u20AC/gu,
    hex: '\u00C3\u20AC'
  }
}, {
  utf8: {
    char: 'Â',
    regex: /\u00C2/gu,
    hex: '\u00C2'
  },
  misrender: {
    chars: 'Ã‚',
    regex: /\u00C3\u201A/gu,
    hex: '\u00C3\u201A'
  }
}, {
  utf8: {
    char: 'ƒ',
    regex: /\u0192/gu,
    hex: '\u0192'
  },
  misrender: {
    chars: 'Æ’',
    regex: /\u00C6\u2019/gu,
    hex: '\u00C6\u2019'
  }
}, {
  utf8: {
    char: 'Ã',
    regex: /\u00C3/gu,
    hex: '\u00C3'
  },
  misrender: {
    chars: 'Ãƒ',
    regex: /\u00C3\u0192/gu,
    hex: '\u00C3\u0192'
  }
}, {
  utf8: {
    char: 'Ä',
    regex: /\u00C4/gu,
    hex: '\u00C4'
  },
  misrender: {
    chars: 'Ã„',
    regex: /\u00C3\u201E/gu,
    hex: '\u00C3\u201E'
  }
}, {
  utf8: {
    char: 'Å',
    regex: /\u00C5/gu,
    hex: '\u00C5'
  },
  misrender: {
    chars: 'Ã…',
    regex: /\u00C3\u2026/gu,
    hex: '\u00C3\u2026'
  }
}, {
  utf8: {
    char: '†',
    regex: /\u2020/gu,
    hex: '\u2020'
  },
  misrender: {
    chars: 'â€',
    regex: /\u00E2\u20AC/gu,
    hex: '\u00E2\u20AC'
  }
}, {
  utf8: {
    char: 'Æ',
    regex: /\u00C6/gu,
    hex: '\u00C6'
  },
  misrender: {
    chars: 'Ã†',
    regex: /\u00C3\u2020/gu,
    hex: '\u00C3\u2020'
  }
}, {
  utf8: {
    char: 'Ç',
    regex: /\u00C7/gu,
    hex: '\u00C7'
  },
  misrender: {
    chars: 'Ã‡',
    regex: /\u00C3\u2021/gu,
    hex: '\u00C3\u2021'
  }
}, {
  utf8: {
    char: 'ˆ',
    regex: /\u02C6/gu,
    hex: '\u02C6'
  },
  misrender: {
    chars: 'Ë†',
    regex: /\u00CB\u2020/gu,
    hex: '\u00CB\u2020'
  }
}, {
  utf8: {
    char: 'È',
    regex: /\u00C8/gu,
    hex: '\u00C8'
  },
  misrender: {
    chars: 'Ãˆ',
    regex: /\u00C3\u02C6/gu,
    hex: '\u00C3\u02C6'
  }
}, {
  utf8: {
    char: 'É',
    regex: /\u00C9/gu,
    hex: '\u00C9'
  },
  misrender: {
    chars: 'Ã‰',
    regex: /\u00C3\u2030/gu,
    hex: '\u00C3\u2030'
  }
}, {
  utf8: {
    char: 'ž',
    regex: /\u017E/gu,
    hex: '\u017E'
  },
  misrender: {
    chars: 'Å¾',
    regex: /\u00C5\u00BE/gu,
    hex: '\u00C5\u00BE'
  }
}, {
  utf8: {
    char: 'Û',
    regex: /\u00DB/gu,
    hex: '\u00DB'
  },
  misrender: {
    chars: 'Ã›',
    regex: /\u00C3\u203A/gu,
    hex: '\u00C3\u203A'
  }
}, {
  utf8: {
    char: 'œ',
    regex: /\u0153/gu,
    hex: '\u0153'
  },
  misrender: {
    chars: 'Å“',
    regex: /\u00C5\u201C/gu,
    hex: '\u00C5\u201C'
  }
}, {
  utf8: {
    char: 'Ü',
    regex: /\u00DC/gu,
    hex: '\u00DC'
  },
  misrender: {
    chars: 'Ãœ',
    regex: /\u00C3\u0153/gu,
    hex: '\u00C3\u0153'
  }
}, {
  utf8: {
    char: 'Þ',
    regex: /\u00DE/gu,
    hex: '\u00DE'
  },
  misrender: {
    chars: 'Ãž',
    regex: /\u00C3\u017E/gu,
    hex: '\u00C3\u017E'
  }
}, {
  utf8: {
    char: 'Ÿ',
    regex: /\u0178/gu,
    hex: '\u0178'
  },
  misrender: {
    chars: 'Å¸',
    regex: /\u00C5\u00B8/gu,
    hex: '\u00C5\u00B8'
  }
}, {
  utf8: {
    char: 'ß',
    regex: /\u00DF/gu,
    hex: '\u00DF'
  },
  misrender: {
    chars: 'ÃŸ',
    regex: /\u00C3\u0178/gu,
    hex: '\u00C3\u0178'
  }
}, {
  utf8: {
    char: '®',
    regex: /\u00AE/gu,
    hex: '\u00AE'
  },
  misrender: {
    chars: 'Â®',
    regex: /\u00C2\u00AE/gu,
    hex: '\u00C2\u00AE'
  }
}, {
  utf8: {
    char: 'î',
    regex: /\u00EE/gu,
    hex: '\u00EE'
  },
  misrender: {
    chars: 'Ã®',
    regex: /\u00C3\u00AE/gu,
    hex: '\u00C3\u00AE'
  }
}, {
  utf8: {
    char: '¯',
    regex: /\u00AF/gu,
    hex: '\u00AF'
  },
  misrender: {
    chars: 'Â¯',
    regex: /\u00C2\u00AF/gu,
    hex: '\u00C2\u00AF'
  }
}, {
  utf8: {
    char: 'ï',
    regex: /\u00EF/gu,
    hex: '\u00EF'
  },
  misrender: {
    chars: 'Ã¯',
    regex: /\u00C3\u00AF/gu,
    hex: '\u00C3\u00AF'
  }
}, {
  utf8: {
    char: '°',
    regex: /\u00B0/gu,
    hex: '\u00B0'
  },
  misrender: {
    chars: 'Â°',
    regex: /\u00C2\u00B0/gu,
    hex: '\u00C2\u00B0'
  }
}, {
  utf8: {
    char: 'ð',
    regex: /\u00F0/gu,
    hex: '\u00F0'
  },
  misrender: {
    chars: 'Ã°',
    regex: /\u00C3\u00B0/gu,
    hex: '\u00C3\u00B0'
  }
}, {
  utf8: {
    char: '±',
    regex: /\u00B1/gu,
    hex: '\u00B1'
  },
  misrender: {
    chars: 'Â±',
    regex: /\u00C2\u00B1/gu,
    hex: '\u00C2\u00B1'
  }
}, {
  utf8: {
    char: 'ñ',
    regex: /\u00F1/gu,
    hex: '\u00F1'
  },
  misrender: {
    chars: 'Ã±',
    regex: /\u00C3\u00B1/gu,
    hex: '\u00C3\u00B1'
  }
}, {
  utf8: {
    char: '¡',
    regex: /\u00A1/gu,
    hex: '\u00A1'
  },
  misrender: {
    chars: 'Â¡',
    regex: /\u00C2\u00A1/gu,
    hex: '\u00C2\u00A1'
  }
}, {
  utf8: {
    char: 'á',
    regex: /\u00E1/gu,
    hex: '\u00E1'
  },
  misrender: {
    chars: 'Ã¡',
    regex: /\u00C3\u00A1/gu,
    hex: '\u00C3\u00A1'
  }
}, {
  utf8: {
    char: '¢',
    regex: /\u00A2/gu,
    hex: '\u00A2'
  },
  misrender: {
    chars: 'Â¢',
    regex: /\u00C2\u00A2/gu,
    hex: '\u00C2\u00A2'
  }
}, {
  utf8: {
    char: 'â',
    regex: /\u00E2/gu,
    hex: '\u00E2'
  },
  misrender: {
    chars: 'Ã¢',
    regex: /\u00C3\u00A2/gu,
    hex: '\u00C3\u00A2'
  }
}, {
  utf8: {
    char: '£',
    regex: /\u00A3/gu,
    hex: '\u00A3'
  },
  misrender: {
    chars: 'Â£',
    regex: /\u00C2\u00A3/gu,
    hex: '\u00C2\u00A3'
  }
}, {
  utf8: {
    char: 'ã',
    regex: /\u00E3/gu,
    hex: '\u00E3'
  },
  misrender: {
    chars: 'Ã£',
    regex: /\u00C3\u00A3/gu,
    hex: '\u00C3\u00A3'
  }
}, {
  utf8: {
    char: '¤',
    regex: /\u00A4/gu,
    hex: '\u00A4'
  },
  misrender: {
    chars: 'Â¤',
    regex: /\u00C2\u00A4/gu,
    hex: '\u00C2\u00A4'
  }
}, {
  utf8: {
    char: 'ä',
    regex: /\u00E4/gu,
    hex: '\u00E4'
  },
  misrender: {
    chars: 'Ã¤',
    regex: /\u00C3\u00A4/gu,
    hex: '\u00C3\u00A4'
  }
}, {
  utf8: {
    char: '¥',
    regex: /\u00A5/gu,
    hex: '\u00A5'
  },
  misrender: {
    chars: 'Â¥',
    regex: /\u00C2\u00A5/gu,
    hex: '\u00C2\u00A5'
  }
}, {
  utf8: {
    char: 'å',
    regex: /\u00E5/gu,
    hex: '\u00E5'
  },
  misrender: {
    chars: 'Ã¥',
    regex: /\u00C3\u00A5/gu,
    hex: '\u00C3\u00A5'
  }
}, {
  utf8: {
    char: '¦',
    regex: /\u00A6/gu,
    hex: '\u00A6'
  },
  misrender: {
    chars: 'Â¦',
    regex: /\u00C2\u00A6/gu,
    hex: '\u00C2\u00A6'
  }
}, {
  utf8: {
    char: 'æ',
    regex: /\u00E6/gu,
    hex: '\u00E6'
  },
  misrender: {
    chars: 'Ã¦',
    regex: /\u00C3\u00A6/gu,
    hex: '\u00C3\u00A6'
  }
}, {
  utf8: {
    char: '§',
    regex: /\u00A7/gu,
    hex: '\u00A7'
  },
  misrender: {
    chars: 'Â§',
    regex: /\u00C2\u00A7/gu,
    hex: '\u00C2\u00A7'
  }
}, {
  utf8: {
    char: 'ç',
    regex: /\u00E7/gu,
    hex: '\u00E7'
  },
  misrender: {
    chars: 'Ã§',
    regex: /\u00C3\u00A7/gu,
    hex: '\u00C3\u00A7'
  }
}, {
  utf8: {
    char: '¨',
    regex: /\u00A8/gu,
    hex: '\u00A8'
  },
  misrender: {
    chars: 'Â¨',
    regex: /\u00C2\u00A8/gu,
    hex: '\u00C2\u00A8'
  }
}, {
  utf8: {
    char: 'è',
    regex: /\u00E8/gu,
    hex: '\u00E8'
  },
  misrender: {
    chars: 'Ã¨',
    regex: /\u00C3\u00A8/gu,
    hex: '\u00C3\u00A8'
  }
}, {
  utf8: {
    char: 'Ù',
    regex: /\u00D9/gu,
    hex: '\u00D9'
  },
  misrender: {
    chars: 'Ã™',
    regex: /\u00C3\u2122/gu,
    hex: '\u00C3\u2122'
  }
}, {
  utf8: {
    char: 'š',
    regex: /\u0161/gu,
    hex: '\u0161'
  },
  misrender: {
    chars: 'Å¡',
    regex: /\u00C5\u00A1/gu,
    hex: '\u00C5\u00A1'
  }
}, {
  utf8: {
    char: 'Ú',
    regex: /\u00DA/gu,
    hex: '\u00DA'
  },
  misrender: {
    chars: 'Ãš',
    regex: /\u00C3\u0161/gu,
    hex: '\u00C3\u0161'
  }
}, {
  utf8: {
    char: '©',
    regex: /\u00A9/gu,
    hex: '\u00A9'
  },
  misrender: {
    chars: 'Â©',
    regex: /\u00C2\u00A9/gu,
    hex: '\u00C2\u00A9'
  }
}, {
  utf8: {
    char: 'é',
    regex: /\u00E9/gu,
    hex: '\u00E9'
  },
  misrender: {
    chars: 'Ã©',
    regex: /\u00C3\u00A9/gu,
    hex: '\u00C3\u00A9'
  }
}, {
  utf8: {
    char: 'ª',
    regex: /\u00AA/gu,
    hex: '\u00AA'
  },
  misrender: {
    chars: 'Âª',
    regex: /\u00C2\u00AA/gu,
    hex: '\u00C2\u00AA'
  }
}, {
  utf8: {
    char: 'ê',
    regex: /\u00EA/gu,
    hex: '\u00EA'
  },
  misrender: {
    chars: 'Ãª',
    regex: /\u00C3\u00AA/gu,
    hex: '\u00C3\u00AA'
  }
}, {
  utf8: {
    char: '«',
    regex: /\u00AB/gu,
    hex: '\u00AB'
  },
  misrender: {
    chars: 'Â«',
    regex: /\u00C2\u00AB/gu,
    hex: '\u00C2\u00AB'
  }
}, {
  utf8: {
    char: 'ë',
    regex: /\u00EB/gu,
    hex: '\u00EB'
  },
  misrender: {
    chars: 'Ã«',
    regex: /\u00C3\u00AB/gu,
    hex: '\u00C3\u00AB'
  }
}, {
  utf8: {
    char: '¬',
    regex: /\u00AC/gu,
    hex: '\u00AC'
  },
  misrender: {
    chars: 'Â¬',
    regex: /\u00C2\u00AC/gu,
    hex: '\u00C2\u00AC'
  }
}, {
  utf8: {
    char: 'ì',
    regex: /\u00EC/gu,
    hex: '\u00EC'
  },
  misrender: {
    chars: 'Ã¬',
    regex: /\u00C3\u00AC/gu,
    hex: '\u00C3\u00AC'
  }
}, {
  utf8: {
    char: '²',
    regex: /\u00B2/gu,
    hex: '\u00B2'
  },
  misrender: {
    chars: 'Â²',
    regex: /\u00C2\u00B2/gu,
    hex: '\u00C2\u00B2'
  }
}, {
  utf8: {
    char: 'ò',
    regex: /\u00F2/gu,
    hex: '\u00F2'
  },
  misrender: {
    chars: 'Ã²',
    regex: /\u00C3\u00B2/gu,
    hex: '\u00C3\u00B2'
  }
}, {
  utf8: {
    char: '³',
    regex: /\u00B3/gu,
    hex: '\u00B3'
  },
  misrender: {
    chars: 'Â³',
    regex: /\u00C2\u00B3/gu,
    hex: '\u00C2\u00B3'
  }
}, {
  utf8: {
    char: 'ó',
    regex: /\u00F3/gu,
    hex: '\u00F3'
  },
  misrender: {
    chars: 'Ã³',
    regex: /\u00C3\u00B3/gu,
    hex: '\u00C3\u00B3'
  }
}, {
  utf8: {
    char: '´',
    regex: /\u00B4/gu,
    hex: '\u00B4'
  },
  misrender: {
    chars: 'Â´',
    regex: /\u00C2\u00B4/gu,
    hex: '\u00C2\u00B4'
  }
}, {
  utf8: {
    char: 'ô',
    regex: /\u00F4/gu,
    hex: '\u00F4'
  },
  misrender: {
    chars: 'Ã´',
    regex: /\u00C3\u00B4/gu,
    hex: '\u00C3\u00B4'
  }
}, {
  utf8: {
    char: 'µ',
    regex: /\u00B5/gu,
    hex: '\u00B5'
  },
  misrender: {
    chars: 'Âµ',
    regex: /\u00C2\u00B5/gu,
    hex: '\u00C2\u00B5'
  }
}, {
  utf8: {
    char: 'õ',
    regex: /\u00F5/gu,
    hex: '\u00F5'
  },
  misrender: {
    chars: 'Ãµ',
    regex: /\u00C3\u00B5/gu,
    hex: '\u00C3\u00B5'
  }
}, {
  utf8: {
    char: '¶',
    regex: /\u00B6/gu,
    hex: '\u00B6'
  },
  misrender: {
    chars: 'Â¶',
    regex: /\u00C2\u00B6/gu,
    hex: '\u00C2\u00B6'
  }
}, {
  utf8: {
    char: 'ö',
    regex: /\u00F6/gu,
    hex: '\u00F6'
  },
  misrender: {
    chars: 'Ã¶',
    regex: /\u00C3\u00B6/gu,
    hex: '\u00C3\u00B6'
  }
}, {
  utf8: {
    char: '·',
    regex: /\u00B7/gu,
    hex: '\u00B7'
  },
  misrender: {
    chars: 'Â·',
    regex: /\u00C2\u00B7/gu,
    hex: '\u00C2\u00B7'
  }
}, {
  utf8: {
    char: '÷',
    regex: /\u00F7/gu,
    hex: '\u00F7'
  },
  misrender: {
    chars: 'Ã·',
    regex: /\u00C3\u00B7/gu,
    hex: '\u00C3\u00B7'
  }
}, {
  utf8: {
    char: '¸',
    regex: /\u00B8/gu,
    hex: '\u00B8'
  },
  misrender: {
    chars: 'Â¸',
    regex: /\u00C2\u00B8/gu,
    hex: '\u00C2\u00B8'
  }
}, {
  utf8: {
    char: 'ø',
    regex: /\u00F8/gu,
    hex: '\u00F8'
  },
  misrender: {
    chars: 'Ã¸',
    regex: /\u00C3\u00B8/gu,
    hex: '\u00C3\u00B8'
  }
}, {
  utf8: {
    char: '¹',
    regex: /\u00B9/gu,
    hex: '\u00B9'
  },
  misrender: {
    chars: 'Â¹',
    regex: /\u00C2\u00B9/gu,
    hex: '\u00C2\u00B9'
  }
}, {
  utf8: {
    char: 'ù',
    regex: /\u00F9/gu,
    hex: '\u00F9'
  },
  misrender: {
    chars: 'Ã¹',
    regex: /\u00C3\u00B9/gu,
    hex: '\u00C3\u00B9'
  }
}, {
  utf8: {
    char: 'º',
    regex: /\u00BA/gu,
    hex: '\u00BA'
  },
  misrender: {
    chars: 'Âº',
    regex: /\u00C2\u00BA/gu,
    hex: '\u00C2\u00BA'
  }
}, {
  utf8: {
    char: 'ú',
    regex: /\u00FA/gu,
    hex: '\u00FA'
  },
  misrender: {
    chars: 'Ãº',
    regex: /\u00C3\u00BA/gu,
    hex: '\u00C3\u00BA'
  }
}, {
  utf8: {
    char: '»',
    regex: /\u00BB/gu,
    hex: '\u00BB'
  },
  misrender: {
    chars: 'Â»',
    regex: /\u00C2\u00BB/gu,
    hex: '\u00C2\u00BB'
  }
}, {
  utf8: {
    char: 'û',
    regex: /\u00FB/gu,
    hex: '\u00FB'
  },
  misrender: {
    chars: 'Ã»',
    regex: /\u00C3\u00BB/gu,
    hex: '\u00C3\u00BB'
  }
}, {
  utf8: {
    char: '¼',
    regex: /\u00BC/gu,
    hex: '\u00BC'
  },
  misrender: {
    chars: 'Â¼',
    regex: /\u00C2\u00BC/gu,
    hex: '\u00C2\u00BC'
  }
}, {
  utf8: {
    char: 'ü',
    regex: /\u00FC/gu,
    hex: '\u00FC'
  },
  misrender: {
    chars: 'Ã¼',
    regex: /\u00C3\u00BC/gu,
    hex: '\u00C3\u00BC'
  }
}, {
  utf8: {
    char: '½',
    regex: /\u00BD/gu,
    hex: '\u00BD'
  },
  misrender: {
    chars: 'Â½',
    regex: /\u00C2\u00BD/gu,
    hex: '\u00C2\u00BD'
  }
}, {
  utf8: {
    char: 'ý',
    regex: /\u00FD/gu,
    hex: '\u00FD'
  },
  misrender: {
    chars: 'Ã½',
    regex: /\u00C3\u00BD/gu,
    hex: '\u00C3\u00BD'
  }
}, {
  utf8: {
    char: '¾',
    regex: /\u00BE/gu,
    hex: '\u00BE'
  },
  misrender: {
    chars: 'Â¾',
    regex: /\u00C2\u00BE/gu,
    hex: '\u00C2\u00BE'
  }
}, {
  utf8: {
    char: 'þ',
    regex: /\u00FE/gu,
    hex: '\u00FE'
  },
  misrender: {
    chars: 'Ã¾',
    regex: /\u00C3\u00BE/gu,
    hex: '\u00C3\u00BE'
  }
}, {
  utf8: {
    char: 'Ò',
    regex: /\u00D2/gu,
    hex: '\u00D2'
  },
  misrender: {
    chars: 'Ã’',
    regex: /\u00C3\u2019/gu,
    hex: '\u00C3\u2019'
  }
}, {
  utf8: {
    char: '¿',
    regex: /\u00BF/gu,
    hex: '\u00BF'
  },
  misrender: {
    chars: 'Â¿',
    regex: /\u00C2\u00BF/gu,
    hex: '\u00C2\u00BF'
  }
}, {
  utf8: {
    char: 'ÿ',
    regex: /\u00FF/gu,
    hex: '\u00FF'
  },
  misrender: {
    chars: 'Ã¿',
    regex: /\u00C3\u00BF/gu,
    hex: '\u00C3\u00BF'
  }
}, {
  utf8: {
    char: '×',
    regex: /\u00D7/gu,
    hex: '\u00D7'
  },
  misrender: {
    chars: 'Ã—',
    regex: /\u00C3\u2014/gu,
    hex: '\u00C3\u2014'
  }
}, {
  utf8: {
    char: '˜',
    regex: /\u02DC/gu,
    hex: '\u02DC'
  },
  misrender: {
    chars: 'Ëœ',
    regex: /\u00CB\u0153/gu,
    hex: '\u00CB\u0153'
  }
}, {
  utf8: {
    char: 'Ø',
    regex: /\u00D8/gu,
    hex: '\u00D8'
  },
  misrender: {
    chars: 'Ã˜',
    regex: /\u00C3\u02DC/gu,
    hex: '\u00C3\u02DC'
  }
}, {
  utf8: {
    char: 'Ó',
    regex: /\u00D3/gu,
    hex: '\u00D3'
  },
  misrender: {
    chars: 'Ã“',
    regex: /\u00C3\u201C/gu,
    hex: '\u00C3\u201C'
  }
}, {
  utf8: {
    char: '”',
    regex: /\u201D/gu,
    hex: '\u201D'
  },
  misrender: {
    chars: 'â€',
    regex: /\u00E2\u20AC/gu,
    hex: '\u00E2\u20AC'
  }
}, {
  utf8: {
    char: 'Ô',
    regex: /\u00D4/gu,
    hex: '\u00D4'
  },
  misrender: {
    chars: 'Ã”',
    regex: /\u00C3\u201D/gu,
    hex: '\u00C3\u201D'
  }
}, {
  utf8: {
    char: 'Õ',
    regex: /\u00D5/gu,
    hex: '\u00D5'
  },
  misrender: {
    chars: 'Ã•',
    regex: /\u00C3\u2022/gu,
    hex: '\u00C3\u2022'
  }
}, {
  utf8: {
    char: 'Ö',
    regex: /\u00D6/gu,
    hex: '\u00D6'
  },
  misrender: {
    chars: 'Ã–',
    regex: /\u00C3\u2013/gu,
    hex: '\u00C3\u2013'
  }
}, {
  utf8: {
    char: 'Ë',
    regex: /\u00CB/gu,
    hex: '\u00CB'
  },
  misrender: {
    chars: 'Ã‹',
    regex: /\u00C3\u2039/gu,
    hex: '\u00C3\u2039'
  }
}, {
  utf8: {
    char: 'Œ',
    regex: /\u0152/gu,
    hex: '\u0152'
  },
  misrender: {
    chars: 'Å’',
    regex: /\u00C5\u2019/gu,
    hex: '\u00C5\u2019'
  }
}, {
  utf8: {
    char: 'Ì',
    regex: /\u00CC/gu,
    hex: '\u00CC'
  },
  misrender: {
    chars: 'ÃŒ',
    regex: /\u00C3\u0152/gu,
    hex: '\u00C3\u0152'
  }
}, {
  utf8: {
    char: 'Ž',
    regex: /\u017D/gu,
    hex: '\u017D'
  },
  misrender: {
    chars: 'Å½',
    regex: /\u00C5\u00BD/gu,
    hex: '\u00C5\u00BD'
  }
}, {
  utf8: {
    char: 'Î',
    regex: /\u00CE/gu,
    hex: '\u00CE'
  },
  misrender: {
    chars: 'ÃŽ',
    regex: /\u00C3\u017D/gu,
    hex: '\u00C3\u017D'
  }
}, {
  utf8: {
    char: 'Ñ',
    regex: /\u00D1/gu,
    hex: '\u00D1'
  },
  misrender: {
    chars: 'Ã‘',
    regex: /\u00C3\u2018/gu,
    hex: '\u00C3\u2018'
  }
}, {
  utf8: {
    char: 'Ê',
    regex: /\u00CA/gu,
    hex: '\u00CA'
  },
  misrender: {
    chars: 'ÃŠ',
    regex: /\u00C3\u0160/gu,
    hex: '\u00C3\u0160'
  }
}];
const trio = [{
  utf8: {
    char: '€',
    regex: /\u20AC/gu,
    hex: '\u20AC'
  },
  misrender: {
    chars: 'â‚¬',
    regex: /\u00E2\u201A\u00AC/gu,
    hex: '\u00E2\u201A\u00AC'
  }
}, {
  utf8: {
    char: '‚',
    regex: /\u201A/gu,
    hex: '\u201A'
  },
  misrender: {
    chars: 'â€š',
    regex: /\u00E2\u20AC\u0161/gu,
    hex: '\u00E2\u20AC\u0161'
  }
}, {
  utf8: {
    char: '„',
    regex: /\u201E/gu,
    hex: '\u201E'
  },
  misrender: {
    chars: 'â€ž',
    regex: /\u00E2\u20AC\u017E/gu,
    hex: '\u00E2\u20AC\u017E'
  }
}, {
  utf8: {
    char: '…',
    regex: /\u2026/gu,
    hex: '\u2026'
  },
  misrender: {
    chars: 'â€¦',
    regex: /\u00E2\u20AC\u00A6/gu,
    hex: '\u00E2\u20AC\u00A6'
  }
}, {
  utf8: {
    char: '‡',
    regex: /\u2021/gu,
    hex: '\u2021'
  },
  misrender: {
    chars: 'â€¡',
    regex: /\u00E2\u20AC\u00A1/gu,
    hex: '\u00E2\u20AC\u00A1'
  }
}, {
  utf8: {
    char: '‰',
    regex: /\u2030/gu,
    hex: '\u2030'
  },
  misrender: {
    chars: 'â€°',
    regex: /\u00E2\u20AC\u00B0/gu,
    hex: '\u00E2\u20AC\u00B0'
  }
}, {
  utf8: {
    char: '‹',
    regex: /\u2039/gu,
    hex: '\u2039'
  },
  misrender: {
    chars: 'â€¹',
    regex: /\u00E2\u20AC\u00B9/gu,
    hex: '\u00E2\u20AC\u00B9'
  }
}, {
  utf8: {
    char: '‘',
    regex: /\u2018/gu,
    hex: '\u2018'
  },
  misrender: {
    chars: 'â€˜',
    regex: /\u00E2\u20AC\u02DC/gu,
    hex: '\u00E2\u20AC\u02DC'
  }
}, {
  utf8: {
    char: '’',
    regex: /\u2019/gu,
    hex: '\u2019'
  },
  misrender: {
    chars: 'â€™',
    regex: /\u00E2\u20AC\u2122/gu,
    hex: '\u00E2\u20AC\u2122'
  }
}, {
  utf8: {
    char: '“',
    regex: /\u201C/gu,
    hex: '\u201C'
  },
  misrender: {
    chars: 'â€œ',
    regex: /\u00E2\u20AC\u0153/gu,
    hex: '\u00E2\u20AC\u0153'
  }
}, {
  utf8: {
    char: '•',
    regex: /\u2022/gu,
    hex: '\u2022'
  },
  misrender: {
    chars: 'â€¢',
    regex: /\u00E2\u20AC\u00A2/gu,
    hex: '\u00E2\u20AC\u00A2'
  }
}, {
  utf8: {
    char: '–',
    regex: /\u2013/gu,
    hex: '\u2013'
  },
  misrender: {
    chars: 'â€“',
    regex: /\u00E2\u20AC\u201C/gu,
    hex: '\u00E2\u20AC\u201C'
  }
}, {
  utf8: {
    char: '—',
    regex: /\u2014/gu,
    hex: '\u2014'
  },
  misrender: {
    chars: 'â€”',
    regex: /\u00E2\u20AC\u201D/gu,
    hex: '\u00E2\u20AC\u201D'
  }
}, {
  utf8: {
    char: '™',
    regex: /\u2122/gu,
    hex: '\u2122'
  },
  misrender: {
    chars: 'â„¢',
    regex: /\u00E2\u201E\u00A2/gu,
    hex: '\u00E2\u201E\u00A2'
  }
}, {
  utf8: {
    char: '›',
    regex: /\u203A/gu,
    hex: '\u203A'
  },
  misrender: {
    chars: 'â€º',
    regex: /\u00E2\u20AC\u00BA/gu,
    hex: '\u00E2\u20AC\u00BA'
  }
}];

const hex = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  trio.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  duo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  solo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.hex);
  });
  return str;
};

const txt = str => {
  if (typeof str !== 'string') throw new Error('utfu requires a string to process');
  trio.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  duo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  solo.forEach(mapping => {
    str = str.replace(mapping.misrender.regex, mapping.utf8.char);
  });
  return str;
};

exports.hex = hex;
exports.txt = txt;
//# sourceMappingURL=index.js.map

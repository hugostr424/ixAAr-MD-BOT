function _0xc327(_0x454865, _0x6929e9) {
    const _0x4bc0b1 = _0x4bc0();
    return _0xc327 = function (_0xc32753, _0xe8f669) {
        _0xc32753 = _0xc32753 - 0x1b6;
        let _0x4b1c14 = _0x4bc0b1[_0xc32753];
        return _0x4b1c14;
    }, _0xc327(_0x454865, _0x6929e9);
}
const _0xe40b22 = _0xc327;
(function (_0x427658, _0x1bf094) {
    const _0x33131d = _0xc327,
        _0x37f810 = _0x427658();
    while (!![]) {
        try {
            const _0xf46267 = parseInt(_0x33131d(0x1c4)) / 0x1 + parseInt(_0x33131d(0x1bc)) / 0x2 + -parseInt(_0x33131d(0x1bf)) / 0x3 + -parseInt(_0x33131d(0x1bd)) / 0x4 + parseInt(_0x33131d(0x1be)) / 0x5 + parseInt(_0x33131d(0x1c0)) / 0x6 * (-parseInt(_0x33131d(0x1b9)) / 0x7) + -parseInt(_0x33131d(0x1c2)) / 0x8 * (parseInt(_0x33131d(0x1c3)) / 0x9);
            if (_0xf46267 === _0x1bf094) break;
            else _0x37f810['push'](_0x37f810['shift']());
        } catch (_0x4635dd) {
            _0x37f810['push'](_0x37f810['shift']());
        }
    }
}(_0x4bc0, 0x4933f));
const axios = require('axios'),
    cheerio = require(_0xe40b22(0x1bb));

function _0x4bc0() {
    const _0x4f0509 = ['970917wXwtmE', '120882korrRR', 'trim', '1446568KRKdRQ', '9gLFwjM', '149487nFIMmT', 'td:nth-child(1) > span', 'load', 'http://qaz.wtf/u/convert.cgi?text=', 'exports', 'find', 'then', '56CaniQs', 'get', 'cheerio', '845874xIQPZk', '171264sfWphk', '2179335QArGJX'];
    _0x4bc0 = function () {
        return _0x4f0509;
    };
    return _0x4bc0();
}

function styletext(_0x5169a4) {
    return new Promise((_0x543a70, _0x1d2db3) => {
        const _0x3a783c = _0xc327;
        axios[_0x3a783c(0x1ba)](_0x3a783c(0x1c7) + _0x5169a4)[_0x3a783c(0x1b8)](({
            data: _0x9da2c5
        }) => {
            const _0x38a6c7 = _0x3a783c;
            let _0x1ec059 = cheerio[_0x38a6c7(0x1c6)](_0x9da2c5),
                _0x464dd4 = [];
            _0x1ec059('table > tbody > tr')['each'](function (_0x2522ff, _0x3dc8c5) {
                const _0x5371d2 = _0x38a6c7;
                _0x464dd4['push']({
                    'name': _0x1ec059(_0x3dc8c5)['find'](_0x5371d2(0x1c5))['text'](),
                    'result': _0x1ec059(_0x3dc8c5)[_0x5371d2(0x1b7)]('td:nth-child(2)')['text']()[_0x5371d2(0x1c1)]()
                });
            }), _0x543a70(_0x464dd4);
        });
    });
}
module[_0xe40b22(0x1b6)] = {
    'styletext': styletext
};
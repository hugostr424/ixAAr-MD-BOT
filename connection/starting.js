function _0x5896() {
    const _0x15720a = ['exports', 'random', '111760ejJylg', '1103420VsXSTR', 'terminal-kit', '167178eVnoWm', '3771112crqPEY', 'red', '4612904gSIAqG', 'screenfetch -A Deepin', '3014376uvVUFi', 'clear', '4481556aZCadQ', '../lib/color', '7nFTfoL', 'log', '99slcnBK', '5HwcBjc', 'terminal'];
    _0x5896 = function () {
        return _0x15720a;
    };
    return _0x5896();
}
const _0x45963a = _0x2588;
(function (_0x353341, _0x284a80) {
    const _0x259ebd = _0x2588,
        _0x417f52 = _0x353341();
    while (!![]) {
        try {
            const _0x1ac4e9 = -parseInt(_0x259ebd(0x12a)) / 0x1 + -parseInt(_0x259ebd(0x12d)) / 0x2 + parseInt(_0x259ebd(0x132)) / 0x3 + -parseInt(_0x259ebd(0x130)) / 0x4 * (parseInt(_0x259ebd(0x126)) / 0x5) + -parseInt(_0x259ebd(0x134)) / 0x6 + parseInt(_0x259ebd(0x136)) / 0x7 * (parseInt(_0x259ebd(0x12e)) / 0x8) + -parseInt(_0x259ebd(0x125)) / 0x9 * (-parseInt(_0x259ebd(0x12b)) / 0xa);
            if (_0x1ac4e9 === _0x284a80) break;
            else _0x417f52['push'](_0x417f52['shift']());
        } catch (_0x3c9d65) {
            _0x417f52['push'](_0x417f52['shift']());
        }
    }
}(_0x5896, 0x9120a));

function _0x2588(_0xad24a8, _0x5a8a43) {
    const _0x589693 = _0x5896();
    return _0x2588 = function (_0x2588e5, _0x318875) {
        _0x2588e5 = _0x2588e5 - 0x125;
        let _0x2c3b1c = _0x589693[_0x2588e5];
        return _0x2c3b1c;
    }, _0x2588(_0xad24a8, _0x5a8a43);
}
const {
    exec
} = require('child_process'), {
    chalk,
    color,
    bgcolor,
    ConsoleLog,
    biocolor
} = require(_0x45963a(0x135)), term = require(_0x45963a(0x12c))[_0x45963a(0x127)], loading = async () => {
    var _0x48f8f6, _0x235113 = 0x0;

    function _0x42b328() {
        const _0x4f17fc = _0x2588;
        _0x235113 += Math[_0x4f17fc(0x129)]() / 0xa, _0x48f8f6['update'](_0x235113), _0x235113 >= 0x1 ? setTimeout(function () {
            const _0x318557 = _0x4f17fc;
            console[_0x318557(0x133)](), exec(_0x318557(0x131), (_0x3f5447, _0x437ed, _0x10d29d) => {
                const _0x1d325f = _0x318557;
                console[_0x1d325f(0x137)](_0x437ed), console[_0x1d325f(0x137)](bgcolor('ixAAr MD BOT CREATED BY Dev ixAAr', _0x1d325f(0x12f)));
            });
        }, 0xc8) : setTimeout(_0x42b328, 0x5a + Math[_0x4f17fc(0x129)]() * 0xc8);
    }
    _0x48f8f6 = term['progressBar']({
        'width': 0x50,
        'title': '\x0a\x0aLoading this script....',
        'eta': !![],
        'percent': !![]
    }), _0x42b328();
};
module[_0x45963a(0x128)] = {
    'loading': loading
}
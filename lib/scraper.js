const _0xf95bb = _0x3f6d;
(function (_0x3f3381, _0x5bf430) {
    const _0x4a04bc = _0x3f6d,
        _0x512264 = _0x3f3381();
    while (!![]) {
        try {
            const _0x2601ba = -parseInt(_0x4a04bc(0x97)) / 0x1 + -parseInt(_0x4a04bc(0x95)) / 0x2 * (-parseInt(_0x4a04bc(0x88)) / 0x3) + parseInt(_0x4a04bc(0xae)) / 0x4 + -parseInt(_0x4a04bc(0x9d)) / 0x5 + -parseInt(_0x4a04bc(0x9c)) / 0x6 + parseInt(_0x4a04bc(0xa0)) / 0x7 * (parseInt(_0x4a04bc(0xa9)) / 0x8) + -parseInt(_0x4a04bc(0xc0)) / 0x9;
            if (_0x2601ba === _0x5bf430) break;
            else _0x512264['push'](_0x512264['shift']());
        } catch (_0x4fc543) {
            _0x512264['push'](_0x512264['shift']());
        }
    }
}(_0x41e3, 0xe1186));
const axios = require(_0xf95bb(0xa4)),
    cheerio = require(_0xf95bb(0xb6)),
    fs = require('fs'),
    error = {
        'link': {
            'status': ![],
            'message': _0xf95bb(0xac)
        }
    };

function _0x3f6d(_0x227536, _0x2a0834) {
    const _0x41e32e = _0x41e3();
    return _0x3f6d = function (_0x3f6dce, _0x457f56) {
        _0x3f6dce = _0x3f6dce - 0x87;
        let _0x52992f = _0x41e32e[_0x3f6dce];
        return _0x52992f;
    }, _0x3f6d(_0x227536, _0x2a0834);
}
exports['mediafire'] = async _0x361f93 => {
    const _0x7d503f = _0xf95bb;
    try {
        const {
            data: _0x4a9ff2
        } = await axios[_0x7d503f(0x9f)](_0x361f93), _0x42e866 = cheerio['load'](_0x4a9ff2), _0x432007 = {
            'filename': _0x42e866('div.dl-btn-label')['attr'](_0x7d503f(0xb5)),
            'filesize': _0x42e866(_0x7d503f(0x93))[_0x7d503f(0xbb)]()[_0x7d503f(0xaf)]('(')[0x1][_0x7d503f(0xaf)](')')[0x0],
            'uploadAt': _0x42e866(_0x7d503f(0xbe))[_0x7d503f(0xbb)]()[_0x7d503f(0xaf)](': ')[0x1],
            'mimetype': mime[_0x7d503f(0xb7)](_0x42e866(_0x7d503f(0x93))['attr']('href')),
            'ext': _0x42e866('a#downloadButton')[_0x7d503f(0xb2)](_0x7d503f(0x87))['replace'](/^.*[\.\/\\]/, ''),
            'filetype': _0x42e866('div.filetype')['text'](),
            'link': _0x42e866(_0x7d503f(0x93))[_0x7d503f(0xb2)]('href')
        };
        return {
            'status': !![],
            ..._0x432007
        };
    } catch {
        return {
            'status': ![],
            'message': _0x7d503f(0xb3)
        };
    }
}, exports[_0xf95bb(0xb1)] = async _0x1656c7 => {
    const _0x52ec22 = _0xf95bb;
    let _0x19a855 = await axios('https://indown.io/'),
        _0xcf3d75 = cheerio[_0x52ec22(0xa3)](_0x19a855[_0x52ec22(0xa5)]),
        _0x472661 = _0xcf3d75(_0x52ec22(0x99))['val'](),
        _0x521f91 = _0xcf3d75(_0x52ec22(0x98))['val'](),
        _0x1221e1 = _0xcf3d75(_0x52ec22(0xb0))[_0x52ec22(0x9a)](),
        {
            data: _0x367985
        } = await axios[_0x52ec22(0xab)](_0x52ec22(0x90), new URLSearchParams({
            'link': _0x1656c7,
            'referer': _0x472661,
            'locale': _0x521f91,
            '_token': _0x1221e1
        }), {
            'headers': {
                'cookie': _0x19a855[_0x52ec22(0xba)][_0x52ec22(0x89)][_0x52ec22(0xa1)]('; ')
            }
        }),
        _0x37237a = cheerio['load'](_0x367985),
        _0x477078 = [],
        _0x55f478 = cheerio[_0x52ec22(0xa3)](_0x37237a(_0x52ec22(0x8a))[_0x52ec22(0x8e)]());
    return _0x55f478(_0x52ec22(0xbc))[_0x52ec22(0xa6)](function () {
        const _0x1d096c = _0x52ec22;
        let _0x5960e0 = _0x37237a(this);
        _0x477078[_0x1d096c(0x8b)]({
            'type': 'video',
            'thumbnail': _0x5960e0['attr'](_0x1d096c(0xa8)),
            'url': _0x5960e0['find'](_0x1d096c(0xb4))[_0x1d096c(0xb2)]('src')
        });
    }), _0x55f478('img')[_0x52ec22(0xa6)](function () {
        const _0x4d95be = _0x52ec22;
        let _0x2123c3 = _0x37237a(this);
        _0x477078[_0x4d95be(0x8b)]({
            'type': _0x4d95be(0xb9),
            'url': _0x2123c3[_0x4d95be(0xb2)](_0x4d95be(0xad))
        });
    }), _0x477078;
}, exports[_0xf95bb(0x8d)] = async _0x242e6c => {
    const _0x13b91d = _0xf95bb;
    if (!/tiktok/ ['test'](_0x242e6c)) return error[_0x13b91d(0x96)];
    const _0x478194 = await axios[_0x13b91d(0x9f)]('https://tikdown.org/id'),
        _0x2c7a6e = cheerio[_0x13b91d(0xa3)](_0x478194[_0x13b91d(0xa5)]),
        _0x2667e3 = _0x2c7a6e(_0x13b91d(0xb8))[_0x13b91d(0xb2)]('value'),
        _0x5c9dc0 = {
            'url': _0x242e6c,
            '_token': _0x2667e3
        },
        {
            data: _0x404eac
        } = await axios[_0x13b91d(0x8f)](_0x13b91d(0x94), {
            'method': 'post',
            'data': new URLSearchParams(Object[_0x13b91d(0xa7)](_0x5c9dc0)),
            'headers': {
                'content-type': _0x13b91d(0x9b),
                'user-agent': _0x13b91d(0xbf)
            }
        });
    get_data = cheerio[_0x13b91d(0xa3)](_0x404eac[_0x13b91d(0x8e)]);
    if (_0x404eac[_0x13b91d(0x9e)]) return {
        'status': 0xc8,
        'thumbnail': get_data('img')[_0x13b91d(0xb2)](_0x13b91d(0xad)),
        'video': get_data('div.download-links > div:nth-child(1) > a')[_0x13b91d(0xb2)](_0x13b91d(0x87)),
        'audio': get_data('div.download-links > div:nth-child(2) > a')['attr'](_0x13b91d(0x87))
    };
    else return {
        'status': ![]
    };
};
let file = require[_0xf95bb(0x91)](__filename);

function _0x41e3() {
    const _0x279db2 = ['video', 'Update \'scraper.js\'', 'ul.details > li:nth-child(2)', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36', '7686891Inizzo', 'href', '2796621DOTJYt', 'set-cookie', '#result', 'push', 'watchFile', 'tiktok', 'html', 'request', 'https://indown.io/download', 'resolve', 'unwatchFile', 'a#downloadButton', 'https://tikdown.org/getAjax?', '2orLftH', 'link', '1115758ifQiNV', 'input[name=locale]', 'input[name=referer]', 'val', 'application/x-www-form-urlencoded; charset=UTF-8', '2643726uwpQtn', '2849725qeFrQO', 'status', 'get', '1444660ZKAGUK', 'join', 'cache', 'load', 'axios', 'data', 'each', 'entries', 'poster', '56IXSGfn', 'log', 'post', 'Link tidak valid!', 'src', '6102184zdTAUe', 'split', 'input[name=_token]', 'instagram', 'attr', 'error', 'source', 'title', 'cheerio', 'lookup', '#download-form > input[type=hidden]:nth-child(2)', 'image', 'headers', 'text'];
    _0x41e3 = function () {
        return _0x279db2;
    };
    return _0x41e3();
}
fs[_0xf95bb(0x8c)](file, () => {
    const _0x2528cb = _0xf95bb;
    fs[_0x2528cb(0x92)](file), console[_0x2528cb(0xaa)](_0x2528cb(0xbd)), delete require[_0x2528cb(0xa2)][file];
});
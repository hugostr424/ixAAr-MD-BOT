const _0x35f835 = _0x3e6b;
(function (_0x4d0ae1, _0x5c15ec) {
    const _0x40e8e4 = _0x3e6b,
        _0x219d1b = _0x4d0ae1();
    while (!![]) {
        try {
            const _0x2bc8ed = -parseInt(_0x40e8e4(0x1fe)) / 0x1 + parseInt(_0x40e8e4(0x202)) / 0x2 + parseInt(_0x40e8e4(0x1f4)) / 0x3 + -parseInt(_0x40e8e4(0x1f1)) / 0x4 * (-parseInt(_0x40e8e4(0x20a)) / 0x5) + -parseInt(_0x40e8e4(0x20b)) / 0x6 * (-parseInt(_0x40e8e4(0x1f2)) / 0x7) + parseInt(_0x40e8e4(0x1f5)) / 0x8 * (parseInt(_0x40e8e4(0x212)) / 0x9) + -parseInt(_0x40e8e4(0x1fa)) / 0xa;
            if (_0x2bc8ed === _0x5c15ec) break;
            else _0x219d1b['push'](_0x219d1b['shift']());
        } catch (_0x538f41) {
            _0x219d1b['push'](_0x219d1b['shift']());
        }
    }
}(_0x54c0, 0x6af65));
let axios = require('axios'),
    BodyForm = require('form-data'),
    {
        fromBuffer
    } = require('file-type'),
    fetch = require(_0x35f835(0x211)),
    fs = require('fs'),
    cheerio = require(_0x35f835(0x200));

function GraphOrg(_0x33cf52) {
    return new Promise(async (_0x4fd952, _0x17a5b5) => {
        const _0x1df6ce = _0x3e6b;
        if (!fs['existsSync'](_0x33cf52)) return _0x17a5b5(new Error(_0x1df6ce(0x214)));
        try {
            const _0x81d395 = new BodyForm();
            _0x81d395[_0x1df6ce(0x210)](_0x1df6ce(0x218), fs['createReadStream'](_0x33cf52));
            const _0x13aaf4 = await axios({
                'url': _0x1df6ce(0x206),
                'method': 'POST',
                'headers': {
                    ..._0x81d395['getHeaders']()
                },
                'data': _0x81d395
            });
            return _0x4fd952(_0x1df6ce(0x20e) + _0x13aaf4[_0x1df6ce(0x1fc)][0x0][_0x1df6ce(0x215)]);
        } catch (_0x2f1a12) {
            return _0x17a5b5(new Error(String(_0x2f1a12)));
        }
    });
}
async function UploadFileUgu(_0x2ac219) {
    return new Promise(async (_0x2d46ea, _0x47cafb) => {
        const _0x45b9b2 = _0x3e6b,
            _0x47598b = new BodyForm();
        _0x47598b['append'](_0x45b9b2(0x20c), fs[_0x45b9b2(0x1f8)](_0x2ac219)), await axios({
            'url': _0x45b9b2(0x1fd),
            'method': 'POST',
            'headers': {
                'User-Agent': _0x45b9b2(0x208),
                ..._0x47598b[_0x45b9b2(0x1fb)]()
            },
            'data': _0x47598b
        })[_0x45b9b2(0x209)](_0x32a0a3 => {
            const _0x47bbd9 = _0x45b9b2;
            _0x2d46ea(_0x32a0a3[_0x47bbd9(0x1fc)][_0x47bbd9(0x201)][0x0]);
        })[_0x45b9b2(0x1ff)](_0x2046f9 => _0x47cafb(_0x2046f9));
    });
}

function _0x3e6b(_0xa78e26, _0x4f3f25) {
    const _0x54c075 = _0x54c0();
    return _0x3e6b = function (_0x3e6b73, _0x344ca7) {
        _0x3e6b73 = _0x3e6b73 - 0x1f1;
        let _0x17b921 = _0x54c075[_0x3e6b73];
        return _0x17b921;
    }, _0x3e6b(_0xa78e26, _0x4f3f25);
}

function webp2mp4File(_0x764275) {
    return new Promise((_0x4f64c1, _0x297bcf) => {
        const _0x403915 = _0x3e6b,
            _0x3aab60 = new BodyForm();
        _0x3aab60[_0x403915(0x210)]('new-image-url', ''), _0x3aab60['append'](_0x403915(0x203), fs[_0x403915(0x1f8)](_0x764275)), axios({
            'method': 'post',
            'url': _0x403915(0x207),
            'data': _0x3aab60,
            'headers': {
                'Content-Type': _0x403915(0x216) + _0x3aab60['_boundary']
            }
        })[_0x403915(0x209)](({
            data: _0x16363e
        }) => {
            const _0x499342 = _0x403915,
                _0x98259e = new BodyForm(),
                _0x2f018e = cheerio[_0x499342(0x20d)](_0x16363e),
                _0x193272 = _0x2f018e('input[name=\"file\"]')[_0x499342(0x205)](_0x499342(0x20f));
            _0x98259e[_0x499342(0x210)](_0x499342(0x218), _0x193272), _0x98259e[_0x499342(0x210)](_0x499342(0x1f7), _0x499342(0x1f9)), axios({
                'method': _0x499342(0x217),
                'url': 'https://ezgif.com/webp-to-mp4/' + _0x193272,
                'data': _0x98259e,
                'headers': {
                    'Content-Type': _0x499342(0x216) + _0x98259e[_0x499342(0x1f6)]
                }
            })[_0x499342(0x209)](({
                data: _0x37c085
            }) => {
                const _0x1e2dd8 = _0x499342,
                    _0x324680 = cheerio[_0x1e2dd8(0x20d)](_0x37c085),
                    _0x4240a4 = _0x1e2dd8(0x204) + _0x324680(_0x1e2dd8(0x1f3))['attr']('src');
                _0x4f64c1({
                    'status': !![],
                    'message': _0x1e2dd8(0x213),
                    'result': _0x4240a4
                });
            })[_0x499342(0x1ff)](_0x297bcf);
        })[_0x403915(0x1ff)](_0x297bcf);
    });
}

function _0x54c0() {
    const _0x354126 = ['https://graph.org/upload', 'https://s6.ezgif.com/webp-to-mp4', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'then', '20YcxpYA', '168QNLCjd', 'files[]', 'load', 'https://graph.org', 'value', 'append', 'node-fetch', '437499uOcFHu', 'Created By MRHRTZ', 'File not Found', 'src', 'multipart/form-data; boundary=', 'post', 'file', '80964HtjFGe', '112399aMFWAT', 'div#output > p.outfile > video > source', '239934WLBCHC', '104Bbcxiy', '_boundary', 'convert', 'createReadStream', 'Convert WebP to MP4!', '11887890pdnWix', 'getHeaders', 'data', 'https://uguu.se/upload.php', '11606jPbuVK', 'catch', 'cheerio', 'files', '792062GpEGjR', 'new-image', 'https:', 'attr'];
    _0x54c0 = function () {
        return _0x354126;
    };
    return _0x54c0();
}
module['exports'] = {
    'GraphOrg': GraphOrg,
    'UploadFileUgu': UploadFileUgu,
    'webp2mp4File': webp2mp4File
};
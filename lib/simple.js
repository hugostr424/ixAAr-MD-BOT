const _0xddeb78 = _0x465b;

function _0x465b(_0x198035, _0x1e45e9) {
    const _0x4f78e1 = _0x4f78();
    return _0x465b = function (_0x465ba8, _0x1e03f2) {
        _0x465ba8 = _0x465ba8 - 0xb2;
        let _0x3cbbba = _0x4f78e1[_0x465ba8];
        return _0x3cbbba;
    }, _0x465b(_0x198035, _0x1e45e9);
}(function (_0x3baab5, _0x1563de) {
    const _0x5cd363 = _0x465b,
        _0x2b6522 = _0x3baab5();
    while (!![]) {
        try {
            const _0x626cfa = -parseInt(_0x5cd363(0xd4)) / 0x1 + -parseInt(_0x5cd363(0xe1)) / 0x2 * (parseInt(_0x5cd363(0xc1)) / 0x3) + -parseInt(_0x5cd363(0x12d)) / 0x4 + -parseInt(_0x5cd363(0xc2)) / 0x5 + parseInt(_0x5cd363(0xbc)) / 0x6 + -parseInt(_0x5cd363(0x13a)) / 0x7 + parseInt(_0x5cd363(0x139)) / 0x8 * (parseInt(_0x5cd363(0xd8)) / 0x9);
            if (_0x626cfa === _0x1563de) break;
            else _0x2b6522['push'](_0x2b6522['shift']());
        } catch (_0x518d07) {
            _0x2b6522['push'](_0x2b6522['shift']());
        }
    }
}(_0x4f78, 0x1e930));
const {
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    prepareWAMessageMedia,
    generateWAMessage,
    generateWAMessageFromContent,
    proto
} = require('@sampandey001/baileys'), {
    exec
} = require(_0xddeb78(0x108)), fs = require('fs'), jimp = require('jimp'), chalk = require(_0xddeb78(0xf0)), axios = require('axios'), FileType = require(_0xddeb78(0x12c)), {
    color,
    getRandom,
    pickRandom,
    getBuffer
} = require(_0xddeb78(0xda)), thumb = fs[_0xddeb78(0xd3)](_0xddeb78(0xc3)), moment = require('moment-timezone'), time = moment['tz'](_0xddeb78(0x13b))[_0xddeb78(0x111)](_0xddeb78(0xfa)), sleep = async _0x143e6b => {
    return new Promise(_0xc60d43 => setTimeout(_0xc60d43, _0x143e6b));
};
exports['move'] = (_0x505db2, _0x228433, _0x334c33) => {
    const _0x40cbbf = _0xddeb78;
    let _0x3d1101 = _0x228433;
    const _0x1444d3 = _0x3d1101[_0x40cbbf(0x120)][_0x40cbbf(0x138)];
    if (!_0x228433) return _0x228433;
    _0x3d1101[_0x40cbbf(0x120)] && (ID = _0x228433[_0x40cbbf(0x120)]['id'], _0x228433[_0x40cbbf(0xef)] = ID['startsWith'](_0x40cbbf(0xed)) && ID[_0x40cbbf(0x136)] === 0x10, _0x228433[_0x40cbbf(0x10f)] = _0x505db2[_0x40cbbf(0x12a)](_0x228433['Me'] && _0x505db2[_0x40cbbf(0xee)]['id'] || _0x228433[_0x40cbbf(0x13e)] || _0x228433[_0x40cbbf(0x120)][_0x40cbbf(0x13e)] || _0x228433[_0x40cbbf(0x120)][_0x40cbbf(0x138)] || ''));
    if (_0x228433[_0x40cbbf(0xdf)]) {
        _0x228433[_0x40cbbf(0xf9)] = Object['keys'](_0x228433['message'])[0x0], _0x228433[_0x40cbbf(0xbd)] = getContentType(_0x228433[_0x40cbbf(0xdf)]), _0x228433[_0x40cbbf(0xf5)] = _0x228433[_0x40cbbf(0xbd)] === _0x40cbbf(0xdd) || _0x228433[_0x40cbbf(0xbd)] === _0x40cbbf(0xb7), _0x228433[_0x40cbbf(0xd6)] = JSON[_0x40cbbf(0xde)](_0x228433['message']), _0x228433[_0x40cbbf(0xb5)] = _0x228433[_0x40cbbf(0xbd)] === _0x40cbbf(0x121) && _0x228433['content'][_0x40cbbf(0x117)](_0x40cbbf(0xdd)), _0x228433[_0x40cbbf(0xd1)] = _0x228433[_0x40cbbf(0xbd)] === _0x40cbbf(0x121) && _0x228433[_0x40cbbf(0xd6)]['includes'](_0x40cbbf(0xb7)), _0x228433[_0x40cbbf(0x11f)] = _0x228433['xtype'] === _0x40cbbf(0x121) && _0x228433['content'][_0x40cbbf(0x117)](_0x40cbbf(0xfc)), _0x228433[_0x40cbbf(0x11c)] = _0x228433[_0x40cbbf(0xbd)] === _0x40cbbf(0x121) && _0x228433[_0x40cbbf(0xd6)][_0x40cbbf(0x117)](_0x40cbbf(0xd2)), _0x228433[_0x40cbbf(0xe8)] = _0x228433['xtype'] === _0x40cbbf(0x121) && _0x228433['content'][_0x40cbbf(0x117)]('locationMessage'), _0x228433['msg'] = _0x228433[_0x40cbbf(0xbd)] == _0x40cbbf(0x105) ? _0x228433[_0x40cbbf(0xdf)][_0x228433['xtype']][_0x40cbbf(0xdf)][getContentType(_0x228433[_0x40cbbf(0xdf)][_0x228433[_0x40cbbf(0xbd)]][_0x40cbbf(0xdf)])] : _0x228433[_0x40cbbf(0xdf)][_0x228433[_0x40cbbf(0xbd)]];
        if (_0x228433['msg']) {
            let _0x572796 = _0x228433[_0x40cbbf(0x123)] = _0x228433[_0x40cbbf(0x10c)][_0x40cbbf(0x102)] ? _0x228433[_0x40cbbf(0x10c)]['contextInfo']['quotedMessage'] : null;
            if (_0x228433[_0x40cbbf(0x123)]) {
                let _0x3409ce = getContentType(_0x572796);
                [_0x40cbbf(0xb2)]['includes'](_0x3409ce) && (_0x3409ce = getContentType(_0x228433[_0x40cbbf(0x123)]), _0x228433[_0x40cbbf(0x123)] = _0x228433['quoted'][_0x3409ce]);
                if (typeof _0x228433[_0x40cbbf(0x123)] === _0x40cbbf(0x116)) _0x228433['quoted'] = {
                    'text': _0x228433[_0x40cbbf(0x123)]
                };
                try {
                    const _0x3d118f = _0x228433[_0x40cbbf(0xdf)][_0x228433[_0x40cbbf(0xbd)]][_0x40cbbf(0x102)][_0x40cbbf(0x11a)];
                    _0x3d118f[_0x40cbbf(0xfe)] ? _0x228433[_0x40cbbf(0x114)] = _0x3d118f['ephemeralMessage'][_0x40cbbf(0xdf)] : _0x228433[_0x40cbbf(0x114)] = _0x3d118f;
                    _0x228433['isQuotedMsg'] = !![], _0x228433[_0x40cbbf(0x114)][_0x40cbbf(0x10f)] = _0x228433[_0x40cbbf(0xdf)][_0x228433['xtype']][_0x40cbbf(0x102)][_0x40cbbf(0x13e)], _0x228433[_0x40cbbf(0x114)][_0x40cbbf(0xc0)] = _0x228433[_0x40cbbf(0x114)]['sender'] === conn[_0x40cbbf(0xee)]['id'][_0x40cbbf(0x10e)](':')[0x0] + _0x40cbbf(0xff) ? !![] : ![], _0x228433['quotedMsg']['type'] = Object['keys'](_0x228433[_0x40cbbf(0x114)])[0x0];
                    let _0x2096d4 = _0x228433['quotedMsg'];
                    _0x228433[_0x40cbbf(0x114)][_0x40cbbf(0x13f)] = _0x2096d4[_0x40cbbf(0x104)] === _0x40cbbf(0xf6) && _0x2096d4['conversation'] ? _0x2096d4['conversation'] : _0x2096d4['type'] == _0x40cbbf(0xdd) && _0x2096d4['imageMessage'][_0x40cbbf(0xdb)] ? _0x2096d4[_0x40cbbf(0xdd)]['caption'] : _0x2096d4['type'] == 'documentMessage' && _0x2096d4[_0x40cbbf(0xea)]['caption'] ? _0x2096d4[_0x40cbbf(0xea)]['caption'] : _0x2096d4[_0x40cbbf(0x104)] == _0x40cbbf(0xb7) && _0x2096d4[_0x40cbbf(0xb7)][_0x40cbbf(0xdb)] ? _0x2096d4[_0x40cbbf(0xb7)]['caption'] : _0x2096d4['type'] == _0x40cbbf(0x121) && _0x2096d4[_0x40cbbf(0x121)][_0x40cbbf(0xb6)] ? _0x2096d4[_0x40cbbf(0x121)][_0x40cbbf(0xb6)] : _0x2096d4[_0x40cbbf(0x104)] == 'buttonsMessage' && _0x2096d4[_0x40cbbf(0xd7)][_0x40cbbf(0xd0)] ? _0x2096d4[_0x40cbbf(0xd7)][_0x40cbbf(0xd0)] : '', _0x228433[_0x40cbbf(0x114)]['id'] = _0x228433['message'][_0x228433[_0x40cbbf(0xbd)]][_0x40cbbf(0x102)][_0x40cbbf(0x103)];
                } catch {
                    _0x228433['quotedMsg'] = null, _0x228433[_0x40cbbf(0x125)] = ![];
                }
                _0x228433[_0x40cbbf(0x123)]['id'] = _0x228433[_0x40cbbf(0x10c)]['contextInfo'][_0x40cbbf(0x103)], _0x228433['quoted'][_0x40cbbf(0xb3)] = _0x228433[_0x40cbbf(0x10c)][_0x40cbbf(0x102)][_0x40cbbf(0x138)] || _0x228433[_0x40cbbf(0xb3)], _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0xef)] = _0x228433[_0x40cbbf(0x123)]['id'] ? _0x228433[_0x40cbbf(0x123)]['id'][_0x40cbbf(0x126)](_0x40cbbf(0xed)) && _0x228433[_0x40cbbf(0x123)]['id']['length'] === 0x10 : ![], _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0x10f)] = _0x505db2[_0x40cbbf(0x12a)](_0x228433[_0x40cbbf(0x10c)][_0x40cbbf(0x102)][_0x40cbbf(0x13e)]), _0x228433['quoted']['fromMe'] = _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0x10f)] === (_0x505db2[_0x40cbbf(0xee)] && _0x505db2[_0x40cbbf(0xee)]['id']), _0x228433[_0x40cbbf(0x123)]['text'] = _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0xb6)] || _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0xdb)] || _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0xf6)] || _0x228433['quoted']['contentText'] || _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0x12b)] || _0x228433[_0x40cbbf(0x123)]['title'] || '', _0x228433[_0x40cbbf(0x123)][_0x40cbbf(0x10a)] = _0x228433[_0x40cbbf(0x10c)][_0x40cbbf(0x102)] ? _0x228433[_0x40cbbf(0x10c)]['contextInfo']['mentionedJid'] : [];
            }
        }
    }
    _0x228433[_0x40cbbf(0x12e)] = function (_0x34b044) {
        const _0x26db0d = _0x40cbbf;
        let _0x11d4f9 = [];
        for (let _0x24b508 of _0x34b044) {
            _0x24b508['id'] !== null ? _0x11d4f9[_0x26db0d(0xf1)](_0x24b508['id']) : '';
        }
        return _0x11d4f9;
    }, _0x228433['getGroupAdmins'] = function (_0x4c5627) {
        const _0x425367 = _0x40cbbf;
        let _0x2f4b97 = [];
        for (let _0x11a7c4 of _0x4c5627) {
            _0x11a7c4[_0x425367(0x11b)] !== null ? _0x2f4b97[_0x425367(0xf1)](_0x11a7c4['id']) : '';
        }
        return _0x2f4b97;
    }, _0x228433['reply'] = async _0x3815fd => {
        const _0x21bcce = _0x40cbbf;
        _0x505db2[_0x21bcce(0xbf)](_0x1444d3, {
            'text': _0x3815fd,
            'mentions': [_0x228433['sender']]
        }, {
            'quoted': _0x228433
        });
    };
    const _0x2cd735 = async _0x1a22bb => {
        const _0xfb2d8e = _0x40cbbf;
        let _0x510510 = (_0x1a22bb[_0xfb2d8e(0x10c)] || _0x1a22bb)['mimetype'] || '',
            _0x17924e = _0x510510[_0xfb2d8e(0x10e)]('/')[0x0][_0xfb2d8e(0xb8)](_0xfb2d8e(0xb9), _0xfb2d8e(0xc6)) ? _0x510510[_0xfb2d8e(0x10e)]('/')[0x0][_0xfb2d8e(0xb8)]('application', _0xfb2d8e(0xc6)) : _0x510510[_0xfb2d8e(0x10e)]('/')[0x0],
            _0x262d1a = _0x510510[_0xfb2d8e(0x10e)]('/')[0x1];
        const _0x148204 = await downloadContentFromMessage(_0x1a22bb, _0x17924e);
        let _0x11b915 = Buffer[_0xfb2d8e(0xe4)]([]);
        for await (const _0x12b533 of _0x148204) {
            _0x11b915 = Buffer['concat']([_0x11b915, _0x12b533]);
        }
        return _0x11b915;
    };
    _0x505db2[_0x40cbbf(0xe7)] = async (_0x34d731, _0x595497) => {
        const _0x16cd75 = _0x40cbbf;
        _0x505db2[_0x16cd75(0xbf)](_0x1444d3, {
            'delete': {
                'remoteJid': _0x1444d3,
                'fromMe': ![],
                'id': _0x34d731,
                'participant': _0x595497
            }
        })[_0x16cd75(0x122)](_0x508d7f => {
            const _0x28b3a8 = _0x16cd75;
            console[_0x28b3a8(0xec)](_0x508d7f), _0x228433['reply'](_0x28b3a8(0xf3));
        });
    }, _0x505db2[_0x40cbbf(0x124)] = async (_0x22f9da, _0x59d2f5, _0x7fb476 = ![], _0x190ae7 = {}) => {
        const _0xd00db5 = _0x40cbbf;
        let _0x4b9e07;
        _0x190ae7[_0xd00db5(0x129)] && (_0x59d2f5[_0xd00db5(0xdf)] = _0x59d2f5[_0xd00db5(0xdf)] && _0x59d2f5[_0xd00db5(0xdf)]['ephemeralMessage'] && _0x59d2f5['message'][_0xd00db5(0xfe)][_0xd00db5(0xdf)] ? _0x59d2f5[_0xd00db5(0xdf)]['ephemeralMessage']['message'] : _0x59d2f5[_0xd00db5(0xdf)] || undefined, _0x4b9e07 = Object[_0xd00db5(0x115)](_0x59d2f5['message'][_0xd00db5(0x105)][_0xd00db5(0xdf)])[0x0], delete(_0x59d2f5[_0xd00db5(0xdf)] && _0x59d2f5[_0xd00db5(0xdf)][_0xd00db5(0xca)] ? _0x59d2f5[_0xd00db5(0xdf)]['ignore'] : _0x59d2f5[_0xd00db5(0xdf)] || undefined), delete _0x59d2f5['message'][_0xd00db5(0x105)]['message'][_0x4b9e07][_0xd00db5(0x127)], _0x59d2f5[_0xd00db5(0xdf)] = {
            ..._0x59d2f5[_0xd00db5(0xdf)][_0xd00db5(0x105)]['message']
        });
        let _0x32fb93 = Object[_0xd00db5(0x115)](_0x59d2f5[_0xd00db5(0xdf)])[0x0],
            _0x154f24 = await generateForwardMessageContent(_0x59d2f5, _0x7fb476),
            _0x467e12 = Object['keys'](_0x154f24)[0x0],
            _0xa264b7 = {};
        if (_0x32fb93 != _0xd00db5(0xf6)) _0xa264b7 = _0x59d2f5[_0xd00db5(0xdf)][_0x32fb93][_0xd00db5(0x102)];
        _0x154f24[_0x467e12][_0xd00db5(0x102)] = {
            ..._0xa264b7,
            ..._0x154f24[_0x467e12][_0xd00db5(0x102)]
        };
        const _0x556dfc = await generateWAMessageFromContent(_0x22f9da, _0x154f24, _0x190ae7 ? {
            ..._0x154f24[_0x467e12],
            ..._0x190ae7,
            ..._0x190ae7[_0xd00db5(0x102)] ? {
                'contextInfo': {
                    ..._0x154f24[_0x467e12][_0xd00db5(0x102)],
                    ..._0x190ae7['contextInfo']
                }
            } : {}
        } : {});
        return await _0x505db2[_0xd00db5(0xf8)](_0x22f9da, _0x556dfc[_0xd00db5(0xdf)], {
            'messageId': _0x556dfc[_0xd00db5(0x120)]['id']
        }), _0x556dfc;
    }, _0x505db2['sendTextWithMentions'] = async (_0x2c5659, _0x408c93, _0x1ca89f, _0x357a55 = {}) => _0x505db2['sendMessage'](_0x2c5659, {
        'text': _0x408c93,
        'contextInfo': {
            'mentionedJid': [..._0x408c93[_0x40cbbf(0x13c)](/@(\d{0,16})/g)]['map'](_0x378a5d => _0x378a5d[0x1] + _0x40cbbf(0xff))
        }
    }, {
        'quoted': _0x1ca89f
    }), _0x505db2[_0x40cbbf(0xeb)] = async _0x3a02ca => {
        const _0x2692ac = _0x40cbbf;
        let _0x575225 = (_0x3a02ca[_0x2692ac(0x10c)] || _0x3a02ca)[_0x2692ac(0xdc)] || '',
            _0x589f0b = _0x3a02ca[_0x2692ac(0x112)] ? _0x3a02ca['mtype'][_0x2692ac(0xb8)](/Message/gi, '') : _0x575225[_0x2692ac(0x10e)]('/')[0x0];
        const _0xff7196 = await downloadContentFromMessage(_0x3a02ca, _0x589f0b);
        let _0x4f4c03 = Buffer[_0x2692ac(0xe4)]([]);
        for await (const _0x704346 of _0xff7196) {
            _0x4f4c03 = Buffer[_0x2692ac(0xce)]([_0x4f4c03, _0x704346]);
        }
        return _0x4f4c03;
    }, _0x505db2[_0x40cbbf(0xc9)] = async (_0x46efeb, _0xc481c4) => {
        mekh = _0x46efeb['length'], pesan_ke = 0x0;
        async function _0x308d6d() {
            const _0x591d5b = _0x465b;
            if (mekh == pesan_ke) return;
            await sleep(0x3e8), _0x505db2[_0x591d5b(0xbf)](_0x1444d3, {
                'delete': {
                    'remoteJid': _0x1444d3,
                    'fromMe': !![],
                    'id': _0x46efeb[pesan_ke],
                    'participant': _0xc481c4
                }
            }), pesan_ke += 0x1, _0x308d6d();
        }
        _0x308d6d();
    }, _0x505db2[_0x40cbbf(0x128)] = async (_0x479b5e, _0x1497db) => {
        const _0x275c45 = _0x40cbbf;
        await _0x505db2[_0x275c45(0xbf)](_0x1444d3, {
            'delete': {
                'remoteJid': _0x1444d3,
                'fromMe': !![],
                'id': _0x479b5e,
                'participant': _0x1497db
            }
        });
    }, _0x505db2[_0x40cbbf(0x13d)] = async (_0x4e040f, _0xdcd82, _0x371c72, _0x3b870d, _0x4c848d, _0x27cf0d, _0x1871e8) => {
        const _0x30acb = _0x40cbbf;
        let _0x15c88c = [{
                'buttonId': '' + _0xdcd82,
                'buttonText': {
                    'displayText': _0x371c72
                },
                'type': 0x1
            }],
            _0x24b947 = {
                'image': _0x3b870d,
                'caption': _0x4c848d,
                'footer': _0x27cf0d,
                'buttons': _0x15c88c,
                'headerType': 0x4
            };
        await _0x505db2[_0x30acb(0xbf)](_0x1444d3, _0x24b947, _0x1871e8);
    }, _0x228433[_0x40cbbf(0x132)] = async (_0x1eedfc, _0x51ad66, _0x242afa) => {
        const _0x967f7f = _0x40cbbf;
        return await generateWAMessage(_0x1eedfc, _0x51ad66, {
            ..._0x242afa,
            'userJid': _0x505db2[_0x967f7f(0xe3)]['creds']['me']['id'],
            'upload': _0x505db2[_0x967f7f(0x106)]
        });
    }, _0x228433[_0x40cbbf(0xc8)] = async (_0x3641ba, _0x2320f2, _0xbee983, _0x348e26, _0x319d2b, _0x5e2bd9) => {
        const _0x5193d5 = _0x40cbbf;
        var _0x162d31 = await generateWAMessageFromContent(_0x3641ba, {
            'templateMessage': {
                'hydratedTemplate': {
                    ..._0x5e2bd9['message'],
                    'hydratedContentText': _0x2320f2,
                    'hydratedFooterText': _0xbee983,
                    'hydratedButtons': _0x348e26
                }
            }
        }, {});
        _0x505db2[_0x5193d5(0xf8)](_0x3641ba, _0x162d31[_0x5193d5(0xdf)], {
            'messageId': _0x162d31[_0x5193d5(0x120)]['id']
        });
    };
    const _0x5aaa88 = moment()['tz']('Asia/Kolkata')[_0x40cbbf(0x111)](_0x40cbbf(0x10d));
    _0x5aaa88 < _0x40cbbf(0xc4) && (_0x228433['sayingtime'] = 'Good night', _0x228433[_0x40cbbf(0xfd)] = '🌃'), _0x5aaa88 < _0x40cbbf(0xcf) && (_0x228433['sayingtime'] = _0x40cbbf(0x137), _0x228433[_0x40cbbf(0xfd)] = '🌆'), _0x5aaa88 < _0x40cbbf(0x113) && (_0x228433[_0x40cbbf(0xf7)] = 'Good afternoon', _0x228433[_0x40cbbf(0xfd)] = '🌇'), _0x5aaa88 < _0x40cbbf(0x109) && (_0x228433['sayingtime'] = _0x40cbbf(0x137), _0x228433['timoji'] = '🌞'), _0x5aaa88 < '11:00:00' && (_0x228433[_0x40cbbf(0xf7)] = _0x40cbbf(0x134), _0x228433['timoji'] = '🌅'), _0x5aaa88 < '05:00:00' && (_0x228433[_0x40cbbf(0xf7)] = _0x40cbbf(0x10b), _0x228433[_0x40cbbf(0xfd)] = '🌃'), _0x228433[_0x40cbbf(0xcc)] = new Date(_0x40cbbf(0x133))['getTime'](), _0x228433[_0x40cbbf(0x101)] = new Date()['getTime'](), _0x228433[_0x40cbbf(0xb4)] = _0x228433[_0x40cbbf(0xcc)] - _0x228433[_0x40cbbf(0x101)], _0x228433[_0x40cbbf(0xe9)] = Math[_0x40cbbf(0x131)](_0x228433[_0x40cbbf(0xb4)] / (0x3e8 * 0x3c * 0x3c * 0x18)), _0x228433[_0x40cbbf(0xd9)] = Math['floor'](_0x228433[_0x40cbbf(0xb4)] % (0x3e8 * 0x3c * 0x3c * 0x18) / (0x3e8 * 0x3c * 0x3c)), _0x228433['menitnye'] = Math[_0x40cbbf(0x131)](_0x228433['selisih'] % (0x3e8 * 0x3c * 0x3c) / (0x3e8 * 0x3c)), _0x228433['detiknye'] = Math[_0x40cbbf(0x131)](_0x228433[_0x40cbbf(0xb4)] % (0x3e8 * 0x3c) / 0x3e8), _0x505db2['poll'] = async (_0x22ece5, _0x8a7600, _0x277d36) => {
        const _0xebc7fe = _0x40cbbf;
        var _0x2b8a71 = generateWAMessageFromContent(_0x1444d3, proto[_0xebc7fe(0xcb)][_0xebc7fe(0xe5)]({
            'pollCreationMessage': {
                'name': _0x22ece5,
                'options': _0x8a7600,
                'selectableOptionsCount': 0x5
            }
        }), _0x277d36);
        _0x505db2['relayMessage'](_0x1444d3, _0x2b8a71[_0xebc7fe(0xdf)], {
            'messageId': _0x2b8a71[_0xebc7fe(0x120)]['id']
        });
    }, _0x228433['templateButon5IMG'] = async (_0x5803f5, _0x3232b8 = '', _0x3fd74d = '', _0x17725a, _0x5063dc = [], _0x341f26 = {}) => {
        const _0x3031d9 = _0x40cbbf;
        let _0x3ede59 = await prepareWAMessageMedia({
                'image': _0x17725a
            }, {
                'upload': _0x505db2[_0x3031d9(0x106)]
            }),
            _0x227ecf = generateWAMessageFromContent(_0x5803f5, proto[_0x3031d9(0xcb)][_0x3031d9(0xe5)]({
                'templateMessage': {
                    'hydratedTemplate': {
                        'imageMessage': _0x3ede59[_0x3031d9(0xdd)],
                        'hydratedContentText': _0x3232b8,
                        'hydratedFooterText': _0x3fd74d,
                        'hydratedButtons': _0x5063dc
                    }
                }
            }), _0x341f26);
        _0x505db2['relayMessage'](_0x5803f5, _0x227ecf[_0x3031d9(0xdf)], {
            'messageId': _0x227ecf[_0x3031d9(0x120)]['id']
        });
    }, _0x505db2[_0x40cbbf(0xba)] = async _0x294132 => {
        const _0x577f7b = _0x40cbbf;
        let _0x219bda = '',
            _0x153bd2 = await axios[_0x577f7b(0x100)](_0x294132);
        _0x219bda = _0x153bd2[_0x577f7b(0xe6)][_0x577f7b(0xf2)], console[_0x577f7b(0xec)](_0x219bda);
        if (_0x219bda[_0x577f7b(0x10e)]('/')[0x1] === _0x577f7b(0x130)) return _0x577f7b(0xbe);
        if (_0x219bda === _0x577f7b(0xf4)) return _0x577f7b(0xc6);
        if (_0x219bda['split']('/')[0x0] === _0x577f7b(0x135)) return 'image';
        if (_0x219bda['split']('/')[0x0] === _0x577f7b(0xbe)) return _0x577f7b(0xbe);
        if (_0x219bda['split']('/')[0x0] === _0x577f7b(0x12f)) return _0x577f7b(0x12f);
    }, _0x505db2['downloadAndSaveMediaMessage'] = async (_0x51ebcd, _0x456d4d, _0x4c1987 = !![]) => {
        const _0xd69b50 = _0x40cbbf;
        let _0x38262c = _0x51ebcd[_0xd69b50(0x10c)] ? _0x51ebcd['msg'] : _0x51ebcd,
            _0x18b36c = (_0x51ebcd[_0xd69b50(0x10c)] || _0x51ebcd)[_0xd69b50(0xdc)] || '',
            _0x19ac81 = _0x51ebcd['mtype'] ? _0x51ebcd['mtype']['replace'](/Message/gi, '') : _0x18b36c[_0xd69b50(0x10e)]('/')[0x0];
        const _0x2c3b7b = await downloadContentFromMessage(_0x38262c, _0x19ac81);
        let _0x4cadff = Buffer[_0xd69b50(0xe4)]([]);
        for await (const _0x19c372 of _0x2c3b7b) {
            _0x4cadff = Buffer[_0xd69b50(0xce)]([_0x4cadff, _0x19c372]);
        }
        let _0x5a2235 = await FileType['fromBuffer'](_0x4cadff);
        return trueFileName = _0x4c1987 ? _0x456d4d + '.' + _0x5a2235[_0xd69b50(0xc5)] : _0x456d4d, await fs[_0xd69b50(0x110)](trueFileName, _0x4cadff), trueFileName;
    }, _0x505db2[_0x40cbbf(0x11e)] = async _0x4f2070 => {
        const _0x28c6df = _0x40cbbf,
            _0x3d3673 = await jimp['read'](_0x4f2070),
            _0x513a52 = _0x3d3673[_0x28c6df(0xe0)]() > _0x3d3673[_0x28c6df(0x11d)]() ? _0x3d3673[_0x28c6df(0xcd)](0x226, jimp[_0x28c6df(0xd5)]) : _0x3d3673[_0x28c6df(0xcd)](jimp['AUTO'], 0x28a);
        let _0x270c41 = await jimp[_0x28c6df(0xe2)](await _0x513a52[_0x28c6df(0x118)](jimp[_0x28c6df(0x107)]));
        return {
            'bufferzzz': await _0x513a52[_0x28c6df(0x118)](jimp['MIME_JPEG'])
        };
    }, _0x505db2[_0x40cbbf(0x119)] = async _0x20a748 => {
        const _0x149df0 = _0x40cbbf;
        return [..._0x20a748[_0x149df0(0x13c)](/@([0-9]{5,16}|0)/g)][_0x149df0(0xbb)](_0x263cd0 => _0x263cd0[0x1] + _0x149df0(0xff));
    }, _0x505db2['sendButtonMessage'] = async (_0x130ca1, _0xa85450, _0x8de325, _0x5618d8, _0x3ccc21, _0x1cfb31) => {
        const _0x4f32e6 = _0x40cbbf;
        let _0x2f381e = [{
                'buttonId': _0xa85450,
                'buttonText': {
                    'displayText': _0x8de325
                },
                'type': 0x1
            }],
            _0x2fa012 = {
                'text': _0x5618d8,
                'footer': _0x3ccc21,
                'buttons': _0x2f381e,
                'headerType': 0x4
            };
        _0x505db2[_0x4f32e6(0xbf)](_0x130ca1, _0x2fa012, _0x1cfb31);
    };
};

function _0x4f78() {
    const _0x3ec3c6 = ['stanzaId', 'type', 'viewOnceMessage', 'waUploadToServer', 'MIME_JPEG', 'child_process', '15:00:00', 'mentionedJid', 'Good night', 'msg', 'HH:mm:ss', 'split', 'sender', 'writeFileSync', 'format', 'mtype', '18:00:00', 'quotedMsg', 'keys', 'string', 'includes', 'getBufferAsync', 'parseMention', 'quotedMessage', 'admin', 'isQuotedSticker', 'getHeight', 'generateProfilePicture', 'isQuotedAudio', 'key', 'extendedTextMessage', 'catch', 'quoted', 'copyMSGForward', 'isQuotedMsg', 'startsWith', 'viewOnce', 'Delete', 'readViewOnce', 'decodeJid', 'selectedDisplayText', 'file-type', '37172HkWwck', 'getGroupMembers', 'audio', 'gif', 'floor', 'createMsg', '1 Jan 2023 00:00:00', 'Good morning', 'image', 'length', 'Good afternoon', 'remoteJid', '1870600yzHNQP', '1013012LanXVp', 'Asia/Kolkata', 'matchAll', 'sendButtonImage', 'participant', 'chats', 'productMessage', 'chat', 'selisih', 'isQuotedImage', 'text', 'videoMessage', 'replace', 'application', 'typeMediaUrl', 'map', '1374102CbczVw', 'xtype', 'video', 'sendMessage', 'fromMe', '183EtjnpZ', '121905estPTJ', './storage/image/thumb.jpg', '23:59:00', 'ext', 'document', 'New ', 'sendButton', 'DeleteMessage', 'ignore', 'Message', 'tanggal10', 'resize', 'concat', '19:00:00', 'contentText', 'isQuotedVideo', 'stickerMessage', 'readFileSync', '30083XaHJBj', 'AUTO', 'content', 'buttonsMessage', '9cIeeta', 'jamnye', './function.js', 'caption', 'mimetype', 'imageMessage', 'stringify', 'message', 'getWidth', '4234XEfERk', 'read', 'authState', 'from', 'fromObject', 'headers', 'deleteAll', 'isQuotedLocation', 'harinye', 'documentMessage', 'downloadMediaMessage', 'log', 'BAE5', 'user', 'isBaileys', 'chalk', 'push', 'content-type', 'Error!', 'application/pdf', 'isMedia', 'conversation', 'sayingtime', 'relayMessage', 'msgType', 'DD/MM HH:mm:ss', 'watchFile', 'audioMessage', 'timoji', 'ephemeralMessage', '@s.whatsapp.net', 'head', 'sekarang1', 'contextInfo'];
    _0x4f78 = function () {
        return _0x3ec3c6;
    };
    return _0x4f78();
}
let file = require['resolve'](__filename);
fs[_0xddeb78(0xfb)](file, () => {
    const _0x3db93e = _0xddeb78;
    fs['unwatchFile'](file), console[_0x3db93e(0xec)](chalk['yellow'](_0x3db93e(0xc7) + __filename)), delete require['cache'][file], require(file);
});
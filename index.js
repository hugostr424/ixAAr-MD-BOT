const _0xf58c2d = _0x1ace;

function _0x1ace(_0x5d5a94, _0x38424b) {
    const _0x542dd9 = _0x542d();
    return _0x1ace = function (_0x1acef5, _0x50a202) {
        _0x1acef5 = _0x1acef5 - 0x17e;
        let _0x27c9ec = _0x542dd9[_0x1acef5];
        return _0x27c9ec;
    }, _0x1ace(_0x5d5a94, _0x38424b);
}(function (_0x4f7a7c, _0x21f231) {
    const _0x3ac100 = _0x1ace,
        _0x48355d = _0x4f7a7c();
    while (!![]) {
        try {
            const _0x436743 = -parseInt(_0x3ac100(0x19e)) / 0x1 * (parseInt(_0x3ac100(0x1bd)) / 0x2) + -parseInt(_0x3ac100(0x1e4)) / 0x3 + -parseInt(_0x3ac100(0x190)) / 0x4 + parseInt(_0x3ac100(0x1ad)) / 0x5 * (-parseInt(_0x3ac100(0x1d1)) / 0x6) + -parseInt(_0x3ac100(0x1e1)) / 0x7 * (parseInt(_0x3ac100(0x1e0)) / 0x8) + parseInt(_0x3ac100(0x1ab)) / 0x9 * (parseInt(_0x3ac100(0x1ec)) / 0xa) + parseInt(_0x3ac100(0x1a9)) / 0xb * (parseInt(_0x3ac100(0x1cf)) / 0xc);
            if (_0x436743 === _0x21f231) break;
            else _0x48355d['push'](_0x48355d['shift']());
        } catch (_0x5b1706) {
            _0x48355d['push'](_0x48355d['shift']());
        }
    }
}(_0x542d, 0x2e730), console[_0xf58c2d(0x1a5)](_0xf58c2d(0x1b1)));
const SETTING = require(_0xf58c2d(0x1cc)),
    config = require('./config.js'),
    {
        imageToWebp,
        videoToWebp,
        writeExifImg,
        writeExifVid
    } = require(_0xf58c2d(0x1be)),
    googleTTS = SETTING['modul'][_0xf58c2d(0x1b4)],
    pino = SETTING[_0xf58c2d(0x185)][_0xf58c2d(0x1ca)],
    chalk = SETTING[_0xf58c2d(0x185)][_0xf58c2d(0x1ee)],
    fs = SETTING[_0xf58c2d(0x185)]['fs'],
    jimp = SETTING['modul']['jimp'],
    path = SETTING['modul'][_0xf58c2d(0x1f4)];
let {
    Boom
} = SETTING[_0xf58c2d(0x185)][_0xf58c2d(0x1d6)];
const PhoneNumber = SETTING[_0xf58c2d(0x185)]['phonenumber'],
    NodeCache = SETTING[_0xf58c2d(0x185)]['nodecache'],
    readline = SETTING[_0xf58c2d(0x185)][_0xf58c2d(0x1ce)],
    {
        move
    } = require(SETTING['file'][_0xf58c2d(0x199)]),
    {
        smsg
    } = require(SETTING['file']['yanz']);
let {
    default: makeWASocket,
    useMultiFileAuthState,
    jidDecode,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    proto,
    getAggregateVotesInPollMessage
} = SETTING['modul'][_0xf58c2d(0x1e3)];
const {
    color,
    bgcolor,
    ConsoleLog,
    biocolor
} = require(SETTING[_0xf58c2d(0x189)][_0xf58c2d(0x18f)]);
var CryptoJS = require(_0xf58c2d(0x18b));
let cc = config[_0xf58c2d(0x1c6)][_0xf58c2d(0x1e8)](/X-BOT-MD:/g, '');
async function MakeSession() {
    const _0x2d61f1 = _0xf58c2d;
    if (!fs[_0x2d61f1(0x187)](__dirname + '/auth_info_baileys/creds.json')) {
        if (cc[_0x2d61f1(0x1c8)] < 0x1e) {
            const _0x54dbbf = require(_0x2d61f1(0x180));
            let {
                data: _0x4a0c40
            } = await _0x54dbbf[_0x2d61f1(0x1c1)](_0x2d61f1(0x19b) + cc);
            await fs[_0x2d61f1(0x195)](__dirname + '/auth_info_baileys/creds.json', atob(_0x4a0c40), _0x2d61f1(0x1c9));
        } else {
            var _0x3f76dd = atob(cc);
            await fs['writeFileSync'](__dirname + _0x2d61f1(0x183), _0x3f76dd, _0x2d61f1(0x1c9));
        }
    }
}
MakeSession();
const getVersionWaweb = () => {
        const _0x392927 = _0xf58c2d;
        let _0x5a2251;
        try {
            let _0x1d71b1 = fetchJson(_0x392927(0x1a8));
            _0x5a2251 = [_0x1d71b1[_0x392927(0x1b9)][_0x392927(0x1e8)](/[.]/g, ', ')];
        } catch {
            _0x5a2251 = [0x2, 0x89c, 0xd];
        }
        return _0x5a2251;
    },
    store = makeInMemoryStore({
        'logger': pino()['child']({
            'level': _0xf58c2d(0x1f0),
            'stream': 'store'
        })
    }),
    web = require(_0xf58c2d(0x1ed)),
    pairingCode = process[_0xf58c2d(0x19a)][_0xf58c2d(0x18e)](_0xf58c2d(0x1d5)),
    rl = readline[_0xf58c2d(0x1aa)]({
        'input': process['stdin'],
        'output': process[_0xf58c2d(0x1df)]
    }),
    question = _0x565cb1 => new Promise(_0x5dc96c => rl[_0xf58c2d(0x1da)](_0x565cb1, _0x5dc96c)),
    sleep = async _0x28a8a8 => {
        return new Promise(_0x86f39 => setTimeout(_0x86f39, _0x28a8a8));
    };

function _0x542d() {
    const _0x4e4941 = ['participant', 'currentVersion', '/store.json', 'uncaughtException', 'author', '663554eRNJtz', './lib/exif.js', '/auth_info_baileys/', 'plugins', 'get', 'extendedTextMessage', 'requestPairingCode', 'cache', 'authState', 'SESSION_ID', '1.0.0', 'length', 'utf8', 'pino', 'error', './lib/validator/config', 'packname', 'readline', '14348904RbPeoE', 'status@broadcast', '96378crjUZe', 'isBuffer', '\x0aitem1.X-ABLabel:Ponsel\x0aitem2.EMAIL;type=INTERNET:\"isharaweerasuri@gmail.com\"\x0aitem2.X-ABLabel:Email\x0aitem3.URL:\"https://instagram.com/Dev-ixAAr\"\x0aitem3.X-ABLabel:Instagram\x0aitem4.ADR:;;India;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD', 'remoteJid', '--pairing-code', 'boom', 'writeToFile', 'sendPoll', 'unwatchFile', 'question', 'name', 'base64', 'server', ' Kontak', 'stdout', '23488qCnatk', '721amwRUu', 'fromMe', 'baileys', '870537FvwtOn', './connection/systemConnext.js', 'connection.update', 'push', 'replace', 'readFileSync', 'test', 'statusread', '10htAwfH', './lib/server', 'chalk', 'from', 'silent', 'keys', 'safari', 'View user status : ', 'path', 'join', 'decodeJid', 'groupMetadata', 'message', 'axios', './plugins', 'user', '/auth_info_baileys/creds.json', 'registered', 'modul', 'subject', 'existsSync', 'sendText', 'file', 'X-BOT-MD', 'crypto-js', 'filter', 'international', 'includes', 'color', '1118356iwWelt', 'conversation', 'endsWith', 'Please type your WhatsApp number : ', 'split', 'writeFileSync', 'New ', 'loadMessage', 'pollUpdates', 'move', 'argv', 'https://paste.c-net.org/', 'key', 'creds', '1CUiYwO', 'resolve', 'fatal', 'An Error Occurred, Repeat Command!', 'sendVideoAsSticker', 'yellow', '@g.us', 'log', 'withoutContact', 'messages.upsert', 'https://web.whatsapp.com/check-update?version=1&platform=web', '11sWmCZN', 'createInterface', '2509038mYzXlK', 'creds.update', '25HsasTq', 'getName', 'bind', 'contacts', 'Connecting...', 'sendMessage', './main/X-BOT-MD.js', 'google-tts-api', 'alloc', 'readdirSync', 'verifiedName'];
    _0x542d = function () {
        return _0x4e4941;
    };
    return _0x542d();
}
async function operate() {
    const _0x48f59c = _0xf58c2d,
        {
            state: _0x4b132d,
            saveCreds: _0x2a46ef
        } = await useMultiFileAuthState(__dirname + _0x48f59c(0x1bf));
    let {
        version: _0x16d00f
    } = fetchLatestBaileysVersion();
    const _0x59d325 = new NodeCache(),
        _0x3f9794 = makeWASocket({
            'logger': pino({
                'level': _0x48f59c(0x1a0)
            }),
            'printQRInTerminal': ![],
            'browser': [_0x48f59c(0x18a), _0x48f59c(0x1f2), _0x48f59c(0x1c7)],
            'fireInitQueries': ![],
            'shouldSyncHistoryMessage': ![],
            'downloadHistory': ![],
            'syncFullHistory': ![],
            'generateHighQualityLinkPreview': !![],
            'auth': _0x4b132d,
            'version': getVersionWaweb() || [0x2, 0x8c2, 0x6],
            'getMessage': async _0x3f3e7a => {
                const _0x34d1c7 = _0x48f59c;
                if (store) {
                    const _0x285161 = await store[_0x34d1c7(0x197)](_0x3f3e7a[_0x34d1c7(0x1d4)], _0x3f3e7a['id'], undefined);
                    return _0x285161[_0x34d1c7(0x17f)] || undefined;
                }
                return {
                    'conversation': _0x34d1c7(0x1a1)
                };
            }
        });
    store[_0x48f59c(0x1af)](_0x3f9794['ev']), setInterval(() => {
        const _0x2a47ce = _0x48f59c;
        store[_0x2a47ce(0x1d7)](__dirname + _0x2a47ce(0x1ba));
    }, 0x1e * 0x3e8);
    let _0x2e8c25 = path['join'](__dirname, _0x48f59c(0x181)),
        _0xa7e2d4 = _0x22b175 => /\.js$/ ['test'](_0x22b175);
    global[_0x48f59c(0x1c0)] = {};
    for (let _0x530b74 of fs[_0x48f59c(0x1b6)](_0x2e8c25)[_0x48f59c(0x18c)](_0xa7e2d4)) {
        try {
            global[_0x48f59c(0x1c0)][_0x530b74] = require(path[_0x48f59c(0x1f5)](_0x2e8c25, _0x530b74));
        } catch (_0xa36b8b) {
            console[_0x48f59c(0x1a5)](_0xa36b8b), delete global[_0x48f59c(0x1c0)][_0x530b74];
        }
    }
    console['log'](Object[_0x48f59c(0x1f1)](global[_0x48f59c(0x1c0)])), _0x3f9794[_0x48f59c(0x1f6)] = _0x18c26c => {
        const _0x420432 = _0x48f59c;
        if (!_0x18c26c) return _0x18c26c;
        if (/:\d+@/gi ['test'](_0x18c26c)) {
            let _0x2b737c = jidDecode(_0x18c26c) || {};
            return _0x2b737c[_0x420432(0x182)] && _0x2b737c[_0x420432(0x1dd)] && _0x2b737c[_0x420432(0x182)] + '@' + _0x2b737c[_0x420432(0x1dd)] || _0x18c26c;
        } else return _0x18c26c;
    }, _0x3f9794[_0x48f59c(0x1ae)] = (_0x40f959, _0x2bafb1 = ![]) => {
        const _0x4e3882 = _0x48f59c;
        id = _0x3f9794[_0x4e3882(0x1f6)](_0x40f959), _0x2bafb1 = _0x3f9794[_0x4e3882(0x1a6)] || _0x2bafb1;
        let _0x295413;
        if (id[_0x4e3882(0x192)](_0x4e3882(0x1a4))) return new Promise(async _0x17739e => {
            const _0x27055a = _0x4e3882;
            _0x295413 = store[_0x27055a(0x1b0)][id] || {};
            if (!(_0x295413[_0x27055a(0x1db)] || _0x295413[_0x27055a(0x186)])) _0x295413 = _0x3f9794[_0x27055a(0x17e)](id) || {};
            _0x17739e(_0x295413[_0x27055a(0x1db)] || _0x295413[_0x27055a(0x186)] || PhoneNumber('+' + id[_0x27055a(0x1e8)]('@s.whatsapp.net', ''))['getNumber'](_0x27055a(0x18d)));
        });
        else _0x295413 = id === '0@s.whatsapp.net' ? {
            'id': id,
            'name': 'WhatsApp'
        } : id === _0x3f9794['decodeJid'](_0x3f9794[_0x4e3882(0x182)]['id']) ? _0x3f9794['user'] : store[_0x4e3882(0x1b0)][id] || {};
        return (_0x2bafb1 ? '' : _0x295413[_0x4e3882(0x1db)]) || _0x295413[_0x4e3882(0x186)] || _0x295413[_0x4e3882(0x1b7)] || PhoneNumber('+' + _0x40f959['replace']('@s.whatsapp.net', ''))['getNumber'](_0x4e3882(0x18d));
    }, _0x3f9794['sendImageAsSticker'] = async (_0x357426, _0x37cb59, _0x2b27c4, _0x2e8cd6 = {}) => {
        const _0xe2710d = _0x48f59c;
        let _0x17dbc2 = Buffer[_0xe2710d(0x1d2)](_0x37cb59) ? _0x37cb59 : /^data:.*?\/.*?;base64,/i [_0xe2710d(0x1ea)](_0x37cb59) ? Buffer[_0xe2710d(0x1ef)](_0x37cb59[_0xe2710d(0x194)]
                `,` [0x1], _0xe2710d(0x1dc)) : /^https?:\/\// [_0xe2710d(0x1ea)](_0x37cb59) ? await await getBuffer(_0x37cb59) : fs[_0xe2710d(0x187)](_0x37cb59) ? fs[_0xe2710d(0x1e9)](_0x37cb59) : Buffer[_0xe2710d(0x1b5)](0x0),
            _0x29619d;
        return _0x2e8cd6 && (_0x2e8cd6[_0xe2710d(0x1cd)] || _0x2e8cd6[_0xe2710d(0x1bc)]) ? _0x29619d = await writeExifImg(_0x17dbc2, _0x2e8cd6) : _0x29619d = await imageToWebp(_0x17dbc2), await _0x3f9794[_0xe2710d(0x1b2)](_0x357426, {
            'sticker': {
                'url': _0x29619d
            },
            ..._0x2e8cd6
        }, {
            'quoted': _0x2b27c4
        }), _0x29619d;
    }, _0x3f9794[_0x48f59c(0x1a2)] = async (_0x1a42da, _0x5301d9, _0x43ba59, _0xc94d75 = {}) => {
        const _0x2c989 = _0x48f59c;
        let _0x1c9fe8 = Buffer[_0x2c989(0x1d2)](_0x5301d9) ? _0x5301d9 : /^data:.*?\/.*?;base64,/i [_0x2c989(0x1ea)](_0x5301d9) ? Buffer[_0x2c989(0x1ef)](_0x5301d9[_0x2c989(0x194)]
                `,` [0x1], _0x2c989(0x1dc)) : /^https?:\/\// [_0x2c989(0x1ea)](_0x5301d9) ? await await getBuffer(_0x5301d9) : fs[_0x2c989(0x187)](_0x5301d9) ? fs[_0x2c989(0x1e9)](_0x5301d9) : Buffer[_0x2c989(0x1b5)](0x0),
            _0x3d3979;
        return _0xc94d75 && (_0xc94d75[_0x2c989(0x1cd)] || _0xc94d75['author']) ? _0x3d3979 = await writeExifVid(_0x1c9fe8, _0xc94d75) : _0x3d3979 = await videoToWebp(_0x1c9fe8), await _0x3f9794['sendMessage'](_0x1a42da, {
            'sticker': {
                'url': _0x3d3979
            },
            ..._0xc94d75
        }, {
            'quoted': _0x43ba59
        }), _0x3d3979;
    }, _0x3f9794['sendContact'] = async (_0x68b363, _0x89c8d4, _0x3a54dd = '', _0x40da75 = {}) => {
        const _0x234218 = _0x48f59c;
        let _0x38b275 = [];
        for (let _0x466bfd of _0x89c8d4) {
            _0x38b275[_0x234218(0x1e7)]({
                'displayName': await _0x3f9794['getName'](_0x466bfd),
                'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:' + await _0x3f9794[_0x234218(0x1ae)](_0x466bfd) + '\x0aFN:' + await _0x3f9794[_0x234218(0x1ae)](_0x466bfd) + '\x0aitem1.TEL;waid=' + _0x466bfd + ':' + _0x466bfd + _0x234218(0x1d3)
            });
        }
        _0x3f9794[_0x234218(0x1b2)](_0x68b363, {
            'contacts': {
                'displayName': _0x38b275[_0x234218(0x1c8)] + _0x234218(0x1de),
                'contacts': _0x38b275
            },
            ..._0x40da75
        }, {
            'quoted': _0x3a54dd
        });
    };
    if (pairingCode && !_0x3f9794[_0x48f59c(0x1c5)][_0x48f59c(0x19d)][_0x48f59c(0x184)]) {
        const _0x50fdfa = await question(_0x48f59c(0x193));
        let _0x53d43b = await _0x3f9794[_0x48f59c(0x1c3)](_0x50fdfa);
        console[_0x48f59c(0x1a5)]('Your Pairing Code : ' + _0x53d43b);
    }
    _0x3f9794['ev']['on'](_0x48f59c(0x1e6), async _0x1605e5 => {
        const _0x2cd278 = _0x48f59c;
        let {
            Connecting: _0x4713d9
        } = require(_0x2cd278(0x1e5));
        _0x4713d9({
            'update': _0x1605e5,
            'client': _0x3f9794,
            'Boom': Boom,
            'DisconnectReason': DisconnectReason,
            'sleep': sleep,
            'operate': operate
        });
    }), _0x3f9794['ev']['on'](_0x48f59c(0x1ac), _0x2a46ef), store[_0x48f59c(0x1af)](_0x3f9794['ev']), _0x3f9794['ev']['on'](_0x48f59c(0x1a7), async ({
        messages: _0x3081aa
    }) => {
        const _0x2e7f57 = _0x48f59c,
            _0xfba42c = _0x3081aa[0x0];
        if (!_0xfba42c[_0x2e7f57(0x17f)]) return;
        _0xfba42c[_0x2e7f57(0x19c)][_0x2e7f57(0x1d4)] === _0x2e7f57(0x1d0) && global[_0x2e7f57(0x1eb)] == !![] && setTimeout(() => {
            const _0x2d4df5 = _0x2e7f57;
            _0x3f9794['readMessages']([_0xfba42c[_0x2d4df5(0x19c)]]);
            let _0x4e19d4 = getContentType(_0xfba42c[_0x2d4df5(0x17f)]);
            console['log'](/protocolMessage/i [_0x2d4df5(0x1ea)](_0x4e19d4) ? _0xfba42c[_0x2d4df5(0x19c)][_0x2d4df5(0x1b8)][_0x2d4df5(0x194)]('@')[0x0] + ' Deleted status❗' : _0x2d4df5(0x1f3) + _0xfba42c[_0x2d4df5(0x19c)][_0x2d4df5(0x1b8)][_0x2d4df5(0x194)]('@')[0x0]);
        }, 0x1f4);
        const _0xa8ed1f = _0xfba42c[_0x2e7f57(0x19c)][_0x2e7f57(0x1d4)],
            _0x45e737 = getContentType(_0xfba42c[_0x2e7f57(0x17f)]),
            _0x428067 = _0x45e737 === _0x2e7f57(0x191) ? _0xfba42c[_0x2e7f57(0x17f)][_0x2e7f57(0x191)] : _0x45e737 === _0x2e7f57(0x1c2) ? _0xfba42c['message'][_0x2e7f57(0x1c2)]['text'] : '';
        move(_0x3f9794, _0xfba42c, store), smsg(_0x3f9794, _0xfba42c, store), require(_0x2e7f57(0x1b3))(_0xfba42c, _0x3f9794, _0xa8ed1f, store);
    });
    async function _0x4de52f(_0x9c806c) {
        const _0x385059 = _0x48f59c;
        if (store) {
            const _0x5f0083 = await store[_0x385059(0x197)](_0x9c806c[_0x385059(0x1d4)], _0x9c806c['id']);
            return _0x5f0083?. ['message'];
        }
        return {
            'conversation': 'Hai Im ɪxAAʀ Bᴏᴛ'
        };
    }
    _0x3f9794['ev']['on']('messages.update', async _0x4b40a6 => {
        const _0xb6e156 = _0x48f59c;
        for (const {
                key: _0x487a8f,
                update: _0x482af8
            } of _0x4b40a6) {
            if (_0x482af8[_0xb6e156(0x198)] && _0x487a8f[_0xb6e156(0x1e2)]) {
                const _0x4fd436 = await _0x4de52f(_0x487a8f);
                if (_0x4fd436) {
                    const _0x4bb8ff = await getAggregateVotesInPollMessage({
                        'message': _0x4fd436,
                        'pollUpdates': _0x482af8[_0xb6e156(0x198)]
                    });
                    var _0x5bfd28 = _0x4bb8ff['filter'](_0x45028b => _0x45028b['voters'][_0xb6e156(0x1c8)] !== 0x0)[0x0]?. [_0xb6e156(0x1db)];
                    if (_0x5bfd28 == undefined) return;
                    var _0x33be06 = prefix + _0x5bfd28;
                    _0x3f9794['appenTextMessage'](_0x33be06, _0x4b40a6);
                }
            }
        }
    }), _0x3f9794[_0x48f59c(0x1d8)] = (_0xb79155, _0x2d7086 = '', _0xebc4d7 = [], _0x410c63 = 0x1) => {
        const _0x4d7ab4 = _0x48f59c;
        return _0x3f9794[_0x4d7ab4(0x1b2)](_0xb79155, {
            'poll': {
                'name': _0x2d7086,
                'values': _0xebc4d7,
                'selectableCount': _0x410c63
            }
        });
    }, _0x3f9794[_0x48f59c(0x188)] = (_0x1190b0, _0x372e91, _0x499251 = '', _0x20d045) => _0x3f9794[_0x48f59c(0x1b2)](_0x1190b0, {
        'text': _0x372e91,
        ..._0x20d045
    }, {
        'quoted': _0x499251
    }), process['on'](_0x48f59c(0x1bb), console[_0x48f59c(0x1cb)]);
}
operate(), web();
let file = require[_0xf58c2d(0x19f)](__filename);
fs['watchFile'](file, () => {
    const _0x4157f8 = _0xf58c2d;
    fs[_0x4157f8(0x1d9)](file), console['log'](chalk[_0x4157f8(0x1a3)](_0x4157f8(0x196) + __filename)), delete require[_0x4157f8(0x1c4)][file], require(file);
});
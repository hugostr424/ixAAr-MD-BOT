const _0x5decb4 = _0x5900;
(function (_0x338c0e, _0x578e5c) {
    const _0x536417 = _0x5900,
        _0x3ddd39 = _0x338c0e();
    while (!![]) {
        try {
            const _0x3ffa83 = -parseInt(_0x536417(0x19b)) / 0x1 + -parseInt(_0x536417(0x1ab)) / 0x2 + parseInt(_0x536417(0x1b0)) / 0x3 + parseInt(_0x536417(0x19a)) / 0x4 * (-parseInt(_0x536417(0x1a3)) / 0x5) + -parseInt(_0x536417(0x1a0)) / 0x6 + parseInt(_0x536417(0x1ad)) / 0x7 * (-parseInt(_0x536417(0x1a2)) / 0x8) + parseInt(_0x536417(0x1a7)) / 0x9;
            if (_0x3ffa83 === _0x578e5c) break;
            else _0x3ddd39['push'](_0x3ddd39['shift']());
        } catch (_0x8dbbb0) {
            _0x3ddd39['push'](_0x3ddd39['shift']());
        }
    }
}(_0x533c, 0xc47dc));
const axios = require(_0x5decb4(0x1aa)),
    chalk = require('chalk');
let express = require('express'),
    app = express();

function _0x533c() {
    const _0x4a41ca = ['1808817ngcDUx', '100KctVte', '397064Pidagi', 'Starting...', 'yellowBright', 'listen', 'log', '8370774QuKcZZ', 'Active', '4030568GBHSwD', '297715gKSSri', 'createServer', 'PORT', 'Connected to EX-BOT-MD -- ', '50195070FaxEUp', 'bold', 'http://x-bot-md-server.mmosnsnn.repl.co', 'axios', '2173862MQfeOo', 'Retrying...', '14RPOjZd', 'env', 'exports'];
    _0x533c = function () {
        return _0x4a41ca;
    };
    return _0x533c();
}
const http = require('http');
let PORT = process[_0x5decb4(0x1ae)][_0x5decb4(0x1a5)] || 0x1f72;
const sleep = _0x5da10b => new Promise(_0x2c7a83 => setTimeout(_0x2c7a83, _0x5da10b));

function _0x5900(_0x43e18b, _0x42ab81) {
    const _0x533c3f = _0x533c();
    return _0x5900 = function (_0x5900c4, _0x31380e) {
        _0x5900c4 = _0x5900c4 - 0x19a;
        let _0x565eb4 = _0x533c3f[_0x5900c4];
        return _0x565eb4;
    }, _0x5900(_0x43e18b, _0x42ab81);
}
let i = 0x0;
async function web() {
    const _0x1c6247 = _0x5decb4;
    console['log'](chalk[_0x1c6247(0x19d)][_0x1c6247(0x1a8)](_0x1c6247(0x19c))), app['get']('/', function (_0x1a84ef, _0x4b8526) {
        const _0x35d0f6 = _0x1c6247;
        _0x4b8526['send']({
            'status': _0x35d0f6(0x1a1)
        });
    });
    const _0x27de54 = http[_0x1c6247(0x1a4)](app);
    _0x27de54[_0x1c6247(0x19e)](PORT, () => {
        const _0x267e59 = _0x1c6247;
        console[_0x267e59(0x19f)](chalk[_0x267e59(0x19d)][_0x267e59(0x1a8)]('Connected to Api -- ', PORT));
    });
    while (!![]) {
        i++;
        try {
            let _0x5d4f37 = await axios(_0x1c6247(0x1a9));
            console['log'](chalk['yellowBright'][_0x1c6247(0x1a8)](_0x1c6247(0x1a6), _0x5d4f37['status'])), await sleep(0x9c40);
        } catch {
            console['log'](chalk['red'][_0x1c6247(0x1a8)](_0x1c6247(0x1ac)));
        }
    }
}
module[_0x5decb4(0x1af)] = web;
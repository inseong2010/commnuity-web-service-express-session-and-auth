var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template');

router.get('/login', (req, res) => {
    var title = 'WEB - login';
    var list = template.LIST(req.list);
    var html = template.HTML(title, list, `
    <form action="/auth/login" method="post">
        <p><input type="text" name="email" placeholder="email"class="email"></p>
        <p><input type="password" name="pw" placeholder="password"class="pw"></p>
        <p>
            <input type="submit" value="login">
        </p>
    </form>
    `, ''); 
    res.send(html);
});

module.exports = router;
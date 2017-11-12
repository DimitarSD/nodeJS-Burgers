module.exports = {
    replaceAll: function (text, find, replace) {
        return text.replace(new RegExp(find, 'g'), replace);
    },
    splitText: function (text, separator) {
        return text.split(separator);
    },
    generateUUID: function generate() {
        var count = 16;
        var symbols = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var uuid = '';
    
        for (var i = 0; i < count; i++) {
            uuid += symbols[parseInt(Math.random() * (symbols.length))];
        }

        return uuid;
    }
};
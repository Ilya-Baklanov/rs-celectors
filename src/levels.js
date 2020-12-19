"use strict";
exports.__esModule = true;
exports.levels = void 0;
;
exports.levels = {
    level1: {
        first: "<dish>\n  <!--empty-->\n</dish>",
        second: "<dish>\n  <!--empty-->\n</dish>",
        third: '',
        fourth: '',
        fifth: '',
        amountItems: 2,
        winSelector: 'dish',
        dishNumberWithItem: [],
        typeItem: [],
        dishNumberAnimated: [0, 1],
        typeItemAnimated: []
    },
    level2: {
        first: "<dish class=\"animated\">\n  <!--empty-->\n</dish>",
        second: "<dish>\n  <!--empty-->\n</dish>",
        third: "<dish class=\"animated\">\n  <!--empty-->\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: '.animated',
        dishNumberWithItem: [],
        typeItem: [],
        dishNumberAnimated: [0, 2],
        typeItemAnimated: []
    },
    level3: {
        first: "<dish>\n  <!--empty-->\n</dish>",
        second: "<dish class=\"with-banana\">\n  <fruits/>\n</dish>",
        third: "<dish>\n  <!--empty-->\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: '.with-banana',
        dishNumberWithItem: [1],
        typeItem: ['banana'],
        dishNumberAnimated: [1],
        typeItemAnimated: []
    },
    level4: {
        first: "<dish>\n  <fruits class=\"apple animated\"/>\n</dish>",
        second: "<dish>\n  <fruits class=\"apple\"/>\n</dish>",
        third: "<dish>\n  <fruits class=\"cherry\"/>\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: '.apple.animated',
        dishNumberWithItem: [0, 1, 2],
        typeItem: ['apple', 'apple', 'cherry'],
        dishNumberAnimated: [],
        typeItemAnimated: ['apple']
    },
    level5: {
        first: "<dish>\n  <fruits class=\"apple\"/>\n</dish>",
        second: "<dish>\n  <yummy/>\n</dish>",
        third: "<dish>\n  <fruits class=\"grapes\"/>\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: 'yummy',
        dishNumberWithItem: [0, 1, 2],
        typeItem: ['apple', 'burger', 'grapes'],
        dishNumberAnimated: [],
        typeItemAnimated: ['burger']
    },
    level6: {
        first: "<dish>\n  <fruits/>\n</dish>",
        second: "<dish>\n  <vegetable class=\"animated\"/>\n</dish>",
        third: "<dish>\n  <vegetable/>\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: '.animated',
        dishNumberWithItem: [0, 1, 2],
        typeItem: ['orange', 'onion', 'cabbage'],
        dishNumberAnimated: [],
        typeItemAnimated: ['onion']
    },
    level7: {
        first: "<dish>\n  <vegetable/>\n</dish>",
        second: "<dish>\n  <vegetable id=\"cabbage\"/>\n</dish>",
        third: "<dish>\n  <vegetable/>\n</dish>",
        fourth: '',
        fifth: '',
        amountItems: 3,
        winSelector: '#cabbage',
        dishNumberWithItem: [0, 1, 2],
        typeItem: ['onion', 'cabbage', 'onion'],
        dishNumberAnimated: [],
        typeItemAnimated: ['cabbage']
    },
    level8: {
        first: "<dish>\n  <vegetable class=\"onion\"/>\n</dish>",
        second: "<dish>\n  <!--empty-->\n</dish>",
        third: "<dish>\n  <fruits class=\"pineapple\"/>\n</dish>",
        fourth: "<dish>\n  <yummy class=\"burger\"/>\n</dish>",
        fifth: '',
        amountItems: 4,
        winSelector: 'dish *',
        dishNumberWithItem: [0, 1, 2, 3],
        typeItem: ['onion', 'covid', 'pineapple', 'burger'],
        dishNumberAnimated: [],
        typeItemAnimated: ['onion', 'covid', 'pineapple', 'burger']
    },
    level9: {
        first: "<div>\n <dish>\n    <vegetable class=\"cabbage\"/>\n </dish>",
        second: " <dish>\n    <!--empty-->\n </dish>",
        third: " <dish>\n    <fruits class=\"strawberry\"/>\n </dish>",
        fourth: " <dish>\n    <yummy class=\"lemon\"/>\n </dish>",
        fifth: " <dish>\n    <yummy class=\"burger\"/>\n </dish>\n<div>",
        amountItems: 5,
        winSelector: 'dish:nth-child(2)',
        dishNumberWithItem: [0, 1, 2, 3, 4],
        typeItem: ['cabbage', 'covidToo', 'strawberry', 'lemon', 'burger'],
        dishNumberAnimated: [1],
        typeItemAnimated: []
    },
    level10: {
        first: "<div>\n <dish>\n    <!--empty-->\n </dish>",
        second: " <dish>\n    <fruits class=\"grapes\"/>\n </dish>",
        third: " <dish>\n    <fruits class=\"lemon\"/>\n </dish>",
        fourth: " <dish>\n    <fruits class=\"cherry\"/>\n </dish>",
        fifth: " <dish>\n    <!--empty-->\n </dish>\n<div>",
        amountItems: 5,
        winSelector: 'dish:empty',
        dishNumberWithItem: [1, 2, 3],
        typeItem: ['grapes', 'lemon', 'cherry'],
        dishNumberAnimated: [0, 4],
        typeItemAnimated: []
    }
};

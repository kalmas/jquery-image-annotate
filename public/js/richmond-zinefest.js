$(window).load(function() {

  img = $("#toAnnotate").annotateImage({
    editable: false,
    sortField: 'title',
    textFields: ['title', 'author', 'url', 'notes'],
    tipTemplate: '<div><strong>{title}</strong></div><div>{author}</div><div>{notes}</div>',
    useAjax: false,
    notes: [{
      "id": "new",
      "top": 43,
      "left": 173,
      "width": 202,
      "height": 223,
      "fields": {
        "title": "Snorelax",
        "author": "Author Name",
        "url": "",
        "notes": "Notes Here"
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 310,
      "left": 96,
      "width": 143,
      "height": 138,
      "fields": {
        "title": "Uugh.",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 470,
      "left": 58,
      "width": 139,
      "height": 217,
      "fields": {
        "title": "Raw Power",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 493,
      "left": 257,
      "width": 103,
      "height": 153,
      "fields": {
        "title": "Birds of America",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 312,
      "left": 277,
      "width": 122,
      "height": 165,
      "fields": {
        "title": "Dünyayı Kurtaran Adam (Turkish Star Wars)",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 577,
      "left": 375,
      "width": 195,
      "height": 130,
      "fields": {
        "title": "Owner's Manual",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 367,
      "left": 459,
      "width": 211,
      "height": 167,
      "fields": {
        "title": "Zinefest Tee",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 56,
      "left": 475,
      "width": 325,
      "height": 191,
      "fields": {
        "title": "Frog",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 561,
      "left": 587,
      "width": 112,
      "height": 153,
      "fields": {
        "title": "Terrariums & Biomes",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 413,
      "left": 703,
      "width": 79,
      "height": 101,
      "fields": {
        "title": "Fresh Cut",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 538,
      "left": 723,
      "width": 240,
      "height": 176,
      "fields": {
        "title": "Kill the Rabbit",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 644,
      "left": 1003,
      "width": 112,
      "height": 79,
      "fields": {
        "title": "Flying Fish",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 521,
      "left": 987,
      "width": 74,
      "height": 87,
      "fields": {
        "title": "Think You're Bad?",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 423,
      "left": 945,
      "width": 78,
      "height": 77,
      "fields": {
        "title": "Very Deadly Weapons",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 419,
      "left": 810,
      "width": 107,
      "height": 71,
      "fields": {
        "title": "minutiae no. 1",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 486,
      "left": 1132,
      "width": 96,
      "height": 177,
      "fields": {
        "title": "Reptile Museum",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 326,
      "left": 703,
      "width": 54,
      "height": 72,
      "fields": {
        "title": "Zine Fest Zine",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 325,
      "left": 767,
      "width": 51,
      "height": 74,
      "fields": {
        "title": "All of My Failings",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 323,
      "left": 827,
      "width": 54,
      "height": 73,
      "fields": {
        "title": "Ungulates: Our Pals with Hard Toes",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 302,
      "left": 907,
      "width": 67,
      "height": 94,
      "fields": {
        "title": "Cool Sports Stories for Kids",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 433,
      "left": 1042,
      "width": 54,
      "height": 73,
      "fields": {
        "title": "",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 297,
      "left": 1116,
      "width": 92,
      "height": 158,
      "fields": {
        "title": "Yankee Pope Volume One",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 293,
      "left": 1005,
      "width": 80,
      "height": 116,
      "fields": {
        "title": "Flowering Vine",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 136,
      "left": 851,
      "width": 94,
      "height": 136,
      "fields": {
        "title": "3/17/2013",
        "author": "Test Tester",
        "url": "http://google.com",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 141,
      "left": 974,
      "width": 94,
      "height": 138,
      "fields": {
        "title": "Phlegm Fatale #4",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 142,
      "left": 1101,
      "width": 89,
      "height": 137,
      "fields": {
        "title": "Radical Domesticity",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 41,
      "left": 860,
      "width": 65,
      "height": 76,
      "fields": {
        "title": "Caio Frau",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 39,
      "left": 950,
      "width": 74,
      "height": 79,
      "fields": {
        "title": "Dinky Doo",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 41,
      "left": 1042,
      "width": 71,
      "height": 74,
      "fields": {
        "title": "HELLA",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    },
    {
      "id": "new",
      "top": 76,
      "left": 1146,
      "width": 34,
      "height": 37,
      "fields": {
        "title": "Curtis",
        "author": "",
        "url": "",
        "notes": ""
      },
      "editable": true
    }]
  });
});

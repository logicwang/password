const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const user = require('./data');
const save = require('./save');
const detalis = require('./detalis');


const proxy = {
    ...user,
    ...save,
    ...detalis,
    
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "url": "/image/Adobe.svg",
            "Trash": "2022/12/01",
        },
        {
            "name": "Apple",
            "email": "thomas@gmail.com",
            "url": "/image/Apple.svg",
        },
        {
            "name": "Dirbbble",
            "email": "thomas@gmail.com",
            "url": "/image/Dribbble.svg",
            "deleteAt": "2022/12/01",
            "favorties": true,
            "Trash": "2022/12/01",
        },
        {
            "name": "Etsy",
            "email": "thomas@gmail.com",
            "url": "/image/Etsy.svg",
            "deleteAt": "2022/12/01",
            "favorties": true,
        },
        {
            "name": "Facebook",
            "email": "thomas@gmail.com",
            "url": "/image/Facebook.svg",
        },
        {
            "name": "GooGle",
            "email": "thomas@gmail.com",
            "url": "/image/Google.svg",
            "deleteAt": "2022/12/01",
            "favorties": true,
        },
        {
            "name": "IMDB",
            "email": "thomas@gmail.com",
            "url": "/image/IMDB.svg",
            "deleteAt": "2022/12/01",
        },
        {
            "name": "InVison",
            "email": "thomas@gmail.com",
            "deleteAt": "2022/12/01",
            "url": "/image/Invision.svg"
        },
        {
            "name": "Telegram",
            "email": "+1 202 555 0918",
            "url": "/image/Telegram.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
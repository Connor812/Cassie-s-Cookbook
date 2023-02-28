const dayjs = require('dayjs');

const date = () => {
    return dayjs().format('(M/D/YYYY)');  
}

module.exports = date;
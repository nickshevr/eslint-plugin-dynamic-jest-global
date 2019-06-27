module.exports = jestConf =>
    Object.keys(jestConf.globals || {})
        .reduce((accum, elem) => {
            accum[elem] = true;

            return accum;
        }, {});
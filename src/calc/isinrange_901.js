/**
 * 901 IsInRange
 *
 * @author: DPS0340
 * @param {string} a, b
 * @return {number} IsInRange
 * 
 */
exports.isinrange = function (a, b) {
    let g = function (x) {
        if (a <= x && x <= b) {
            return true
        } else {
            return false
        }
    }
    return g
}
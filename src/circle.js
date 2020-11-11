/**
 * 031 ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @return {number} The area of circle
 * @since <0.37.0
 */
exports.circleArea = function (r) {
    return ((Math.PI) * (r ** 2))
}
/**
 * 032 ���� �ѷ�
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @return {number} The circumstance of circle
 * @since <0.37.0
 */
exports.circlePerimeter = function (r) {
    return (2 * (Math.PI) * r)
}
/**
 * 039 ��ä���� �߽ɰ� ǥ��_rad
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The center angle of sector form (radian)
 * @since <0.37.0
 */
exports.circularSectorAngle = function (r, l) {
    return (l / r)
}
/**
 * 040 ��ä���� ����_rl
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The area of sector form
 * @since <0.37.0
 */
exports.circularSectorArea_rl = function (r, l) {
    return (0.5 * r * l)
}
/**
 * 040.2 ��ä���� ����_rt_no
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} t
 * @return {number} THe area of sector form
 * @since <0.37.0
 */
exports.circularSectorArea_rt = function (r, t) {
    return (0.5 * r * (t ** 2))
}
/**
 * 034 ���ְ��� �߽ɰ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The center angle of circumferential angle
 * @since <0.37.0
 */
exports.circumference = function (a) {
    return (2 * a)
}
/**
 * 010.2 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula 
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Angle = function (a, b, c, r) {
    return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}
/**
 * 010.1 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Side = function (a, b, c, r) {
    return (a * b * c / 4 / r)
}

/**
 * 031 ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @return {number} The area of circle
 * @since <0.37.0
 */
exports.circleArea = function (r) {
    return ((Math.PI) * (r ** 2))
}

/**
 * 032 ���� �ѷ�
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @return {number} The circumstance of circle
 * @since <0.37.0
 */
exports.circlePerimeter = function (r) {
    return (2 * (Math.PI) * r)
}

/**
 * 039 ��ä���� �߽ɰ� ǥ��_rad
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The center angle of sector form (radian)
 * @since <0.37.0
 */
exports.circularSectorAngle = function (r, l) {
    return (l / r)
}

/**
 * 040 ��ä���� ����_rl
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} l
 * @return {number} The area of sector form
 * @since <0.37.0
 */
exports.circularSectorArea_rl = function (r, l) {
    return (0.5 * r * l)
}

/**
 * 040.2 ��ä���� ����_rt_no
 * 
 * @author: Choi Minseo
 * @param {number} r
 * @param {number} t
 * @return {number} THe area of sector form
 * @since <0.37.0
 */
exports.circularSectorArea_rt = function (r, t) {
    return (0.5 * r * (t ** 2))
}

/**
 * 034 ���ְ��� �߽ɰ�
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @return {number} The center angle of circumferential angle
 * @since <0.37.0
 */
exports.circumference = function (a) {
    return (2 * a)
}

/**
 * 010.2 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula 
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Angle = function (a, b, c, r) {
    return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}

/**
 * 010.1 �������� �ﰢ���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} r
 * @return {number} Inscribed circle and triangle area formula
 * @since <0.37.0
 */
exports.circumscribedCircleTriangleArea_Side = function (a, b, c, r) {
    return (a * b * c / 4 / r)
}


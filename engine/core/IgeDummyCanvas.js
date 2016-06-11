var nullMethod = function () {};

/**
 * @class Core.IgeDummyCanvas
 * @alternateClassName IgeDummyCanvas
 */
var IgeDummyCanvas = function () {
    this.dummy = true;
    this.width = 0;
    this.height = 0;
};

/**
 * @member Core.IgeDummyCanvas
 * @returns {IgeDummyContext} igeDummyContext
 */
IgeDummyCanvas.prototype.getContext = function () {
	return IgeDummyContext;
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeDummyCanvas; }
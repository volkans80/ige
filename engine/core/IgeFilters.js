/**
 *
 * @class Core.IgeFilters
 * @alternateClassName IgeFilters
 */
var IgeFilters = {};

if (typeof(window) !== 'undefined') {
	// Create a temporary canvas for the filter system to use
    /**
     * @property
     * @type {HTMLElement}
     */
	IgeFilters.tmpCanvas = document.createElement('canvas');

    /**
     * @property
     * @type {CanvasRenderingContext2D}
     */
	IgeFilters.tmpCtx = IgeFilters.tmpCanvas.getContext('2d');
}

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeFilters; }
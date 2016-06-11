var nullMethod = function () {};

/**
 * @class Core.IgeDummyContext
 * @alternateClassName IgeDummyContext
 */
var	IgeDummyContext = {
    /**
     * @property
     */
    dummy: true,
    /**
     * @property
     */
    save: nullMethod,
    /**
     * @property
     */
    restore: nullMethod,
    /**
     * @property
     */
    translate: nullMethod,
    /**
     * @property
     */
    rotate: nullMethod,
    /**
     * @property
     */
    scale: nullMethod,
    /**
     * @property
     */
    drawImage: nullMethod,
    /**
     * @property
     */
    fillRect: nullMethod,
    /**
     * @property
     */
    strokeRect: nullMethod,
    /**
     * @property
     */
    stroke: nullMethod,
    /**
     * @property
     */
    fill: nullMethod,
    /**
     * @property
     */
    rect: nullMethod,
    /**
     * @property
     */
    moveTo: nullMethod,
    /**
     * @property
     */
    lineTo: nullMethod,
    /**
     * @property
     */
    arc: nullMethod,
    /**
     * @property
     */
    clearRect: nullMethod,
    /**
     * @property
     */
    beginPath: nullMethod,
    /**
     * @property
     */
    clip: nullMethod,
    /**
     * @property
     */
    transform: nullMethod,
    /**
     * @property
     */
    setTransform: nullMethod,
    /**
     * @property
     */
    fillText: nullMethod
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeDummyContext; }
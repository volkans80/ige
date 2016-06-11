/**
 * There is no description yet
 * @class Core.IgeCollisionMap2d
 * @alternateClassName IgeCollisionMap2d
 * @extends IgeEntity
 */
var IgeCollisionMap2d = IgeEntity.extend({
	classId: 'IgeCollisionMap2d',

	init: function (tileWidth, tileHeight) {
		IgeEntity.prototype.init.call(this);
		var self = this;

		this.map = new IgeMap2d();
	},

	mapData: function (val) {
		if (val !== undefined) {
			this.map.mapData(val);
			return this;
		}

		return this.map.mapData();
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = IgeCollisionMap2d; }
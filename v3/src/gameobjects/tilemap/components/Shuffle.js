var GetTilesWithin = require('./GetTilesWithin');
var ShuffleArray = require('../../../utils/array/Shuffle');

/**
 * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
 * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
 * appear to have changed! This method only modifies tile indexes and does not change collision
 * information.
 *
 * @param {number} [tileX=0] - [description]
 * @param {number} [tileY=0] - [description]
 * @param {number} [width=max width based on tileX] - [description]
 * @param {number} [height=max height based on tileY] - [description]
 * @param {LayerData} layer - [description]
 */
var Shuffle = function (tileX, tileY, width, height, layer)
{
    var tiles = GetTilesWithin(tileX, tileY, width, height, null, layer);

    var indices = tiles.map(function (tile) { return tile.index; });
    ShuffleArray(indices);

    for (var i = 0; i < tiles.length; i++)
    {
        tiles[i].index = indices[i];
    }
};

module.exports = Shuffle;

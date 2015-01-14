/**
 * @module ui/component1.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Component1
 * @extends Component
 */
exports.Component1 = Component.specialize(/** @lends Component1# */ {
    constructor: {
        value: function Component1() {
            this.super();
        }
    }
});

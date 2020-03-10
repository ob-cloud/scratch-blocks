/**
 * @license
 * Visual Blocks Editor
 *
 */

'use strict';

goog.provide('Blockly.Blocks.gesture');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['gesture_start'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.GESTURE_START,
      "category": Blockly.Categories.gesture,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


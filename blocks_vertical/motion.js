'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['motion_move100steps'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_MOVE100STEPS,
      // "args0": [
      //   {
      //     "type": "input_value",
      //     "name": "STEPS"
      //   }
      // ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    })
  }
}

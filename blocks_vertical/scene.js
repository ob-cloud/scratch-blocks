/**
 * @license
 * Visual Blocks Editor
 * arm 场景控制
 */

'use strict';

goog.provide('Blockly.Blocks.scene');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['scene_control_light'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SCENE_CONTROL_LIGHT,
      "args0": [
        {
          "type": "input_value",
          "name": "RED"
        },
        {
          "type": "input_value",
          "name": "BLUE"
        },
        {
          "type": "input_value",
          "name": "GREEN"
        }
      ],
      "category": Blockly.Categories.scene,
      "extensions": ["colours_scene", "shape_statement"]
    });
  }
};

Blockly.Blocks['scene_control_volume'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SCENE_CONTROL_VOLUME,
      "args0": [
        {
          "type": "input_value",
          "name": "VOLUME"
        },
        {
          "type": "input_value",
          "name": "TIME"
        }
      ],
      "category": Blockly.Categories.scene,
      "extensions": ["colours_scene", "shape_statement"]
    });
  }
};

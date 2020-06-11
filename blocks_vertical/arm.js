/**
 * @license
 * Visual Blocks Editor
 * arm 机械臂
 */

'use strict';

goog.provide('Blockly.Blocks.arm');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['arm_reset'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARM_RESET,
      "category": Blockly.Categories.arm,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['arm_clamp'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARM_CLAMP,
      "category": Blockly.Categories.arm,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['arm_unclamp'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARM_UNCLAMP,
      "category": Blockly.Categories.arm,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['arm_move_horizontal'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARM_MOVE_HORIZONTAL,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            [Blockly.Msg.ARM_MOVE_FORWARD, 'FORWARD'],
            [Blockly.Msg.ARM_MOVE_BACK, 'BACK'],
            [Blockly.Msg.ARM_MOVE_LEFT, 'LEFT'],
            [Blockly.Msg.ARM_MOVE_RIGHT, 'RIGHT']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.arm,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};


Blockly.Blocks['arm_move_vertical'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.ARM_MOVE_VERTICAL,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            [Blockly.Msg.ARM_MOVE_RISE, 'RISE'],
            [Blockly.Msg.ARM_MOVE_DECLINE, 'DECLINE']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.arm,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};


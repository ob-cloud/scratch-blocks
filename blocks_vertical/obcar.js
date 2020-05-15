/**
 * @license
 * Visual Blocks Editor
 *
 */

'use strict';

goog.provide('Blockly.Blocks.car');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


// Car Move Action
Blockly.Blocks['car_move_action'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_MOVE_ACTION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CARMOVEACTION",
          "options": [
            [Blockly.Msg.CAR_MOVE_ACTION_LEFT, 'LEFT'],
            [Blockly.Msg.CAR_MOVE_ACTION_RIGHT, 'RIGHT'],
            [Blockly.Msg.CAR_MOVE_ACTION_FORWARD, 'FORWARD'],
            [Blockly.Msg.CAR_MOVE_ACTION_BACk, 'BACK']
          ]
        }
      ],
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

// Car Turn Action
Blockly.Blocks['car_turn_action'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_TURN_ACTION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CARTRUNACTION",
          "options": [
            [Blockly.Msg.CAR_TURN_ACTION_LEFT, 'LEFT'],
            [Blockly.Msg.CAR_TURN_ACTION_RIGHT, 'RIGHT']
          ]
        }
      ],
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

// 停止
Blockly.Blocks['car_stop'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_STOP,
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
}

// 清除动作
Blockly.Blocks['car_reset_action'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_RESET_ACTION,
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
}

// 执行动作
Blockly.Blocks['car_exec_action'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_EXEC_ACTION,
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
}

// 采集环境
Blockly.Blocks['car_collect_env'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CAR_COLLECT_ENV,
      "category": Blockly.Categories.car,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
}

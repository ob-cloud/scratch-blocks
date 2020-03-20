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
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GESTURESTART",
          "options": [
            [Blockly.Msg.GESTURE_START_FACE, 'FACE'],
            [Blockly.Msg.GESTURE_START_VISUAL, 'VISUAL'],
            [Blockly.Msg.GESTURE_START_SITUATION, 'SITUATION'],
          ]
        }
      ],
      "category": Blockly.Categories.gesture,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


// 人脸解锁
Blockly.Blocks['detect_face_unlock'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FACE_UNLOCK,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_boolean"]
    });
  }
}

// 手势识别
Blockly.Blocks['detect_gesture'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_GESTURE_DETECT,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_number"]
    });
  }
}

// 态势识别
Blockly.Blocks['detect_situation'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_SITUATION_DETECT,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_number"]
    });
  }
}

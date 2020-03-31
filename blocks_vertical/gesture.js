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
            // [Blockly.Msg.GESTURE_START_FACEREG, 'FACEREG'],
            [Blockly.Msg.GESTURE_START_CAMERA_OPEN, 'CAMERAOPEN'],
            // [Blockly.Msg.GESTURE_START_CAMERA_CLOSE, 'CAMERACLOSE'],
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

// 开启相机
Blockly.Blocks['camera_open'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_CAMERA_OPEN,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_boolean"]
    });
  }
}

// 关闭相机
Blockly.Blocks['camera_close'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_CAMERA_CLOSE,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_boolean"]
    });
  }
}

// 人脸注册
Blockly.Blocks['face_reg'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FACE_REG,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_motion", "output_boolean"]
    });
  }
}

Blockly.Blocks['gesture_stop'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.GESTURE_STOP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GESTURESTOP",
          "options": [
            [Blockly.Msg.GESTURE_START_FACE, 'FACE'],
            [Blockly.Msg.GESTURE_START_VISUAL, 'VISUAL'],
            [Blockly.Msg.GESTURE_START_SITUATION, 'SITUATION'],
            // [Blockly.Msg.GESTURE_START_FACEREG, 'FACEREG'],
            [Blockly.Msg.GESTURE_START_CAMERA_CLOSE, 'CAMERACLOSE'],
          ]
        }
      ],
      "category": Blockly.Categories.gesture,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

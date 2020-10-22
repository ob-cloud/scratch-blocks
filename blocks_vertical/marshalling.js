/**
 * @license
 * Visual Blocks Editor
 * marshalling 编组
 */

'use strict';

goog.provide('Blockly.Blocks.marshalling');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['marshalling_group'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_GROUP,
      "message1": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DEVTYPE",
          "options": [
            ['飞机', '1' ],
            ['小车', '2'],
            ['机械臂', '3']
          ]
        },
        {
          "type": "input_value",
          "name": "GROUP",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE",
          "check": "String"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['marshalling_group_range'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_GROUP_RANGE,
      "message1": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DEVTYPE",
          "options": [
            ['飞机', '1' ],
            ['小车', '2'],
            ['机械臂', '3']
          ]
        },
        {
          "type": "input_value",
          "name": "GROUP",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE1",
          "check": "String"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

// 只包含指令、不包含行为
Blockly.Blocks['marshalling_group_range_fn'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_GROUP_RANGE_FN,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DEVTYPE",
          "options": [
            ['飞机', '1' ],
            ['小车', '2'],
            ['机械臂', '3']
          ]
        },
        {
          "type": "input_value",
          "name": "GROUP",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE1",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE2",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE3",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE4",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DEVICE5",
          "check": "String"
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['marshalling_req_data'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_REQ_DATA,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DEVTYPE",
          "options": [
            ['飞机', '1' ],
            ['小车', '2'],
            ['机械臂', '3']
          ]
        },
        {
          "type": "input_value",
          "name": "DEVICE",
          "check": "String"
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['marshalling_control_light_on'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_CONTROL_LIGHT_ON,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LIGHTTYPE",
          "options": [
            ['红', 'red'],
            ['绿', 'green'],
            ['蓝', 'blue']
          ]
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['marshalling_control_light_off'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MARSHALLING_CONTROL_LIGHT_OFF,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LIGHTTYPE",
          "options": [
            ['红', 'red'],
            ['绿', 'green'],
            ['蓝', 'blue']
          ]
        }
      ],
      "category": Blockly.Categories.marshalling,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

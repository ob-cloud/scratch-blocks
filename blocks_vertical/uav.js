/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.uav');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['uav_calibration'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "测试积木",
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
};

Blockly.Blocks['uav_text'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "测试测试",
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
};

Blockly.Blocks['uav_operator'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_OPERATORS,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "field_dropdown",
          "name": "UAVOPERATORS",
          "options": [
            [Blockly.Msg.UAV_OPERATORS_ADD, 'ADD'],
            [Blockly.Msg.UAV_OPERATORS_SUBTRACT, 'SUBTRACT'],
            [Blockly.Msg.UAV_OPERATORS_MULTIPLY, 'MULTIPLY'],
            [Blockly.Msg.UAV_OPERATORS_DIVIDE, 'DIVIDE']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "output_number"]
    });
  }
};

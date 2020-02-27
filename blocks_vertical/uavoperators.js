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

goog.provide('Blockly.Blocks.uavoperators');

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
      "extensions": ["colours_sounds", "shape_statement"]
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
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['uavoperator_arithmetic'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_OPERATORS_ARITHMETIC,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "field_dropdown",
          "name": "ARITHMETICACTION",
          "options": [
            [Blockly.Msg.UAV_OPERATORS_ARITHMETIC_ADD, 'ADD'],
            [Blockly.Msg.UAV_OPERATORS_ARITHMETIC_SUBTRACT, 'SUBTRACT'],
            [Blockly.Msg.UAV_OPERATORS_ARITHMETIC_MULTIPLY, 'MULTIPLY'],
            [Blockly.Msg.UAV_OPERATORS_ARITHMETIC_DIVIDE, 'DIVIDE']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_number"]
    });
  }
};

Blockly.Blocks['uavoperator_compare'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_OPERATORS_COMPARE,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "field_dropdown",
          "name": "COMPAREACTION",
          "options": [
            [Blockly.Msg.UAV_OPERATORS_COMPARE_EQUAL, 'EQUAL'],
            [Blockly.Msg.UAV_OPERATORS_COMPARE_GT, 'GT'],
            [Blockly.Msg.UAV_OPERATORS_COMPARE_LT, 'LT']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_number"]
    });
  }
};


Blockly.Blocks['uavoperator_logic'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_OPERATORS_LOGIC,
      "args0": [
        {
          "type": "input_value",
          "name": "LOGICOPER1",
          "check": "Boolean"
        },
        {
          "type": "field_dropdown",
          "name": "LOGICACTION",
          "options": [
            [Blockly.Msg.UAV_OPERATORS_LOGIC_AND, 'AND'],
            [Blockly.Msg.UAV_OPERATORS_LOGIC_OR, 'OR']
          ]
        },
        {
          "type": "input_value",
          "name": "LOGICOPER2",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_boolean"]
    });
  }
};


Blockly.Blocks['uavoperator_not'] = {
  /**
   * Block for "not" unary boolean operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_NOT,
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND",
          "check": "Boolean"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_boolean"]
    });
  }
};


Blockly.Blocks['uavoperator_join'] = {
  /**
   * Block for string join operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_JOIN,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_string"]
    });
  }
};

Blockly.Blocks['uavoperator_letter_of'] = {
  /**
   * Block for "letter _ of _" operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_LETTEROF,
      "args0": [
        {
          "type": "input_value",
          "name": "LETTER"
        },
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_string"]
    });
  }
};

Blockly.Blocks['uavoperator_length'] = {
  /**
   * Block for string length operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_LENGTH,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_string"]
    });
  }
};

Blockly.Blocks['uavoperator_contains'] = {
  /**
   * Block for _ contains _ operator
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_CONTAINS,
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_boolean"]
    });
  }
};

Blockly.Blocks['uavoperator_mod'] = {
  /**
   * Block for mod two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MOD,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM1"
        },
        {
          "type": "input_value",
          "name": "NUM2"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_number"]
    });
  }
};

Blockly.Blocks['uavoperator_round'] = {
  /**
   * Block for rounding a numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_ROUND,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_number"]
    });
  }
};

Blockly.Blocks['uavoperator_mathop'] = {
  /**
   * Block for "advanced" math ops on a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.OPERATORS_MATHOP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OPERATOR",
          "options": [
            [Blockly.Msg.OPERATORS_MATHOP_ABS, 'abs'],
            [Blockly.Msg.OPERATORS_MATHOP_FLOOR, 'floor'],
            [Blockly.Msg.OPERATORS_MATHOP_CEILING, 'ceiling'],
            [Blockly.Msg.OPERATORS_MATHOP_SQRT, 'sqrt'],
            [Blockly.Msg.OPERATORS_MATHOP_SIN, 'sin'],
            [Blockly.Msg.OPERATORS_MATHOP_COS, 'cos'],
            [Blockly.Msg.OPERATORS_MATHOP_TAN, 'tan'],
            [Blockly.Msg.OPERATORS_MATHOP_ASIN, 'asin'],
            [Blockly.Msg.OPERATORS_MATHOP_ACOS, 'acos'],
            [Blockly.Msg.OPERATORS_MATHOP_ATAN, 'atan'],
            [Blockly.Msg.OPERATORS_MATHOP_LN, 'ln'],
            [Blockly.Msg.OPERATORS_MATHOP_LOG, 'log'],
            [Blockly.Msg.OPERATORS_MATHOP_EEXP, 'e ^'],
            [Blockly.Msg.OPERATORS_MATHOP_10EXP, '10 ^']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.uavoperators,
      "extensions": ["colours_uavoperators", "output_number"]
    });
  }
};

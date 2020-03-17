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

// 校准陀螺仪
Blockly.Blocks['uav_cal'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_CAL,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "UAVCAL",
          "options": [
            [Blockly.Msg.UAV_ROBOT_CALGYRO, 'GYRO'],
            [Blockly.Msg.UAV_ROBOT_CALMAG, 'MAG']
          ]
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 锁机
Blockly.Blocks['uav_lock'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_LOCK,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 解锁
Blockly.Blocks['uav_unlock'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_UNLOCK,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 人脸解锁
Blockly.Blocks['uav_face_unlock'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FACE_UNLOCK,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 手势识别
Blockly.Blocks['uav_gesture_detect'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_GESTURE_DETECT,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 态势识别
Blockly.Blocks['uav_situation_detect'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_SITUATION_DETECT,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 起飞
Blockly.Blocks['uav_takeoff'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_TAKEOFF,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 降落
Blockly.Blocks['uav_landing'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_LANDING,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 上升
Blockly.Blocks['uav_fly_rise'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FLYRISE,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 下降
Blockly.Blocks['uav_fly_down'] = {
   /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FLYDOWN,
      "args0": [
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 飞向
Blockly.Blocks['uav_fly_direction'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FLYDIRECTION,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "UAVFLYDIRECTION",
          "options": [
            [Blockly.Msg.UAV_ROBOT_FLYDIRECTION_FORWARD, 'FORWARD'],
            [Blockly.Msg.UAV_ROBOT_FLYDIRECTION_BACK, 'BACK'],
            [Blockly.Msg.UAV_ROBOT_FLYDIRECTION_LEFT, 'LEFT'],
            [Blockly.Msg.UAV_ROBOT_FLYDIRECTION_RIGHT, 'RIGHT']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 往前飞
Blockly.Blocks['fly_forward'] = {

}

// 往后飞
Blockly.Blocks['fly_back'] = {

}

// 往左飞
Blockly.Blocks['fly_left'] = {

}

// 往右飞
Blockly.Blocks['fly_right'] = {

}

Blockly.Blocks['uav_fly_turn'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FLYTURN,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "UAVFLYTURN",
          "options": [
            [Blockly.Msg.UAV_ROBOT_FLYTURN_LEFT, 'LEFT'],
            [Blockly.Msg.UAV_ROBOT_FLYTURN_RIGHT, 'RIGHT']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": "Number"
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

Blockly.Blocks['uav_fly_flip'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_FLYFLIP,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "UAVFLYFLIP",
          "options": [
            [Blockly.Msg.UAV_ROBOT_FLYFLIP_LEFT, 'LEFT'],
            [Blockly.Msg.UAV_ROBOT_FLYFLIP_RIGHT, 'RIGHT'],
            [Blockly.Msg.UAV_ROBOT_FLYFLIP_FORWARD, 'FORWARD'],
            [Blockly.Msg.UAV_ROBOT_FLYFLIP_BACK, 'BACK']
          ]
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 往左转头
Blockly.Blocks['fly_turnleft'] = {

}

// 往右转头
Blockly.Blocks['fly_turnright'] = {

}

// 发送数据
Blockly.Blocks['uav_send_message'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_SENDMSG,
      "args0": [
        {
          "type": "input_value",
          "name": "MSG",
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 连接成功
Blockly.Blocks['uav_connection'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_CONNECTION,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 最新接受数据
Blockly.Blocks['uav_receive_message'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_RECIEVEMSG,
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

// 波特率
Blockly.Blocks['uav_set_baud_rate'] = {
   /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.UAV_ROBOT_SETBAUDRATE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "UAVRATE",
          "options": [
            ['2400', '2400'],
            ['9600', '9600'],
            ['19200', '19200'],
            ['38400', '38400'],
            ['57600', '57600'],
            ['115200', '115200']
          ]
        }
      ],
      "category": Blockly.Categories.uav,
      "extensions": ["colours_uav", "shape_statement"]
    });
  }
}

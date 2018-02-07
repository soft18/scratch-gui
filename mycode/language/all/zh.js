export default {
    /**
     * zh:chinese
     * 命名例子：模块_功能_name:'合金队长', gui_menu_drive:'驱动',
     * 模块：scratch-gui , scratch-vm , scratch-audio ,scratch-blocks , my ,
     * use: LOCAL.gui_menu_save
     * 注意： %  不要改变它，它是变量；空的就让它空；
     */
    data: {
        /*  gui mode */
        gui_language_select :'选择',
        gui_menu_save:'保存',
        gui_menu_load:'加载',
        gui_menu_driver:'驱动',
        gui_menu_update:'更新固件',
        gui_menu_connect0:'没有连接',
        gui_menu_connect1:'连接',
        gui_menu_blocks:'积木',
        gui_menu_costumes:'角色',
        gui_menu_sounds:'声音',
        gui_menu_setting:'设置',
        gui_menu_ai:'人工智能',

        gui_toolbox_category_motion:'动作',
        gui_toolbox_category_looks:'外观',
        gui_toolbox_category_sound:'声音',
        gui_toolbox_category_events:'事件',
        gui_toolbox_category_control:'控制',
        gui_toolbox_category_sensing:'侦测',
        gui_toolbox_category_operators:'运算',
        gui_toolbox_category_data:'数据',
        gui_toolbox_category_variables:'变量',
        gui_toolbox_category_myblocks:'自定义',
        gui_toolbox_category_gsrobot:'魔洛克',

        gui_ex_add_sprite:'添加角色',
        gui_ex_add_backdrop:'添加背景',

        gui_costumes_add_costume:'添加造型',
        gui_costumes_fill:'填充',
        gui_costumes_outline:'轮廓',

        gui_sounds_sound:'声音',
        gui_sounds_trim:'剪辑',
        gui_sounds_save:'保存',
        gui_sounds_faster:'加快',
        gui_sounds_slower:'减慢',
        gui_sounds_echo:'回声',
        gui_sounds_robot:'机器人',
        gui_sounds_louder:'增大音量',
        gui_sounds_softer:'减小音量',
        gui_sounds_reverse:'反向',
        gui_sounds_record:'录制声音',
        gui_sounds_add:'添加声音',

        gui_connect_title:'连接',
        gui_connect_serialport:'选择端口',
        gui_connect_select:'选择',
        gui_connect_state:'状态',
        gui_connect_state_0:'未连接',
        gui_connect_state_1:'已连接',
        gui_connect_button_connect:'连接',
        gui_connect_button_disconnect:'断开连接',
        gui_connect_refresh:'刷新',

        gui_update_title:'固件升级',
        gui_update_normal:'官方固件',
        gui_update_advanced:'自定义固件',
        gui_update_serialport:'选择端口',
        gui_update_select:'选择',
        gui_update_mainboard:'主板',
        gui_update_version:'版本',
        gui_update_button_ok:'确认',
        gui_update_button_cancel:'关闭',
        gui_update_baudRate: '波特率',
        gui_update_uploading: '正在上传',
        gui_update_upload_hex_file: '上传hex文件',

        gui_online_update_title: '在线升级',
        gui_online_update_version: '版本：',
        gui_online_update_latest_version_tip: '已是最新版本',
        gui_online_update_update_now: '现在更新',
        gui_online_update_detect_version: '检测新版本',
        gui_online_update_find_the_latest_version: '发现新版本的',

        gui_set_title:'设置',
        gui_set_language:'语言',
        gui_set_info:'更多信息请访问我们的网站 :',

        gui_ai_title:'智能语音对话',
        gui_start_recording:'开始录音',
        gui_stop_recording:'停止录音',
        gui_ai_control_description:'语音控制机器人：红灯，黄灯，绿灯，关灯',
        /*  vm mode */


        /* audio mode */

        /* blocks mode*/
        blocks_motion_movesteps:'移动 %1 步',
        blocks_motion_turnright :'向右旋转 %1 %2 度',
        blocks_motion_turnleft :'向左旋转 %1 %2 度',
        blocks_motion_pointindirection :'指向方向 %1',
        blocks_motion_pointtowards_menu :'',
        blocks_motion_pointtowards :'面向 %1',
        blocks_motion_goto_menu :'',
        blocks_motion_goto_menu_mouse :'鼠标指针',
        blocks_motion_goto_menu_random :'随机位置',
        blocks_motion_gotoxy :'移动到 x: %1 y: %2',
        blocks_motion_goto :'移动到 %1',
        blocks_motion_glidesecstoxy :'在 %1 秒内滑行到 x: %2 y: %3',
        blocks_motion_glideto_menu :'',
        blocks_motion_glideto :'在 %1 秒内滑行到 %2',
        blocks_motion_changexby :'将x的坐标增加 %1',
        blocks_motion_setx :'将x坐标设定为 %1',
        blocks_motion_changeyby :'将y的坐标增加 %1',
        blocks_motion_sety :'将y坐标设定为 %1',
        blocks_motion_ifonedgebounce :'碰到边缘就反弹',
        blocks_motion_setrotationstyle :'将旋转模式设定为 %1',
        blocks_motion_setrotationstyle_left :'左-右旋转',
        blocks_motion_setrotationstyle_don :'不旋转',
        blocks_motion_setrotationstyle_all :'任意',
        blocks_motion_xposition :'x 坐标',
        blocks_motion_yposition :'y 坐标',
        blocks_motion_direction :'方向',

        blocks_control_forever :'重复执行',
        blocks_control_repeat :'重复执行 %1 次',
        blocks_control_if :'如果 %1 那么',
        blocks_control_if_else_if :'如果 %1 那么',
        blocks_control_if_else_else :'否则',
        blocks_control_stop_all :'全部',
        blocks_control_stop_this :'当前脚本',
        blocks_control_stop_other :'角色的其他脚本',
        blocks_control_wait :'等待 %1 秒',
        blocks_control_wait_until :'在 %1 之前一直等待',
        blocks_control_repeat_until :'重复执行直到 %1',
        blocks_control_start_as_clone :'当作为克隆体启动时',
        blocks_control_create_clone_of_menu :'',
        blocks_control_create_clone_of :'克隆 %1',
        blocks_control_delete_this_clone :'删除本克隆体',

        blocks_data_variable :'',
        blocks_data_setvariableto :'将变量 %1 设定为 %2',
        blocks_data_changevariableby :'将变量 %1 的值增加 %2',
        blocks_data_showvariable :'显示变量 %1',
        blocks_data_hidevariable :'隐藏变量 %1',
        blocks_data_listcontents :'',
        blocks_data_listindexall :'',
        blocks_data_listindexrandom :'',
        blocks_data_addtolist :'将 %1 加到链表 %2 末尾',
        blocks_data_deleteoflist :'删除第 %1 项，从链表 %2',
        blocks_data_insertatlist :'插入 %1 位置 %2 到链表 %3',
        blocks_data_replaceitemoflist :'替换位置 %1 链表 %2 内容 %3',
        blocks_data_itemoflist :'第 %1 项 %2',
        blocks_data_lengthoflist :'链表 %1 的长度',
        blocks_data_listcontainsitem :'%1 包含 %2?',
        blocks_data_showlist :'显示链表 %1',
        blocks_data_hidelist :'隐藏链表 %1',

        blocks_event_whenflagclicked :'当 %1 被点击',
        blocks_event_whenthisspriteclicked :'当角色被点击时',
        blocks_event_whenbroadcastreceived :'当接收到 %1',
        blocks_event_whenbackdropswitchesto :'当背景切换到 %1',
        blocks_event_whengreaterthan :'当 %1 > %2',
        blocks_event_broadcast_menu :'',
        blocks_event_broadcast :'广播 %1',
        blocks_event_broadcastandwait :'广播 %1 并等待',
        blocks_event_whenkeypressed :'当按下 %1 ',

        blocks_extension_pen_down :'%1 %2 pen down',
        blocks_extension_music_drum :'%1 %2 play drum %3',
        blocks_extension_wedo_motor :'%1 %2 turn a motor %3',
        blocks_extension_wedo_hat :'%1 %2 when I am wearing a hat',
        blocks_extension_wedo_boolean :'%1 %2 O RLY?',
        blocks_extension_wedo_tilt_reporter :'%1 %2 tilt angle %3',
        blocks_extension_wedo_tilt_menu :'',
        blocks_extension_music_reporter :"%1 %2 hey now, you're an all-star",

        blocks_looks_sayforsecs :'说 %1 for %2 秒',
        blocks_looks_say :'说 %1',
        blocks_looks_thinkforsecs :'思考 %1 for %2 秒',
        blocks_looks_think :'思考 %1',
        blocks_looks_show :'显示',
        blocks_looks_hide :'隐藏',
        blocks_looks_effect_menu_options_color :'颜色',
        blocks_looks_effect_menu_options_fisheye :'超广角镜头',
        blocks_looks_effect_menu_options_whirl :'旋转',
        blocks_looks_effect_menu_options_pixelate :'像素滤镜',
        blocks_looks_effect_menu_options_mosaic :'马赛克',
        blocks_looks_effect_menu_options_brightness :'亮度',
        blocks_looks_effect_menu_options_ghost :'虚像',
        blocks_looks_changeeffectby :'将特效 %1 更改为 %2',
        blocks_looks_seteffectto :'设置特效 %1 为 %2',
        blocks_looks_cleargraphiceffects :'清除所有图形特效',
        blocks_looks_changesizeby :'将角色大小增加 %1',
        blocks_looks_setsizeto :'将角色大小设定为 %1 %',
        blocks_looks_size :'大小',
        blocks_looks_costume :'',
        blocks_looks_switchcostumeto :'将造型切换为 %1',
        blocks_looks_nextcostume :'下一个造型',
        blocks_looks_switchbackdropto :'将背景切换为 %1',
        blocks_looks_backdrops :'',
        blocks_looks_gotofront :'移至 %1',
        blocks_looks_gobacklayers :'移 %1 %2 层',
        blocks_looks_backdropname :'背景 %1',
        blocks_looks_costumeorder :'编号 %1',
        blocks_looks_backdroporder :'背景 #',
        blocks_looks_switchbackdroptoandwait :'切换下一个背景 %1 并等待',
        blocks_looks_nextbackdrop :'下一个背景',

        blocks_operator_add :'%1 + %2',
        blocks_operator_subtract :'%1 - %2',
        blocks_operator_multiply :'%1 * %2',
        blocks_operator_divide :'%1 / %2',
        blocks_operator_random :'在 %1 到 %2 间随机选一个数',
        blocks_operator_lt :'%1 < %2',
        blocks_operator_equals :'%1 = %2',
        blocks_operator_gt :'%1 > %2',
        blocks_operator_and :'%1 与 %2',
        blocks_operator_or :'%1 或 %2',
        blocks_operator_not :'%1不成立',
        blocks_operator_join :'合并 %1 与 %2',
        blocks_operator_letter_of :'第 %1 个字符： %2',
        blocks_operator_length :'%1 的长度',
        blocks_operator_contains :'%1 包含 %2?',
        blocks_operator_mod :'%1 除以 %2 的余数',
        blocks_operator_round :'将 %1 四舍五入',
        blocks_operator_mathop :'%1 of %2',

        blocks_pen_clear :'clear',
        blocks_pen_stamp :'stamp',
        blocks_pen_pendown :'pen down',
        blocks_pen_penup :'pen up',
        blocks_pen_setpencolortocolor :'set pen color to %1',
        blocks_pen_changepencolorby :'change pen color by %1',
        blocks_pen_setpencolortonum :'set pen color to %1',
        blocks_pen_changepenshadeby :'change pen shade by %1',
        blocks_pen_setpenshadeto :'set pen shade to %1',
        blocks_pen_changepensizeby :'change pen size by %1',
        blocks_pen_setpensizeto :'set pen size to %1',
        blocks_pen_changepentransparencyby :'change pen transparency by %1',
        blocks_pen_setpentransparencyto :'set pen transparency to %1',

        blocks_procedures_definition :'define %1',

        blocks_sensing_touchingobject :'碰到 %1?',
        blocks_sensing_touchingobjectmenu :'',
        blocks_sensing_touchingcolor :'碰到颜色 %1?',
        blocks_sensing_coloristouchingcolor :'颜色 %1 碰到 %2?',
        blocks_sensing_distanceto :'到 %1 的距离',
        blocks_sensing_distancetomenu :'',
        blocks_sensing_askandwait :'询问 %1 并等待',
        blocks_sensing_answer :'回答',
        blocks_sensing_keypressed :'按键 %1 是否按下?',
        blocks_sensing_keyoptions :'',
        blocks_sensing_mousedown :'鼠标键被按下了吗?',
        blocks_sensing_mousex :'鼠标的x坐标',
        blocks_sensing_mousey :'鼠标的y坐标',
        blocks_sensing_loudness :'响度',
        blocks_sensing_videoon :'视屏侦测 %1 在 %2 上',
        blocks_sensing_videoonmenuone :'',
        blocks_sensing_videoonmenutwo :'',
        blocks_sensing_videotoggle :'将摄像头 %1',
        blocks_sensing_videotogglemenu :'',
        blocks_sensing_setvideotransparency :'将视屏透明度设置为 %1 %',
        blocks_sensing_timer :'计时器',
        blocks_sensing_resettimer :'计时器归零',
        blocks_sensing_of_property_menu :'',
        blocks_sensing_of_object_menu :'',
        blocks_sensing_of :'获取 %1 属于 %2',
        blocks_sensing_current :'当前时间 %1',
        blocks_sensing_currentmenu :'',
        blocks_sensing_dayssince2000 :'2000年之后的天数',
        blocks_sensing_username :'用户名',

        blocks_sound_sounds_menu :'',
        blocks_sound_play :'播放声音 %1',
        blocks_sound_playuntildone :'播放声音 %1 直到播放完毕',
        blocks_sound_stopallsounds :'停止所有声音',
        blocks_sound_drums_menu :'',
        blocks_sound_playdrumforbeats :'弹奏鼓声 %1 %2 拍',
        blocks_sound_restforbeats :'停止 %1 拍',
        blocks_sound_playnoteforbeats :'弹奏音符 %1 %2 拍',
        blocks_sound_effects_menu_options_pitch :'pitch',
        blocks_sound_effects_menu_options_pan :'pan left/right',
        blocks_sound_seteffectto :'设置特效 %1 的值为 %2',
        blocks_sound_changeeffectby :'将特效 %1 的值改变为 %2',
        blocks_sound_cleareffects :'清除声音特效',
        blocks_sound_instruments_menu :'',
        blocks_sound_setinstrumentto :'设定乐器为 %1',
        blocks_sound_changevolumeby :'将音量增加 %1',
        blocks_sound_setvolumeto :'将音量设定为 %1%',
        blocks_sound_volume :'音量',
        blocks_sound_changetempoby :'将节奏加快 %1',
        blocks_sound_settempotobpm :'将节奏设定为 to %1 bpm',
        blocks_sound_tempo :'节奏',

        /* my mode */
        my_category_start: '开始',
        my_category_motion: '运动',
        my_category_light: '灯光',
        my_category_sound: '声音',
        my_category_control: '控制',
        my_category_operator: '运算',
        my_category_sensing: '传感器',
        my_category_variable: '变量',
        my_gs_event_whenflagclicked: '当 %1 被点击',
        my_gs_event_whenthisspriteclicked: '当主板顶部按钮按下',
        my_gs_motion_move: '设置电机转速 左轮: %1 右轮: %2',
        my_gs_motion_move_2: '设置 %1 运动，速度为 %2 ',
        my_gs_motion_move_0_forward: '向前',
        my_gs_motion_move_0_backward: '向后',
        my_gs_motion_move_0_left: '左转',
        my_gs_motion_move_0_right: '右转',
        my_gs_motion_move_3: '设置 %1 %2 以速度 %3 ',
        my_gs_motion_steering_engine: '设置 %1 舵机 %2 转角1 %3 转角2 %4',
        my_gs_light_change: '设置板载 # %1 颜色为 %2 ',
        my_gs_light_0_all: '双灯',
        my_gs_light_0_left: '左灯',
        my_gs_light_0_right: '右灯',
        my_gs_light_0_red: '红',
        my_gs_light_0_yellow: '黄',
        my_gs_light_0_green: '绿',
        my_gs_light_0_black: '关闭',
        my_gs_light_change_2: '设置板载 # %1 红 %2 绿 %3 蓝 %4 ',
        my_gs_light_change_3: '设置板载 # %1 颜色为 %2',
        my_gs_matrix_change: '设置矩阵面板 %1',
        my_gs_matrix_change_VALUE1: '表情一',
        my_gs_matrix_change_VALUE2: '表情二',
        my_gs_matrix_change_VALUE3: '表情三',
        my_gs_matrix_change_VALUE4: '表情四',
        my_gs_matrix_change_VALUE5: '表情五',
        my_gs_matrix_change_VALUE6: '表情六',
        my_gs_matrix_change_VALUE7: '表情七',
        my_gs_matrix_change_VALUE8: '表情八',
        my_gs_matrix_change_2: '%1 LED矩阵 显示绘图 %2',
        my_gs_port_1: '端口 1',
        my_gs_port_2: '端口 2',
        my_gs_port_3: '端口 3',
        my_gs_port_4: '端口 4',
        my_gs_port_5: '端口 5',
        my_gs_port_6: '端口 6',
        my_gs_port_7: '端口 7',
        my_gs_port_8: '端口 8',
        my_gs_matrix_change_3: '%1 LED矩阵 显示图标 %2',
        my_gs_matrix_change_4: '%1 LED矩阵 显示数字 %2',
        my_gs_matrix_change_5: '%1 LED矩阵 显示文字 %2',
        my_gs_light_ultrasonic: '设置超声波灯光 %1',
        my_gs_light_ultrasonic_2: '设置 %1 超声波颜色为 红 %2 绿 %3 蓝 %4',
        my_gs_light_ultrasonic_3: '设置 %1 超声波的颜色为 %2',
        my_gs_sound_play: '播放 %1 音调 %2 毫秒',
        my_gs_sound_play_2: '播放音调 %1 节拍为 %2',
        my_gs_sound_play_0_quarter: '四分之一',
        my_gs_sound_play_0_half: '二分之一',
        my_gs_sound_play_0_eighth: '八分之一',
        my_gs_sound_play_0_whole: '整拍',
        my_gs_sound_play_0_double: '双拍',
        my_gs_control_wait: '等待 %1 秒',
        my_gs_control_repeat: '重复执行 %1 次',
        my_gs_control_forever: '重复执行',
        my_gs_control_repeat_until: '重复执行 直到 %1',
        my_gs_control_if: '如果 %1 那么',
        my_gs_control_if_else: '否则',
        my_gs_control_wait_until: '一直等待 %1',
        my_gs_control_stop: '停止',
        my_gs_control_stop_all: '所有',
        my_gs_operator_random: '从 %1 到 %2 取随机数',
        my_gs_sensing_mousedown: '主板顶部按钮是否按下？',
        my_gs_sensing_distanceto: '%1 超声波传感器数值(mm)',
        my_gs_sensing_linePatrolValue: '%1 巡线传感器数值',
        my_gs_data_variable_a: '变量A',
        my_gs_data_variable_b: '变量B',
        my_gs_data_variable_c: '变量 C',
        my_gs_data_variable_d: '变量 D',
        my_gs_data_variable_e: '变量 E',
        my_gs_data_setvariableto: '设置 %1 等于 %2',
        my_gs_data_changevariableby: '%1 加上 %2'
        /* end */
    }
}

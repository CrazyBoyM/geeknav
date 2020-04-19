/*
Hitokoto-Go SQL
Author: Syc <syc@bilibili.de>
Date: 2018-02-23 21:33:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hitokoto`
-- ----------------------------
DROP TABLE IF EXISTS `hitokoto`;
CREATE TABLE `hitokoto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hitokoto` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hitokoto
-- ----------------------------
INSERT INTO `hitokoto` VALUES ('1', '我有在反省，但我不后悔。');
INSERT INTO `hitokoto` VALUES ('2', '夹在我女友与前女友与青梅竹马间的果然是修罗场！');
INSERT INTO `hitokoto` VALUES ('3', '比自己,比梦想更重要的东西永远都存在着...');
INSERT INTO `hitokoto` VALUES ('4', '男人许下的诺言就一定要遵守。');
INSERT INTO `hitokoto` VALUES ('5', '没有回忆就去创造回忆，没有道路就去开辟道路。');
INSERT INTO `hitokoto` VALUES ('6', '自身不先改变的话，一切都不会改变。');
INSERT INTO `hitokoto` VALUES ('7', '我敬你是条汉子！');
INSERT INTO `hitokoto` VALUES ('8', '嘛，那又怎么样呢？');
INSERT INTO `hitokoto` VALUES ('9', '有你在的日子才是我的日常。');
INSERT INTO `hitokoto` VALUES ('10', '不相信自己的人，连努力的价值都没有。');
INSERT INTO `hitokoto` VALUES ('11', '比起有一百个朋友，不如有个比一百人还要重要的真心朋友。');
INSERT INTO `hitokoto` VALUES ('12', '要超越过去与悲伤，用坚强和笑容去开拓明天。');

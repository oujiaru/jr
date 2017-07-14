/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1703

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-14 17:17:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `mold` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `details` varchar(255) NOT NULL,
  `engDetails` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', 'T-shirt', '../img/list/shirt1.gif', '50', '非常实用的夏季款针织马甲', 'Vest Sweater');
INSERT INTO `goodslist` VALUES ('2', 'T-shirt', '../img/list/shirt2.gif', '141', '5color ★ 清透针法~温柔魅力V领针织衫', 'V Neck Cut Hem Sweater');
INSERT INTO `goodslist` VALUES ('3', 'T-shirt', '../img/list/shirt3.jpg', '120', '夏天穿很有亮点，印字亮点T恤衫 !', 'Graphic Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('4', 'T-shirt', '../img/list/shirt4.jpg', '133', '时尚印字亮点短袖T恤衫，运动套装 !!', 'Grapic Short Sleeve & Shorts');
INSERT INTO `goodslist` VALUES ('5', 'T-shirt', '../img/list/shirt5.gif', '166', '可爱镂空蕾丝结构材质感，夏季值得收藏的产品!!', 'Square Neck Eyelet Sleeveless');
INSERT INTO `goodslist` VALUES ('6', 'T-shirt', '../img/list/shirt6.jpg', '188', '经典简练，百搭风格 ★', 'Printed Loose Fit Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('7', 'T-shirt', '../img/list/shirt7.gif', '199', '柔软舒适穿着感，每天穿都很设计的T恤衫!!', 'Basic U Neck Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('8', 'T-shirt', '../img/list/shirt8.gif', '202', '袖子褶皱~女人味露肩装T恤', 'Frill Sleeveless');
INSERT INTO `goodslist` VALUES ('9', 'T-shirt', '../img/list/shirt9.jpg', '220', '漂亮的风格♥ 稍稍有亮点，性感魅力十足!', 'Twist Pointed Long Sleeve Tee');
INSERT INTO `goodslist` VALUES ('10', 'T-shirt', '../img/list/shirt10.jpg', '240', '轻盈舒适，舒适的穿着感!', 'Pocket Detailing Loose FIt Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('11', 'pants', '../img/list/ku1.gif', '110', '★机会特价★ 适中长短！！舒适穿着感基本百搭亚麻布裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('12', 'pants', '../img/list/ku2.jpg', '110', '25 - 30 尺码构成 ★深青色，灰黑色，黑色', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('13', 'pants', '../img/list/ku3.jpg', '110', 'S,M,L ♥可爱时尚，短裤再补货♥', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('14', 'pants', '../img/list/ku4.jpg', '110', '★S,M,L 腰部松紧带★ 显得腿部线条很修长的裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('15', 'pants', '../img/list/ku5.jpg', '110', '修身显瘦，自然垂坠，基本百搭的裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('16', 'pants', '../img/list/ku6.jpg', '110', '清爽材质和图案~潇洒魅力的裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('17', 'pants', '../img/list/ku7.gif', '110', '舒适的阔腿裤!! 经典简练，魔法裤子产品', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('18', 'pants', '../img/list/ku8.jpg', '110', '修身版型♥ 荷叶边线条设计，女人味十足的裙裤!!', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('19', 'pants', '../img/list/ku9.gif', '110', '百搭的裤子，值得推荐★自然时尚，短牛仔裤', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('20', 'pants', '../img/list/ku10.jpg', '110', '艺术感十足的版型！！高档的阔腿裤', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('21', 'bra', '../img/list/inner1.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('22', 'bra', '../img/list/inner2.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('23', 'bra', '../img/list/inner3.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('24', 'bra', '../img/list/inner4.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('25', 'bra', '../img/list/inner5.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('26', 'bra', '../img/list/inner6.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('27', 'bra', '../img/list/inner7.jpg', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('28', 'bra', '../img/list/inner8.jpg', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('29', 'bra', '../img/list/inner9.jpg', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('30', 'bra', '../img/list/inner10.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('31', 'T-shirt', '../img/list/shirt1.gif', '50', '非常实用的夏季款针织马甲', 'Vest Sweater');
INSERT INTO `goodslist` VALUES ('32', 'T-shirt', '../img/list/shirt2.gif', '141', '5color ★ 清透针法~温柔魅力V领针织衫', 'V Neck Cut Hem Sweater');
INSERT INTO `goodslist` VALUES ('33', 'T-shirt', '../img/list/shirt3.jpg', '120', '夏天穿很有亮点，印字亮点T恤衫 !', 'Graphic Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('34', 'T-shirt', '../img/list/shirt4.jpg', '133', '时尚印字亮点短袖T恤衫，运动套装 !!', 'Grapic Short Sleeve & Shorts');
INSERT INTO `goodslist` VALUES ('35', 'T-shirt', '../img/list/shirt5.gif', '166', '可爱镂空蕾丝结构材质感，夏季值得收藏的产品!!', 'Square Neck Eyelet Sleeveless');
INSERT INTO `goodslist` VALUES ('36', 'pants', '../img/list/ku1.gif', '110', '★机会特价★ 适中长短！！舒适穿着感基本百搭亚麻布裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('37', 'pants', '../img/list/ku2.jpg', '110', '★机会特价★ 适中长短！！舒适穿着感基本百搭亚麻布裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('38', 'pants', '../img/list/ku3.jpg', '110', '★机会特价★ 适中长短！！舒适穿着感基本百搭亚麻布裤子', 'Linen Short Pants');
INSERT INTO `goodslist` VALUES ('44', 'T-shirt', '../img/list/shirt9.jpg', '220', '漂亮的风格♥ 稍稍有亮点，性感魅力十足!', 'Twist Pointed Long Sleeve Tee');
INSERT INTO `goodslist` VALUES ('45', 'T-shirt', '../img/list/shirt10.jpg', '240', '轻盈舒适，舒适的穿着感!', 'Pocket Detailing Loose FIt Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('46', 'bra', '../img/list/inner1.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('47', 'bra', '../img/list/inner2.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('48', 'bra', '../img/list/inner3.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('49', 'bra', '../img/list/inner4.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('50', 'bra', '../img/list/inner5.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('39', 'T-shirt', '../img/list/shirt10.jpg', '240', '轻盈舒适，舒适的穿着感!', 'Pocket Detailing Loose FIt Short Sleeve Tee');
INSERT INTO `goodslist` VALUES ('40', 'bra', '../img/list/inner1.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('41', 'bra', '../img/list/inner2.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('42', 'bra', '../img/list/inner3.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');
INSERT INTO `goodslist` VALUES ('43', 'bra', '../img/list/inner4.gif', '998', '百变女王~~一款穿出6种效果来~', '8290 rebecca bra underwear (브라단품)');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('649@qq.com', '123');
INSERT INTO `user` VALUES ('1059@qq.com', '123');
INSERT INTO `user` VALUES ('root', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('3333@qq.com', '1a100d2c0dab19c4430e7d73762b3423');
INSERT INTO `user` VALUES ('1111@qq.com', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `user` VALUES ('4444@qq.com', '73882ab1fa529d7273da0db6b49cc4f3');
SET FOREIGN_KEY_CHECKS=1;

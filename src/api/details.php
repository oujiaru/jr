<?php
	// 1、连接数据库
	// 配置参数
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5_1703';

	//连接数据库
	$conn = new mysqli($servername,$username,$password,$database);

	// 检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_error);
	}

	// 设置字符集
	$conn->set_charset('utf8');

	$guid = isset($_GET['guid']) ? $_GET['guid'] : 1;

	// 查找所有用户信息
	$sql = "select * from goodslist where id='$guid'";


	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>
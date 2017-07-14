<?php

	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	include 'connect.php';
	// 第一步
	// 配置信息

	//用户
	$email = isset($_POST['email']) ? $_POST['email'] : '';
	$password = isset($_POST['password']) ? $_POST['password'] : '';


	// 查找所有用户信息
	$sql = "select email from user where email='$email'";


	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	


	//直接从数据库获取邮箱为$username的数据，能获取到说明已存在否则不存在
	if($row){
		echo '已经存在';
	}else{
		
		// md5加密
		$password = md5($password);

		$sql = "insert into user (email,password) values('$email','$password')";

		// 获取查询结果
		$res = $conn->query($sql);

		if($res){
			echo "ok";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}	
	}

	//关闭连接
	$conn->close();

	// echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>
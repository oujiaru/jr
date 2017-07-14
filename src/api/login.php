<?php
	include 'connect.php';

	//用户
	$email = isset($_GET['loginEmail']) ? $_GET['loginEmail'] : '';
	$password = isset($_GET['loginPassword']) ? $_GET['loginPassword'] : '';

	// md5加密
	$password = md5($password);


	$arr=array("email"=>"$email","password"=>"$password");

	// 查找所有用户信息
	$sql = "select email,password from user ";


	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);
    


	if(in_array($arr, $row)){
		echo "ok";
	}else{
		echo "no";
	};

	//关闭连接
	$conn->close();
?>
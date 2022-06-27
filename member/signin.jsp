<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import = "project_java.Y_DBmanager"%>
<%@ page import = "project_java.SignUp" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="../Css/all.css">
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
<script src="../Js/jquery-3.6.0.min.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body class="member-body" style="height:1200px;">
<%
	Y_DBmanager y_dbmanager = new Y_DBmanager();
	y_dbmanager.getConnection();
	SignUp signup = new SignUp();
%>
   
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
<script src="../Js/all.js"></script>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import = "java.sql.*"%>
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
 	Connection conn  = y_dbmanager.getConnection();
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	SignUp signup = new SignUp();
	String email = request.getParameter("email");
	String password = request.getParameter("password");
	String password_confirm = request.getParameter("password_confirm");
	String nickname = request.getParameter("nickname");
%>
	<script>
	</script>
<% 
	try {
	if(signup.emailisOverlap(email,pstmt, conn,rs)) {
%>
	<script>
		$('#email-validate').css({display:'block'});
		alert("이미있는 아이디입니다.");
		location.href = "signin.jsp";
	</script>
<% 	
	
	}
	}
	catch(Exception e) {
		e.printStackTrace();
	}
	
	try {
	if(signup.NickNameIsOverlap(nickname, pstmt,  conn, rs)) {
%>
	<script>
		$('#nickname-validate').css({display:'block'});
		alert("이미있는 닉네임 입니다!");
		location.href = "signin.jsp";
	</script>
<% 		
	}
	}
	catch(Exception e) {
		e.printStackTrace();
	}
	if(signup.emailisOverlap(email, pstmt, conn, rs) == false && signup.NickNameIsOverlap(nickname, pstmt, conn, rs) ==false) {
		
	try {
		String sql = "insert into member values(temp_seq.nextval,?,?,?,'anne.jpg',?,?)";
		pstmt = conn.prepareStatement(sql);
		pstmt.setString(1, email); 		
		pstmt.setString(2, password); 		
		pstmt.setString(3, nickname); 	
		pstmt.setString(4, null); //한줄소개
		pstmt.setString(5, null); //관리자여부
		pstmt.executeUpdate();
		
		System.out.println("환영합니다 !");
		
	}catch(SQLException e) {
		e.printStackTrace();
	}
	}
	else {
		
%>
<script>
	alert("뭔가잘못된듯 ?");
</script>
<% 			
	}
%>

   
</body>
</html>
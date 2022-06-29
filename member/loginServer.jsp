<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import = "java.sql.*"%>
<%@ page import = "project_java.Y_DBmanager"%>
<%@ page import = "project_java.LogIn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 확인 중 . . .</title>
</head>
<body>
	<%
		Y_DBmanager y_dbmanager = new Y_DBmanager();
	 	Connection conn  = y_dbmanager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		LogIn login = new LogIn();
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		if(login.loginvalid(email, password, conn, pstmt, rs)) {
	%>
		<script>
			alert("환영합니다 !");
			location.href = "../main/main.jsp";
		</script>
	<%
		}
		if(login.isVaildEmail(email, conn, pstmt, rs) == true && login.isVaildPW(password, conn, pstmt, rs)== false ) {
			
	%>
		<script>
			alert("비밀번호를 다시 확인해주시길 바랍니다.");
			location.href = "login.jsp";
		</script>
	<% 			
		}
		if(login.isVaildEmail(email, conn, pstmt, rs) == false && login.isVaildPW(password, conn, pstmt, rs) == true) {
			
	%>
		<script>
			alert("아이디를 다시확인해주시길 바랍니다.");
			location.href = "login.jsp";
		</script>
	<%
		}
		if(login.isVaildEmail(email, conn, pstmt, rs) == false && login.isVaildPW(password, conn, pstmt, rs)==false) {
			
	%>
		<script>
			alert("존재하지 않는 정보입니다");
			location.href = "login.jsp";
		</script>
	<% 
		}
	%>	
</body>
</html>
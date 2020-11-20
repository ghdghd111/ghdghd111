let password;

id=prompt('아이디 입력');

if(id=='admin'){
    password==prompt('비밀번호입력');
    let passwor = '123456';
    if(password=='123456'){
        location.href="login_true.html"
    }else{
        location.href="login_false.html"
    }    
}else{
    location.href="login_error.html"
}
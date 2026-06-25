const params = new URLSearchParams(window.location.search);

const mode = params.get("mode");

const leader = document.getElementById("leaderBtn");

const member = document.getElementById("memberBtn");

if(mode==="login"){

leader.href="login.html?role=leader";

member.href="login.html?role=member";

}

else{

leader.href="register.html?role=leader";

member.href="register.html?role=member";

}
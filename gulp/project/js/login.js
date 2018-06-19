
	var ouserName=document.getElementById("userName");	
	var opassword=document.getElementById("password");
	var ocheckbtn=document.getElementById("checkbtn");
	var ologinbtn=document.getElementById("loginbtn");
	var num=0;
	ouserName.onblur=function(){
		var reg = /^1[3-9]\d{9}$/;
		if(this.value==""){
			this.nextSibling.innerHTML=("请输入手机号");
			this.style.borderColor="#f49f26";
			return null;
		}
		if(reg.test(this.value)){
			this.nextSibling.innerHTML=("");
		}else{
			this.nextSibling.innerHTML=("手机号格式错误");
			this.style.borderColor="#f49f26";
		}				
	}
	opassword.onblur = function(){
		var a=0;
		var b=0;
		var c=0;
		if(this.value==""){
				this.nextSibling.innerHTML="请输入登录密码";
				this.style.borderColor="#f49f26";
				return null;
			}

			var reg1=/^.{6,12}$/;
			if(!reg1.test(this.value)){
				this.nextSibling.innerHTML=("登录密码格式错误");
				this.style.borderColor="#f49f26";
				return null;
			};
			var reg2=/\d+/g;
			if(reg2.test(this.value)){
				a=1;
			};
			var reg3=/[a-z]+/gi
			if(reg3.test(this.value)){
				b=1;
			};
			var reg4=/[^0-9a-zA-Z]+/g
			if(reg4.test(this.value)){
				c=1;
			};
			var x=a+b+c;
			if(x<2){
				this.nextSibling.innerHTML=("登录密码格式错误");
				this.style.borderColor="#f49f26";
			}else{
				this.nextSibling.innerHTML=("");
				this.style.borderColor="#e8e8e8";
			};
		
	}
	

	
	$(ologinbtn).click(function(){
		console.log($("#password").val());
		if(ocheckbtn.checked){
			 num=7;
		}
		$.ajax({
			type:"post",
			url:"http://localhost/gulp/project/data/verify.php",
			data:{
				user:$("#userName").val(),
				pass:$("#password").val()

			},
			async:true
		}).then(function(a){
			if (a==1) {
				setCookie("user",$(ouserName).val(),num);
				setCookie("pass",$(opassword).val(),num);
				location.href="http://localhost/gulp/project/index.html";
				
			}else{
				alert("用户名或密码不正确")
			}			


		});	
	})

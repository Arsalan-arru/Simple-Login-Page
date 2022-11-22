function Login(event){
var username=document.getElementById('username').value
var password=document.getElementById('password').value

if(username == "" || username == null)
{
    alert("This field is mandatory")
    document.getElementsByName('username')[0].style="border:1px solid red"
    document.getElementsByClassName('smallu')[0].innerText="This field cannot be empty!!!"
    document.getElementsByClassName('smallu')[0].style="color:red"
}
if(password == "" || password == null)
{
    document.getElementsByName('password')[0].style="border:1px solid red"
    document.getElementsByClassName('smallp')[0].innerText="This field cannot be empty!!!"
    document.getElementsByClassName('smallp ')[0].style="color:red"
}

    console.log(username);
    console.log(password);

    event.preventDefault()
}

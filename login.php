<?php
$Username = $_POST['Username'];
$password =$_POST['password'];
echo $Username;
$con = new mysqli("localhost","pratosh","","db_name");
if($con->connect_error){
die("Failed TO connect :".$com->connect_error);
}else
{
    $stmt = $con->prepare("select * from regidtration where Username = ?");
    $smt->bind_param("s",$email);
    $stmt->execute();
    $stmt_result=$stmt->get_result();
    if($stmt_result->num_row > 0)
        {$_data =$stmt_result->fetch__assoc();
        if($data =['password']===$password){

          echo"<h2>LOgin successfully<h2>";}
        else{
           echo"<h2> INVAILD PASSWORD OR USERNAME<h2>";}
        }else
        {
            echo"<h2> INVAILD PASSWORD OR USERNAME<h2>";}

}   
?>
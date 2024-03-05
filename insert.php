<?php
include 'database.php';
if(isset($_POST['Register']))
{
    $name=$_POST['username'];
    $email=$_POST['email'];
    $mobile_no=$_POST['mobile_no'];
    $password=$_POST['password'];
    $sql = "insert into register (username, email, mobile_no, password) values('$name','$email','$mobile_no', '$password')";

    if (mysqli_query($con, $sql)) {
      echo "<script>alert('Data inserted successfully')</script>";
    } else {
      echo "Error: " . mysqli_error($conn);
    }
    
    
    mysqli_close($con);
  
}
?>
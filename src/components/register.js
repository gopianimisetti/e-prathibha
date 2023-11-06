import  React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./register.css";
import axios from "axios";

function Register(){
  
    const navigate=useNavigate()
    let [data, setData]=useState({
        
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:""

    })
    
    let{name,email,password,confirmPassword,phone}=data;

    let changingg = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    
    let submitting = async (e) => {
            e.preventDefault();
            
       
          let options={name,email,password,confirmPassword,phone}
          await axios.post("https://test.e-prathibha.com/apis/register",options).then(val=>{console.log(val)

          let otpsplit=val.data.data

          console.log(otpsplit);

          let b=otpsplit.slice(-6)

          let otp=sessionStorage.setItem("otp",b)
          console.log(otp);
          console.log(b);

        });



          
         
        
        if(name.match(/^[a-z]/)&&name.includes("@gmail.com")) {

            alert("user name starts with capital letter");

        
       } else if (password.length <= 8) {
            alert("Password length must be greater than 8");

          } else if (password !== confirmPassword) {
            alert("Password is not matching");

          } else if (phone.length !== 10) {
            alert("PhoneNumber should be 10 digits");
          } 
            
          else{
            
            console.log(data);
    
            navigate("/verifyemail")
            alert("user registered successfulluy");
          
         }
          setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        Phone: "",
      });
          
 
      
      };
      
    
    
    
    return(
        <div className="card-container">
            <center>
                <form  onSubmit={submitting} >
                    <h1>Register Form</h1>
                    <div className="hi">
                    <label>Username</label><br/>
                    <input type="text" name="name" value={name} onChange={changingg}/><br />

                    <label>Email</label><br/>
                    <input type="email" name="email" value={email} onChange={changingg}/><br />

                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={changingg}/><br />

                    <label>ConfirmPassword</label><br/>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={changingg}/><br />

                    <label>PhoneNumber</label><br></br>
                    <input type="number" name="phone" value={phone} onChange={changingg}/><br></br>

                    <input type="submit" value="Register"  style={{backgroundColor: "orange",marginTop: 15}}/><br></br>
                    
                    <label > Already have an Account: </label>
                    <Link className='Link' to='/login'>Login</Link>
                  
                 

                    
                    </div>
        
                </form>
            </center>
        </div>
    )
    }
    
    export default Register;




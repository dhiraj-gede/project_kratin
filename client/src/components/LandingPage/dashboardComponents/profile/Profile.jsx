import React from "react";
import './profile.css'
const Profile = () => {
  return (
    <div class="main" style= {{position: 'relative', left: '50%', top:'50%', transform:'translate(-50%, -50%)'}}>
      <div class="card" >
        <div class="card-body">
          <i class="fa fa-pen fa-xs edit"></i>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>: </td>
                <td>&nbsp;{localStorage.name.toUpperCase()}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>&nbsp;imdezcode@gmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td>&nbsp;Nagpur, India</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>:</td>
                <td>&nbsp;b+</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>&nbsp;23</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>:</td>
                <td>&nbsp;178</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>:</td>
                <td>&nbsp;58</td>
              </tr>
              <tr>
                <td>BMI</td>
                <td>:</td>
                <td>&nbsp;19</td>
              </tr>
              <tr>
                <td>Oxygen</td>
                <td>:</td>
                <td>&nbsp;93</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

     
    </div>
  );
};

export default Profile;

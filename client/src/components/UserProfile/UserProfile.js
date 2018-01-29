import React from "react";



const UserProfile = (props) =>{
  console.log(props.userInfo)
  return (
    
<div className="UserProfile"> 
    <div className="User">
        <div className="name">{props.userInfo.firstName}</div>
            <div className="image"><img src="https://media.giphy.com/media/xT0xeOz9FBhOaUvwWI/giphy.gif" alt="profile" /></div>
    </div>
</div>
  )
}

export default UserProfile;


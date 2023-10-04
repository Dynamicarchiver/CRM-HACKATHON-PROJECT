import { Navigate } from "react-router-dom";

const ProtectedRoute  = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  if(user.role === 'user' && 
    (
      children.type.name === "Members" ||
      children.type.name === "Attendance" ||
      children.type.name === "MembershipForm"

    )
  ){
    return <Navigate to="/" replace />;
  }

  return children;
};
export default ProtectedRoute ;
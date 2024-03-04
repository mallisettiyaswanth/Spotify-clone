import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAccess = ({ children }) => {
  const navigate = useNavigate();
  const access = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!access) navigate('/login');
  }, [access]);

  return children;
};
export default UserAccess;

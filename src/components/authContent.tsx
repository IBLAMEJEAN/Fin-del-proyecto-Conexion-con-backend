import useAuth from "../hooks/useAuth";

interface AuthContentProps {
  publicContent: React.ReactNode;
  privateContent?: React.ReactNode;
}

const AuthContent = ({ publicContent, privateContent }: AuthContentProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated && privateContent) {
    return <>{privateContent}</>;
  }

  return <>{publicContent}</>;
};

export default AuthContent;

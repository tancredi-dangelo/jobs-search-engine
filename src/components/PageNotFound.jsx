import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center">
      <h1 className="my-5">Page Not Found</h1>
      <Button
        variant="outline-primary bg-white border-0 text-primary shadow"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Homepage
      </Button>
    </div>
  );
};

export default PageNotFound;

import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { useNavigate } from "react-router-dom";

const FavoriteJobs = () => {
  const favoriteJobs = useSelector((state) => state.favoriteJobs);
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex align-items-center justify-content-center my-5">
            <h1 className="display-4 me-5">Your Favorite Job Offers</h1>
          </div>
          {favoriteJobs.length === 0 ? (
            <p className="text-center text-muted">No favorite jobs yet.</p>
          ) : (
            favoriteJobs.map((job) => <Job key={job._id} data={job} />)
          )}
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center my-5">
        <Col
          xs={3}
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            variant="outline-primary bg-white border-0 text-primary shadow"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteJobs;

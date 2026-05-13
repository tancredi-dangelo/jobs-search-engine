import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FavoriteCompanies = () => {
  const favoriteCompanies = useSelector((state) => state.favoriteCompanies);
  const favoriteJobs = useSelector((state) => state.favoriteJobs);
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col className="my-3z">
          <div className="d-flex align-items-center justify-content-center my-5">
            <h1 className="display-4 me-5">Your Favorite Companies</h1>
          </div>
          {favoriteCompanies.length === 0 ? (
            <p className="text-center text-muted">No favorite companies yet.</p>
          ) : (
            favoriteCompanies.map((company) => (
              <Row
                key={company}
                className="mx-0 mt-3 p-4 glass"
                style={{ border: "1px solid #00000033", borderRadius: "12px" }}
              >
                <Col className="d-flex align-items-center justify-content-between">
                  <Link
                    className="nav-link text-primary fw-semibold"
                    to={`/${company}`}
                  >
                    {company}
                  </Link>
                </Col>
              </Row>
            ))
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

export default FavoriteCompanies;

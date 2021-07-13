import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventPage from "../EventsPage/EventPage";
import getArtist from "../../redux/artist/actionCreator";

import { Input, Space, Spin } from "antd";
import { Card, Col, Row, Avatar } from "antd";

function LandingPage() {
  const { Search } = Input;
  const { Meta } = Card;

  const dispatch = useDispatch();

  const searchHandler = (artistName) => {
    dispatch(getArtist(artistName));
  };

  const artist = useSelector((state) => state.artist);

  const clickHandler = () => {};

  return (
    
    <div>
      <Row>
        <Col offset={8}>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={(value) => searchHandler(value)}
              enterButton
              style={{ width: 600, marginTop: 200 }}
            />
          </Space>
        </Col>
      </Row>

      {artist.fetched ? (
        <Row>
          <Col offset={10}>
            <Link to="/events">
              <Card
                hoverable
                onClick={() => console.log("card clicked")}
                style={{ width: 250, marginTop: 50, marginLeft: 50 }}
                cover={
                  <img
                    alt="Artist Not Found :("
                    src={artist.artist.image_url}
                  />
                }
              >
                <p onClick={() => console.log("clicked p")}>
                  {artist.artist.facebook_page_url}
                </p>
                <Meta
                  title={artist.artist.name}
                  // description={artist.artist.facebook_page_url}
                />
              </Card>
            </Link>
          </Col>
        </Row>
      ) : artist.isFetching ? (
        <Row>
          <Col offset={12}>
            <div className="spinner" style={{ marginTop: 40 }}>
              <Spin />
            </div>
          </Col>
        </Row>
      ) : null}
    </div>
  );
}
export default LandingPage;

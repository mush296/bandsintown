import React, { useEffect, useState } from "react";
import { Card, Row, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import getEvents from '../../redux/event/actionCreator';
import moment from 'moment';


function EventPage() {
  const artist = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getEvents(artist.artist.name));
  }, []);
  
  const events = useSelector((state)=> state.events);

   return(

    events.fetched?(
      events.events.map(event => {
        return(
            <Col span = {6}>
            <div className="site-card-border-less-wrapper">
      <Card title={event.title} bordered={false} style={{ width: 300 }}>
        <p>VENUE: {event.venue.city}, {event.venue.country}</p>
        <p>DATE: {moment(event.datetime).format('MMMM Do YYYY')}</p>
      </Card>
    </div>
            </Col>
          
        )
      }
      )
    ): null
   ) 
    
    
    
}

export default EventPage;

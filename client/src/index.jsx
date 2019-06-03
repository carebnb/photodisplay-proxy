import React from 'react';
import ReactDOM from 'react-dom';
import PhotoDisplay from '../../Services/photodisplay-module/client/src/Components/App';
import BookingPortal from '../../Services/booking-portal-module/client/src/bookingPortal';
import ListingInfo from '../../Services/listinginfo-module/client/src/components/app';
// import Reviews from '../../Services/Review-module/client/src/component/App';

ReactDOM.render(<PhotoDisplay />, document.getElementById('photoDisplay'));
ReactDOM.render(<BookingPortal />, document.getElementById('bookingPortal'));
ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
// ReactDOM.render(<Reviews />, document.getElementById('reviews'));

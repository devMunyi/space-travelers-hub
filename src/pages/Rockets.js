import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  bookedRocket,
  cancelledRocket,
} from '../Redux/actions/rockets';

const Rockets = () => {
  // set dispatch
  const dispatch = useDispatch();

  // fetch rockets on page mount
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  // retrieve rockets from store for rendering
  const rockets = useSelector((state) => state.rockets);

  // book rocket
  const bookRocket = (id) => dispatch(bookedRocket(id));

  // cancel rocket book
  const cancelRocket = (id) => dispatch(cancelledRocket(id));

  return (
    <div className="container pt-2 pb-5">
      {rockets &&
        rockets.map((rocket) => (
          <div key={rocket.id} className="row mb-4">
            <div className="col-md-3">
              <img
                className="img-fluid"
                src={rocket.flickr_images[0]}
                alt={rocket.rocket_name}
              />
            </div>
            <div className="col-md-9">
              <h5>{rocket.rocket_name} </h5>
              <p>
                {' '}
                {rocket.reserved && (
                  <span className="badge bg-success">Reserved</span>
                )}{' '}
                {rocket.description}
              </p>{' '}
              {rocket.reserved && (
                <button
                  onClick={() => cancelRocket(rocket.id)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Cancel Reservation
                </button>
              )}
              {!rocket.reserved && (
                <button
                  onClick={() => bookRocket(rocket.id)}
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rockets;

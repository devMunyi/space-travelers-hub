import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/actions/rockets';
import { fetchMissions } from '../redux/mission/missions';

const Profile = () => {
  // set dispatch
  const dispatch = useDispatch();

  // fetch rockets on page mount
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  // fetch missions on page mount
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  // retrieve rockets from store for rendering
  const rockets = useSelector((state) => state.rockets);

  // retrieve missions from store for rendering
  const missions = useSelector((state) => state.missions);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">My Missions</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
              {/* <tr>
                <td>Mark</td>
              </tr>
              <tr>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>the Bird</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">My Rockets</th>
              </tr>
            </thead>
            <tbody>
              {rockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

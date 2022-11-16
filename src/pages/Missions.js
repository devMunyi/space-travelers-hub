import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  bookedMission,
  cancelledMission,
} from '../redux/mission/missions';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missions);

  const handleBookMission = (id) => {
    dispatch(bookedMission(id));
  };

  const handleCancelMission = (id) => {
    dispatch(cancelledMission(id));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>
              {mission.description.slice(0, 200)}
              ...
            </td>
            <td>
              <p
                style={{
                  background: mission.reserved ? 'blue' : 'gray',
                  color: mission.reserved ? 'white' : 'white',
                }}
                className="active rounded p-2"
              >
                {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
              </p>
            </td>
            <td>
              {mission.reserved && (
                <button
                  style={{ border: 'red 1px solid', color: 'red' }}
                  onClick={() => handleCancelMission(mission.mission_id)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary rounded p-2"
                >
                  Leave mission
                </button>
              )}
              {!mission.reserved && (
                <button
                  onClick={() => handleBookMission(mission.mission_id)}
                  type="button"
                  className="btn btn-sm btn-primary rounded p-2"
                >
                  Join mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;

import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { bookedMission, cancelledMission } from '../redux/mission/missions';

const Missions = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions);

  const handleBookMission = (id) => {
    dispatch(bookedMission(id));
  };

  const handleCancelMission = (id) => {
    dispatch(cancelledMission(id));
  };

  return (
    <Table className="container" striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
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
              {mission.reserved && (
                <span className="badge bg-success p-2">Active Member</span>
              )}
              {!mission.reserved && (
                <span className="badge bg-secondary p-2">NOT A MEMBER</span>
              )}
            </td>
            <td style={{ width: '130px' }}>
              {mission.reserved && (
                <button
                  onClick={() => handleCancelMission(mission.mission_id)}
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                >
                  Leave mission
                </button>
              )}
              {!mission.reserved && (
                <button
                  onClick={() => handleBookMission(mission.mission_id)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
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

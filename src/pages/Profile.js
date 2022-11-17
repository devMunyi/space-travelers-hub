import { useSelector } from 'react-redux';

const Profile = () => {
  // retrieve rockets from store for rendering
  let rockets = useSelector((state) => state.rockets);
  rockets = rockets.filter((rocket) => rocket.reserved === true);

  // retrieve missions from store for rendering
  let missions = useSelector((state) => state.missions);
  missions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr key="th1">
                <th scope="col">My Missions</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr key="th2">
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

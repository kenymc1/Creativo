import React from 'react';
import PropTypes from 'prop-types';

import './DashBoard.scss';

class DashBoard extends React.Component {
  // state = {
  //   players: [],
  //   formOpen: false,
  //   editPlayer: {},
  // }

  // getAllPlayers = () => {
  //   playersData.getPlayersByUid(authData.getUid())
  //     .then((players) => this.setState({ players }))
  //     .catch((err) => console.error('cant get players: ', err));
  // }

  // componentDidMount() {
  //   this.getAllPlayers();
  // }

  // removePlayer = (playerId) => {
  //   console.log('player', playerId);
  //   playersData.deletePlayer(playerId).then(() => this.getAllPlayers())
  //     .catch((err) => console.error('unable to delete board', err));
  // }

  // saveNewPlayer = (newPlayer) => {
  //   playersData.savePlayer(newPlayer)
  //     .then(() => {
  //       this.getAllPlayers();
  //       this.setState({ formOpen: false });
  //     })
  //     .catch((err) => console.error('unable to save player: ', err));
  // }

  // putPlayer = (playerId, updatePlayer) => {
  //   playersData.updatePlayer(playerId, updatePlayer)
  //     .then(() => {
  //       this.getAllPlayers();
  //       this.setState({ formOpen: false, editPlayer: {} });
  //     })
  //     .catch((err) => console.error('unable to update player:', err));
  // }

  // editPlayer = (player) => {
  //   this.setState({ formOpen: true, editPlayer: player });
  // }

  render() {
    // const { formOpen } = this.state;
    // const { players } = this.state;
    // const { editPlayer } = this.state;
    // const makePlayers = players.map((player) => <Player key={player.id} editPlayer={this.editPlayer} player={player} removePlayer={this.removePlayer} />);
    return (

      <div className="DashBoard">

        <h1 className="teamName text-white mt-3 mb-3">The best App in the world</h1><button className="btn btn-warning" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i></button>
        {/* {formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer} player={editPlayer} putPlayer={this.putPlayer} /> : ''} */}

        <div className="d-flex flex-wrap">
          {/* {makePlayers} */}
          <hi>test</hi>
        </div>
      </div>
    );
  }
}
export default DashBoard;

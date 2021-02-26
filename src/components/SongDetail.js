import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  console.table(song);
  return (
    <div>
      { !song && 'Select A Song!'}
      { song?.title } { song?.duration }
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);
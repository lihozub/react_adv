import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from 'components/UserItem';
// import PeopleSearch from 'components/PeopleSearch';

class PeopleList extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="people-list" id="people-list">
        {/*<PeopleSearch />*/}
        <ul class="list">
          {this.props.people.map(u => {
            return (
              <UserItem key={u.id} userName={u.userName} />
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peopleReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { studentsListData } from '../../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
  componentWillMount() {
    this.props.studentsListData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ studentsArray }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(studentsArray);
  }

  renderRow(student) {
    return <ListItem student={student} />;
  }

  render() {
    console.log(this.props.studentsArray);
    return (
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
    )
  }
}

const mapStateToProps = ({ studentDataResponse }) => {
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
    return { ...val, uid };
  });
  return { studentsArray };
};

export default connect(mapStateToProps, { studentsListData })(StudentsList);
import React from 'react';
import {connect} from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>
          Edit a Stream
        </h3>
        <StreamForm 
          initialValues={_.pick(this.props.stream, 'title', 'description')} 
          onSubmit={(formValues) => this.props.editStream(this.props.match.params.id, formValues)} 
        />
      </div>
    );
  }
};
const mapStateToProps = (state, {match: {params: {id}}}) => {
  return {stream: state.streams[id]}
}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
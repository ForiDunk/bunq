import React from 'react';
import { connect } from 'react-redux';
import { getComments, getConversationDetails } from '../actions';
import Comment from './Comment';

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments(6, 1);
    this.props.getConversationDetails(6);
  }

  render() {
    const { comments } = this.props;

    const commentList = comments.map(comment => (
      <div key={comment.id} className="comment">
        <Comment comment={comment} />
      </div>
    ));

    if(this.props.comments.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui comments">
        {commentList}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { getComments, getConversationDetails })(Comments);
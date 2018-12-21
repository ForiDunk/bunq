import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';
import Comment from './Comment';

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments(1, 1);
  }

  render() {
    const { comments } = this.props;
    console.log(comments);

    const commentList = comments.map(comment => (
      <div key={comment.id} className="comment">
        <Comment />
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

export default connect(mapStateToProps, { getComments })(Comments);
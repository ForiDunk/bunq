import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions';

class Comments extends React.Component {
  componentDidMount() {
    this.props.getComments(1, 1);
  }

  render() {
    const { comments } = this.props;
    console.log(comments);

    if(this.props.comments.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="ui comments">
        <div className="comment">
          <div className="content">
            <div className="author">{comments[0].senderId}</div>
            <div className="metadata">
              <span className="date">{comments[0].timestamp}</span>
            </div>
            <div className="text">
            {comments[0].message}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { getComments })(Comments);
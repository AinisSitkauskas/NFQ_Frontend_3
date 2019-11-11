import React from 'react';
import {setLike, unLike} from "../actions";
import {connect} from "react-redux";

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            showDescription: true,
        };
    }

    render() {
        const {showDescription} = this.state;
        const {movieId, title, backgroundImage, date, rating, votes, description} = this.props;
        const isLiked = this.props.hearted.includes(movieId);
        let like;
        isLiked ? (like = 'fa fa-heart') : (like = 'fa fa-heart-o');
        return (
            <div className="card">
                <div
                    className="card__image"
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}/>

                <div className="card__title">
                    {title}
                </div>

                <div className="card__like">

                    <i className={like}
                       onClick={() => {
                           isLiked ? this.props.onDislikeMovie(movieId) : this.props.onLikeMovie(movieId)
                       }}/>
                </div>

                <div className="card__subtitle">
                    <span>{date}</span>
                    <span>{rating} ({votes} votes)</span>
                </div>

                <div className="card-info">
                    <div className="card-info__header">Summary</div>
                    <button onClick={() => {
                        this.setState({showDescription: !showDescription})
                    }}>Toggle
                    </button>
                    <div className="card-info__description">
                        {showDescription ? description : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    hearted: state.hearted.movies
});

const mapDispatchToProps = (dispatch) => ({
    onLikeMovie: movieId => dispatch(setLike(movieId)),
    onDislikeMovie: movieId => dispatch(unLike(movieId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Card);
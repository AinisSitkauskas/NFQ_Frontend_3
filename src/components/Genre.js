import React from 'react';
import {getGenreMovies} from "../thunks";
import {connect} from "react-redux";


 class Genre extends React.Component {



    render() {
        const {name, id} = this.props;
        return (
            <button className="name" onClick={() => this.props.onGenreMovies(id)}> {name}</button>
        );
    }

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    onGenreMovies: id => dispatch(getGenreMovies(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Genre);
import React from 'react';
import {connect} from 'react-redux';
import {toggleCards} from '../actions';
import {getGenres, getMostPopularMovies} from '../thunks';
import Card from './Card';
import Genre from './Genre';
import {getImageUrl} from '../config';

class App extends React.Component {
    componentDidMount() {
        this.props.onGetMostPopularMovies();
        this.props.onGetGenres();
    }

    render() {
        return (
            <div className="container">
                <header>
                    <div>
                        {this.props.genresList.map((genres) => (
                            <Genre
                                key={genres.id}
                                name={genres.name}
                                id={genres.id}
                            />
                        ))}
                    </div>
                    <br></br>
                    <button
                        style={{display: 'block', margin: '0 auto'}}
                        onClick={() => this.props.onToggleCards(!this.props.showCards)}
                    >
                        Hide movies
                    </button>
                </header>

                {this.props.showCards
                    ? (
                        <div className="cards">
                            {this.props.mostPopularMovies.map((card) => (
                                <Card
                                    key={card.id}
                                    movieId={card.id}
                                    backgroundImage={getImageUrl(card.backdrop_path)}
                                    date={card.release_date}
                                    rating={card.vote_average}
                                    votes={card.vote_count}
                                    description={card.overview}
                                    title={card.original_title}
                                />
                            ))}
                        </div>
                    )
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showCards: state.componentState.showCards,
    mostPopularMovies: state.cards.mostPopular,
    genresList: state.genres.genresList,
});
const mapDispatchToProps = (dispatch) => ({
    onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
    onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
    onGetGenres: () => dispatch(getGenres()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

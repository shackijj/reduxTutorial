import React from "react";
import { connect } from 'react-redux';
import Link from './Link';

const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active: (ownProps.filter === state.visibilityFilter)
    }; 
}

const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
        })
    };
};

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

export default FilterLink;

/*
export default class FilterLink extends React.Component {

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const { store } = this.context;
        const state = store.getState();

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() => store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );
    }
}
FilterLink.contextTypes = {
    store: React.PropTypes.object
};
*/
import { connect } from 'react-redux'
import FilterLink from '../../components/todo/FilterLink';
import { setVisibilityFilter } from '../../actions/todo';

export default connect(
  (state, ownProps) => ({
    active: (ownProps.filter === state.visibilityFilter)
  }),
  (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
)(FilterLink)
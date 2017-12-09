import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SearchField from './SearchField';

const styles = theme => ({
    searchField: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
});

class SearchDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.isOpen,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ open: nextProps.isOpen });
    }

    render = () => {
        return (
            <Drawer
                anchor="bottom"
                onRequestClose={this.handleRequestClose}
                open={this.state.open}
                type="persistent"
            >
                <div className={this.props.classes.searchField}>
                    <SearchField onChange={this.props.onSearch} />
                </div>
            </Drawer>
        );
    };
}

SearchDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchDrawer);
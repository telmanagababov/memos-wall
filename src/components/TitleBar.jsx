import React from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from "material-ui/RaisedButton";
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import {locale, MessageKey} from "../util/Locale";

class TitleBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpened: false,
            valueSingle: "3"
        };
    }

    handleOpenMenu = () => {
        this.setState({
            isMenuOpened: true,
        });
    };

    handleOnRequestChange = (value) => {
        this.setState({
            openMenu: value,
        });
    };

    handleChangeSingle = (event, value) => {
        console.log("handlevaluesingle", event, value);
        this.setState({
            valueSingle: value,
        });
    };

    render() {
        return <Paper>
            <AppBar title={locale.t(MessageKey.app.TITLE)}
                    showMenuIconButton={false}
                    iconElementRight={
                        <IconMenu
                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                onChange={this.handleChangeSingle}
                                value={this.state.valueSingle}>
                            <MenuItem value="1" primaryText="Refresh" />
                            <MenuItem value="2" primaryText="Send feedback" />
                            <MenuItem value="3" primaryText="Settings" />
                            <MenuItem value="4" primaryText="Help" />
                            <MenuItem value="5" primaryText="Sign out" />
                        </IconMenu>
                    }/>
        </Paper>
    };
}

export default TitleBar;
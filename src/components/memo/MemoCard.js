import React, {PropTypes} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {removeMemo} from "../../actions/MemoActions"
import store from "../../store/Store";
import CardContentFactory from "./CardContentFactory";

const contentFactory = new CardContentFactory();

class MemoCard extends React.Component {
    constructor(props) {
        super(props);
        var messages = store.getState().locale.messages;
        this.state = {
            moreLabel: messages.memo.MORE,
            removeLabel: messages.memo.REMOVE
        };
        this.onRemove = this.onRemove.bind(this);
        this.unsubscribe = null;
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            var messages = store.getState().locale.messages;
            this.setState({
                moreLabel: messages.memo.MORE,
                removeLabel: messages.memo.REMOVE
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onRemove() {
        store.dispatch(removeMemo(this.props.id));
    }

    render() {
        return <Card className="card">
            <CardHeader className="card-header" title={this.props.title}/>
            <CardMedia>
                {contentFactory.getCardMedia(this.props.url)}
            </CardMedia>
            <CardText className="card-info">
                {contentFactory.getCardInfo(this.props.info, this.props.url)}
            </CardText>
            <CardActions className="card-actions-panel">
                <FlatButton label={this.state.moreLabel} href={contentFactory.getHref(this.props.url)} disabled={this.props.url === ""}/>
                <FlatButton label={this.state.removeLabel} onTouchTap={this.onRemove}/>
            </CardActions>
        </Card>
    }
}

MemoCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
};

export default MemoCard;
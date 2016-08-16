import React, {PropTypes} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {removeMemo} from "../../actions/MemoActions"
import store from "../../store/Store";

const GET_PREVIEW_WEBSITE_PATTERN = "{website}",
    GET_PREVIEW_SIZE = "m",
    GET_PREVIEW_SERVICE = "http://free.pagepeeker.com/v2/thumbs.php",
    GET_PREVIEW_IMAGE_API = GET_PREVIEW_SERVICE + "?size=" + GET_PREVIEW_SIZE + "&url=" + GET_PREVIEW_WEBSITE_PATTERN;

const getPreviewURL = function(url) {
    return GET_PREVIEW_IMAGE_API.replace(GET_PREVIEW_WEBSITE_PATTERN, url);
};

const getHref = function (url) {
    return url.indexOf("http://") === 0 || url.indexOf("https://") === 0 ?
        url :
        "//" + url;
};

const getCardMedia = function (url) {
    return url ?
        <a href={getHref(url)}>
            <img className="card-preview" src={getPreviewURL(url)} />
        </a> :
        <div></div>;
};

const getCardInfo = function (info, url) {
    var infoParts = info.split(url);
    return url ?
        <div>{infoParts[0]}<a href={getHref(url)}>{url}</a>{infoParts[1]}</div> :
        info;
};

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
                {getCardMedia(this.props.url)}
            </CardMedia>
            <CardText className="card-info">
                {getCardInfo(this.props.info, this.props.url)}
            </CardText>
            <CardActions className="card-actions-panel">
                <FlatButton label={this.state.moreLabel} href={getHref(this.props.url)} disabled={this.props.url === ""}/>
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
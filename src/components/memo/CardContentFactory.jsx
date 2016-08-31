import React from "react";
import CircularProgress from "material-ui/CircularProgress";
import store from "../../store/Store";
import { updateMemos } from "../../actions/MemoActions";

const IMAGE_URL_REGEX = /\.(gif|jpg|jpeg|tiff|png)$/i,
    YOUTUBE_URL_REGEX = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/,
    YOUTUBE_ID_REGEX = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/,
    YOUTUBE_VIDEO_WIDTH = 400,
    YOUTUBE_VIDEO_HEIGHT = 300,
    YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/";

var cache = {};

const getYoutubeId = function(url) {
    return url.match(YOUTUBE_ID_REGEX)[1];
};

const getYoutubeURL = function(url) {
    var embedId = getYoutubeId(url);
    return YOUTUBE_EMBED_URL + embedId;
};

const isYoutubeURL = function(url) {
    return url.match(YOUTUBE_URL_REGEX) !== null;
};

const isImageURL = function(url) {
    return url.match(IMAGE_URL_REGEX) !== null;
};

const loadPreview = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            var blob = this.response;
            cache[url] = window.URL.createObjectURL(blob);
            store.dispatch(updateMemos());
        }
    };
    xhr.open ("GET", "http://localhost:9090" +
            "?url=" + url +
            "&width=400&height=300" +
            "&clipRect=0%2C0%2C400%2C300", true);
    xhr.responseType = "blob";
    xhr.send ();
};

class CardContentFactory {

    getCardMedia (url) {
        if(!url) {
            return <div></div>
        } else if(isYoutubeURL(url)) {
            return <iframe width={YOUTUBE_VIDEO_WIDTH} height={YOUTUBE_VIDEO_HEIGHT}
                           src={getYoutubeURL(url)} frameBorder="0" allowFullScreen>
            </iframe>;
        } else if(isImageURL(url)) {
            return  <a className="card-preview" href={this.getHref(url)}>
                <img src={this.getHref(url)} />
            </a>;
        } else if(cache[url]) {
            return <a className="card-preview" href={this.getHref(url)}>
                <img src={cache[url]} />
            </a>;
        } else {
            loadPreview(url);
            return <a className="card-preview" href={this.getHref(url)}>
                <CircularProgress className="preloader" size={1.5}/>
            </a>;
        }
    }

    getCardInfo (info, url) {
        var infoParts = info.split(url);
        return url ?
            <div>{infoParts[0]}<a href={this.getHref(url)}>{url}</a>{infoParts[1]}</div> :
            info;
    }

    getHref (url) {
        return url.indexOf("http://") === 0 || url.indexOf("https://") === 0 ?
            url :
        "//" + url;
    };
}

export default CardContentFactory;
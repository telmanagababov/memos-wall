import React from "react";

const GET_PREVIEW_WEBSITE_PATTERN = "{website}",
    GET_PREVIEW_SIZE = "m",
    GET_PREVIEW_SERVICE = "http://free.pagepeeker.com/v2/thumbs.php",
    GET_PREVIEW_IMAGE_API = GET_PREVIEW_SERVICE + "?size=" + GET_PREVIEW_SIZE + "&url=" + GET_PREVIEW_WEBSITE_PATTERN,
    YOUTUBE_URL_REGEX = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/,
    YOUTUBE_ID_REGEX = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/,
    YOUTUBE_VIDEO_WIDTH = 400,
    YOUTUBE_VIDEO_HEIGHT = 300,
    YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/";

const getPreviewURL = function(url) {
    return GET_PREVIEW_IMAGE_API.replace(GET_PREVIEW_WEBSITE_PATTERN, url);
};

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

class CardContentFactory {

    getCardMedia (url) {
        if(!url) {
            return <div></div>
        } else if(isYoutubeURL(url)) {
            return <iframe width={YOUTUBE_VIDEO_WIDTH} height={YOUTUBE_VIDEO_HEIGHT}
                           src={getYoutubeURL(url)} frameBorder="0" allowFullScreen>
            </iframe>;
        } else {
            return  <a href={this.getHref(url)}>
                <img className="card-preview" src={getPreviewURL(url)} />
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
import React from 'react';
import './Widgets.css';
import {
    TwitterTweetEmbed,
    TwitterTimelineEmbed,
} from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="search twitter" type="text"/>
            </div>

            <div className="widgets_widgetContainer">
                <h3>What's happening</h3>
                <TwitterTweetEmbed tweetId={"1321917221648683008"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ritikninja28109"
                    options={{height:200}}
                    />
            </div>
            
        </div>
    )
}

export default Widgets;
import { VerifiedUser } from '@material-ui/icons';

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



import {Avatar} from '@material-ui/core';
import React from 'react';
import './Post.css';
function Post({displayName, userName, varified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src=""/>
            </div>
            <div className="post_body">
             
          
            <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            ritik kumar{""}
                    
                        <span>
                            <VerifiedUser className="post_badge"/>
                        </span>
                        <span>@ritikumar</span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>i im ritik an im the software engineer </p>
                    </div>
                    
            </div>
            <img src="" alt=""/>
            <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
            </div>
            </div>
         </div>
    )
}

export default Post;
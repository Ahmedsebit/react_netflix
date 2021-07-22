import React from 'react'
import "./featured.scss"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function Featured({type}) {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movie" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option value="Adventure">Adventure</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                )
            }
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
                <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non feugiat metus. Nulla facilisis convallis facilisis. Nam fringilla urna augue, eu vulputate nibh ultricies vitae. Nulla ullamcorper sed urna id venenatis. Quisque at quam quam. Sed suscipit a sapien vitae aliquam. Nulla sit amet bibendum elit. Proin consequat venenatis congue. Sed arcu tellus, tincidunt id augue dapibus, varius vulputate turpis. Ut dictum augue a tortor commodo sagittis. Mauris blandit et justo quis auctor
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon/>
                        <span>More Infomation</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

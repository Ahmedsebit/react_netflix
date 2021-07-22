import {React,useRef,useState} from 'react'
import './list.scss'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ListItem  from "../listitem/ListItem.jsx"

export default function List() {
    const [slideNumber,setSlideNumber] = useState(0);
    const [isMoved,setIsMoved] = useState(false);
    const listRef = useRef()
    const handleClick=(direction)=>{
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0){
            setIsMoved(true)
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if (direction === "right" && slideNumber < 5){
            setIsMoved(true)
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${distance-230}px)`
        }
    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className="sliderArrow left" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

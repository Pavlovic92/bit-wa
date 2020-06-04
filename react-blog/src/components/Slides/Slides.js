//////////// VERZIJA 1: ///////////////////
import React from 'react';
import { Post } from '../Posts/Post';
import './Slides.css';

const Slides = () => {
    const slidesData = [
        {
            title: "BIT 001",
            description: "Some random text."
        },
        {
            title: "BIT 002",
            description: "Some random text."
        },
        {
            title: "BIT 003",
            description: "Some random text."
        },
        {
            title: "BIT 004",
            description: "Some random text."
        },
        {
            title: "BIT 005",
            description: "Some random text."
        },
        {
            title: "BIT 006",
            description: "Some random text."
        }
    ];

    return (
        <ul className=" Slides__list">
            {slidesData.map(item => <Post name={item.title} text={item.description} />)}


        </ul>
    )
}

export { Slides }







// Class
//      class ClassroomList extends React.Component {
//          renderListItem(classroom, i) {
//              return React.createElement('li', {key: i}, classroom)
//          }

//          render() {
// return React.createElement(
//     'ul', null, this.props.
// )
//          }

//      }
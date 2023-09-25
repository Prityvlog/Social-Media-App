import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Amita Gupta",
      img: "https://images.pexels.com/photos/18354585/pexels-photo-18354585/free-photo-of-portrait-of-girl-in-traditional-clothing-and-with-flowers-bouquet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Anu Tiwari",
      img: "https://images.pexels.com/photos/18272643/pexels-photo-18272643/free-photo-of-woman-in-hat-and-sundress-standing-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Shiva Yadav",
      img: "https://images.pexels.com/photos/18357986/pexels-photo-18357986/free-photo-of-woman-wearing-a-hat-and-a-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Anita",
      img: "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={"https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
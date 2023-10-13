import { Properties } from "./Interface";
import KatieZaferes from "../images/user pictures/katie-zaferes.png";
import WeddingPictures from "../images/user pictures/wedding-photography.png";
import MountainBike from "../images/user pictures/mountain-bike.png";

export const userData: Properties[] = [
    {
        image: `${KatieZaferes}`,
        rating: "5.0",
        comments: 6,
        location: "USA",
        title: "Life lessons with Katie Zaferes",
        price: 136,
        isAvailable: false,
        isOnline: false,
    },
    {
        image: `${WeddingPictures}`,
        rating: "5.0",
        comments: 30,
        location: "USA",
        title: "Learn wedding photography",
        price: 125,
        isAvailable: true,
        isOnline: true,
    },
    {
        image: `${MountainBike}`,
        rating: "4.8",
        comments: 6,
        location: "USA",
        title: "Group Mountain Biking",
        price: 50,
        isAvailable: true,
        isOnline: false,
    }
]
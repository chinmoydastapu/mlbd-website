import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxBannerComponent from "../parallax-banner/ParallaxBannerComponent";
import TeamMembers from "./TeamMembers";

const teamMembers = [
    {
        id: "642c155b2c4774f01",
        nameStaff: "Md Minhajul Islam Ishrak",
        roleStaff: "Project Management",
        imageStaff: "https://i.ibb.co.com/y5HWCCZ/1725985041572.jpg",
    },
    {
        id: "642c155b2c4774f02",
        nameStaff: "Jafor Sadek Ayon",
        roleStaff: "Content Production",
        imageStaff: "https://i.ibb.co.com/s6Pg00Z/Jafor-Sadek-Ayon.jpg",
    },
    {
        id: "642c155b2c4774f03",
        nameStaff: "Pushpit Rastogi",
        roleStaff: "Marketing Manager",
        imageStaff: "https://i.ibb.co.com/SBM8Y4r/Reinhardt.jpg",
    },
    {
        id: "642c155b2c4774f04",
        nameStaff: "Vanitas Raizel",
        roleStaff: "Project Management",
        imageStaff: "https://i.ibb.co.com/y5HWCCZ/1725985041572.jpg",
    },
    {
        id: "642c155b2c4774f05",
        nameStaff: "Vertifix Jafor",
        roleStaff: "Content Production",
        imageStaff: "https://i.ibb.co.com/s6Pg00Z/Jafor-Sadek-Ayon.jpg",
    },
    {
        id: "642c155b2c4774f06",
        nameStaff: "Mushushi",
        roleStaff: "Marketing Manager",
        imageStaff: "https://i.ibb.co.com/SBM8Y4r/Reinhardt.jpg",
    },
];

const AboutUs = () => {
    return (
        <ParallaxProvider>
            <ParallaxBannerComponent
                backgroundImage="https://images7.alphacoders.com/116/1167752.jpg"
                title="About Us"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo necessitatibus ducimus dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi!"
            />

            <TeamMembers teamMembers={teamMembers} />
        </ParallaxProvider>
    );
};

export default AboutUs;
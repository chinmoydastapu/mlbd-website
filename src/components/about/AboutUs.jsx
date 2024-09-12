import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxBannerComponent from "../parallax-banner/ParallaxBannerComponent";

const AboutUs = () => {
    return (
        <ParallaxProvider>
            <ParallaxBannerComponent
                backgroundImage="https://images7.alphacoders.com/116/1167752.jpg"
                title="About"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo necessitatibus ducimus dolores facere adipisci quos pariatur perferendis omnis fuga quis, unde vero. At aliquam repudiandae quaerat, quisquam quia animi!"
            />

            <section className="bg-white py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
                </div>
            </section>
        </ParallaxProvider>
    );
};

export default AboutUs;
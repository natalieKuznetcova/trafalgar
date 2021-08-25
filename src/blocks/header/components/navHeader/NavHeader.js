import { NavItem} from "../navItem/NavItem";
import { Flex } from "../../../../styled-component/flex";


export const NavHeader = () => {
    const navItems = [
        {
            name: "Home",
            link: "#home"
        },
        {
            name: "Find a doctor",
            link: "#find_a_doctor"
        },
        {
            name: "Apps",
            link: "#apps"
        },
        {
            name: "Testimonials",
            link: "#testimonials"
        },
        {
            name: "About us",
            link: "#about_us"
        }
    ];

    const navItemsName = navItems.map(el => (<NavItem name={el.name} link={el.link} key={el.name}/>));

    return (
        <Flex>
            { navItemsName }
        </Flex>
    );
};

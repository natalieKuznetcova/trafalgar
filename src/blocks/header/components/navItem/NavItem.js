import { StyledLink } from "./NavItem.styled";


export const NavItem = (props) => {
    return (
        <StyledLink href={props.link}>
            {props.name}
        </StyledLink>
    );
}

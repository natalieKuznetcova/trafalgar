import { NavHeader } from "./components/navHeader/NavHeader";
import { Logo } from "./components/logo/Logo";
import { Flex } from "../../styled-component/flex";
import styled from "styled-components";

const FlexStyled = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
    return (
        <FlexStyled className="mt-3">
            <Logo />
            <NavHeader />
        </FlexStyled>
    );
}

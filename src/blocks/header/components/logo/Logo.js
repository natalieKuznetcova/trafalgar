import { ReactComponent as LogoImg } from "../../../../assets/images/logo/logo.svg"
import { Flex } from "../../../../styled-component/flex";
import styled from "styled-components";
import { LogoText } from "./logo.styled";

const FlexStyled = styled(Flex)`
    align-items: center;
`;

export const Logo = () => {
    return (
        <FlexStyled>
            <LogoImg />
            <LogoText>Trafalgar</LogoText>
        </FlexStyled>
    );
}

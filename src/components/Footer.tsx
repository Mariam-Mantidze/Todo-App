import styled from "styled-components";

export default function Footer() {
  return <FooterContainer>Drag and drop to reorder list</FooterContainer>;
}

const FooterContainer = styled.footer`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.1944444477558136px;
  text-align: center;
  color: ${(props) => props.theme.summaryTextColor};
  margin-top: 40px;
`;

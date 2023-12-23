import { paletteColors } from "@/styles/colors";
import { LinkStyled, ContactContainer } from "@/styles/main";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillFileText,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
const ContactComponent = () => {
  return (
    <ContactContainer>
      <LinkStyled
        rel="noreferrer"
        target="_blank"
        href="https://github.com/AndresLLogares"
      >
        <AiOutlineGithub size={25} color={paletteColors.black} />
      </LinkStyled>
      <LinkStyled
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/andr%C3%A9s-luis-logares-522595172/"
      >
        <AiFillLinkedin size={25} color={paletteColors.black} />
      </LinkStyled>
      <LinkStyled href={"/Resume.pdf"} download>
        <AiFillFileText size={25} color={paletteColors.black} />
      </LinkStyled>
      <LinkStyled
        rel="noreferrer"
        target="_blank"
        href="https://wa.me/5491136005563"
      >
        <AiOutlineWhatsApp size={25} color={paletteColors.black} />
      </LinkStyled>
      <LinkStyled
        rel="noreferrer"
        target="_blank"
        href="mailto:andresl940@hotmail.com"
      >
        <AiOutlineMail size={25} color={paletteColors.black} />
      </LinkStyled>
    </ContactContainer>
  );
};

export default ContactComponent;

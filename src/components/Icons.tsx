import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { HStack, IconButton, Link } from "@chakra-ui/react";

interface Props {
  gap: number;
}

const Icons = ({ gap }: Props) => {
  return (
    <HStack gap={gap} flexWrap={"wrap"}>
      <Link href="tel:+4917662948021">
        <IconButton
          bgColor="#007f80"
          aria-label="Call"
          size="lg"
          icon={<FaPhoneAlt />}
        />
      </Link>
      <Link href="mailto:raederdienst@gmail.com">
        <IconButton
          bgColor="#007f80"
          aria-label="Email"
          size="lg"
          icon={<IoMailSharp />}
        />
      </Link>
      <Link href="https://wa.me/+4917662948021" target="_blank">
        <IconButton
          bgColor="#25D366"
          aria-label="Whatsapp"
          size="lg"
          icon={<IoLogoWhatsapp />}
        />
      </Link>
      <Link href="https://t.me/raederdienst" target="_blank">
        <IconButton
          bgColor="#24A1DE"
          aria-label="Telegram"
          size="lg"
          icon={<BiLogoTelegram />}
        />
      </Link>
    </HStack>
  );
};

export default Icons;

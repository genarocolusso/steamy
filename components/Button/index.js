import { Flex, Text, Button } from "@chakra-ui/react";
import {
    AiOutlinePlayCircle,
  AiOutlineCloudDownload,
  AiFillCreditCard,
} from "react-icons/ai";
const ButtonC = (props) => {
  const iconButtonAction = (fontSize) =>
    props.isPlayable ? (
      <AiOutlinePlayCircle fontSize={fontSize} />
    ) : props.isBuy ? (
      <AiFillCreditCard fontSize={fontSize} />
    ) : (
      <AiOutlineCloudDownload fontSize={fontSize} />
    );

  return (
    <Flex
      as="Button"
      boxShadow={"md"}
      alignItems={"center"}
      justifyContent={"space-around"}
      maxW="140px"
      borderRadius={20}
      py={3}
      px={4}
      color={"white"}
      fontWeight={"bold"}
      bg={props.isPlayable ? "linear-gradient(1deg, #a33fff, #810dff)" : "#000000"}
    >
      {iconButtonAction(20)}
      <Text>{props.title} </Text>
    </Flex>
  );
};

export default ButtonC;

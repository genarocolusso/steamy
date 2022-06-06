import { Box, Flex, GridItem, Text } from "@chakra-ui/react";
import { AiFillPlayCircle, AiOutlineCloudDownload } from "react-icons/ai";
import ButtonC from './../Button/index';
export const GameGridItem = (props) => {
  const fontSize = props.mainGrid ? 48 : 32;
  
  const buttonTitle = props.isPlayable ? "Play now" : props.isBuy ? "Buy now" : "Install"

  return (
    <GridItem
      boxShadow={"lg"}
      borderRadius={16}
      backgroundImage={props.bgi}
      backgroundSize={props.bgs}
      backgroundPosition={props.bgp}
      p={props.p}
      rowSpan={props.rowSpan || 'auto'}
      colSpan={props.colSpan}
    >
      <Flex flexDirection={"column"} h={"100%"} justifyContent="space-between">
        {props.title && props.description && (
          <Flex flexDir={"column"}>
            <Text fontSize={fontSize} fontWeight={"bold"}>
              {props.title}
            </Text>
            <Text fontSize={14} color={"whiteAlpha.700"} maxW={350}>
              {props.description}
            </Text>
          </Flex>
        )}

    <ButtonC title={buttonTitle} 
          isPlayable={props.isPlayable}
          isBuy={props.isBuy} />
      </Flex>
    </GridItem>
  );
};

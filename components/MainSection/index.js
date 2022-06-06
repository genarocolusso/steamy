import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Avatar,
  AvatarGroup,
  Image,
} from "@chakra-ui/react";
import { GameGridItem } from "./GameGridItem";
import { HoursPlayedItem } from "./HoursPlayedItem";
import {ButtonC} from "../../components"
const MainSection = () => {
  return (
    <Grid
      h="100%"
      w="100%"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
    >
      <GameGridItem
        rowSpan={5}
        colSpan={8}
        bgi={"url('/images/eldenring.webp')"}
        bgs={"cover"}
        bgp={"bottom"}
        bradius={16}
        mainGrid
        p={6}
        title={"Elden Ring"}
        description={
          "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between."
        }
        isPlayable  
      />

      <GridItem rowSpan={2} colSpan={4} bg="purple.400" borderRadius={16} />
      <GameGridItem
        rowSpan={3}
        colSpan={4}
        title={"Hollow Knight"}
        description={
          "As the enigmatic Knight, you’ll traverse the depths, unravel its mysteries and conquer its evils."
        } 
        bgi={"url('/images/hollowknight.webp')"}
        bgs={"cover"}
        bgp={"center"}
        p={6}
      />
      <GridItem rowSpan={4} colSpan={4} bg="gray.700" p={6} borderRadius={16}>
        <Text fontSize={"larger"}> Recommended to you</Text>
        <Flex h={" 100%"} gap={6} >
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bNW-Zu1GVXUUrovIzrl-bwJTNVAopFi83A&usqp=CAU"
            }
            borderRadius={16}
            maxH={"80%"}
            alt={"Bisiege game"}
          />

          <Flex  flexDir={"column"} gap={2}>
              <Box>
            <Text color={"whiteAlpha.700"}>Your friends liked this</Text>
            <AvatarGroup size="sm" max={3}>
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Garry MErry"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            </Box>
            <Box>
            <Text color={"whiteAlpha.700"}>Your friends want this</Text>
            <AvatarGroup size="sm" max={3}>
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar
                bg={"gray"}
                borderRadius={18}
                border={"2px solid #353646"}
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />

              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            </Box>
          <ButtonC title={"Buy now"} 
          isPlayable={false}
          isBuy={true} />

          </Flex>

        </Flex>
      </GridItem>

      <HoursPlayedItem />
    </Grid>
  );
};

export default MainSection;

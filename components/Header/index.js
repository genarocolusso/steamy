import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  HStack,
  Icon,
  Avatar,
  AvatarBadge,
  Box,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function Header() {
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    setAvatar(faker.image.avatar());
    setName(faker.name.findName());
  }, []);

  return (
    <Flex justifyContent={"space-between"} w={"100%"}>
      <Flex as="Text" alignItems={"center"} fontSize={"2xl"}>
        <Image
          src={"/images/steamy.svg"}
          width="40"
          height="40"
          alt="steamy icon"
        />
        Steam
        <Text as="span" fontWeight={"bold"} color={"purple.600"}>
          y
        </Text>
      </Flex>

      <HStack alignItems={"center"} gap={2}>
        {name && <Text>Welcome, {name}</Text>}

        {avatar && (
          <Avatar src={avatar} size={"sm"}>
            <AvatarBadge
              border={"0px solid"}
              borderColor="whiteAlpha.600"
              boxSize="0.8em"
              bg="green.300"
            />
          </Avatar>
        )}
      </HStack>
    </Flex>
  );
}

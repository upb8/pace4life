import {
  Container,
  Heading,
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Stack,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link as Anchor,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Pace4Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="6xl">
        <Heading>Blog</Heading>
      </Container>
    </>
  );
}

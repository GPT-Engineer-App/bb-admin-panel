import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, Icon, Divider } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaExchangeAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="250px" bg="brand.900" p={6} color="white">
        <Heading size="md" mb={8}>
          Painel de Administração
        </Heading>
        <Stack spacing={6}>
          <Button leftIcon={<Icon as={FaHome} />} variant="ghost" justifyContent="flex-start" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
            Início
          </Button>
          <Button leftIcon={<Icon as={FaChartBar} />} variant="ghost" justifyContent="flex-start" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
            Relatórios
          </Button>
          <Button leftIcon={<Icon as={FaExchangeAlt} />} variant="ghost" justifyContent="flex-start" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
            Transações
          </Button>
          <Button leftIcon={<Icon as={FaCog} />} variant="ghost" justifyContent="flex-start" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
            Configurações
          </Button>
        </Stack>
        <Divider my={8} borderColor="whiteAlpha.400" />
        <Button leftIcon={<Icon as={FaSignOutAlt} />} variant="ghost" justifyContent="flex-start" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
          Sair
        </Button>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={8}>
        <Flex justify="space-between" align="center" mb={8}>
          <Flex align="center">
            <Image src="https://www.unilab.edu.br/wp-content/uploads/2013/02/Banco-do-Brasil-logo.jpg" alt="Banco do Brasil Logo" h="50px" mr={4} />
            <Heading size="lg">Bem-vindo ao Painel de Administração</Heading>
          </Flex>
          <Flex>
            <Button variant="ghost" mr={4}>
              Perfil
            </Button>
            <Button variant="ghost">Notificações</Button>
          </Flex>
        </Flex>
        <Flex mb={8}>
          <Box flex={1} bg="white" borderRadius="md" boxShadow="md" p={6} mr={4}>
            <Heading size="md" mb={4}>
              Saldo Atual
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              R$ 10.500,00
            </Text>
          </Box>
          <Box flex={1} bg="white" borderRadius="md" boxShadow="md" p={6}>
            <Heading size="md" mb={4}>
              Últimas Transações
            </Heading>
            <Text>Depósito: R$ 1.000,00</Text>
            <Text>Pagamento: R$ 500,00</Text>
          </Box>
        </Flex>
        <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
          <Heading size="md" mb={4}>
            Atividades Recentes
          </Heading>
          {}
        </Box>
        <Flex align="center" mb={8}>
          <Image src="https://www.unilab.edu.br/wp-content/uploads/2013/02/Banco-do-Brasil-logo.jpg" alt="Banco do Brasil Logo" h="50px" mr={4} />
          <Heading size="lg">Bem-vindo ao Painel de Administração</Heading>
        </Flex>
        <Text fontSize="xl" mb={8}>
          Gerencie suas finanças, visualize relatórios e muito mais.
        </Text>
        <Flex>
          <Box bg="brand.800" borderRadius="md" boxShadow="md" p={6} mr={8}>
            <Heading size="md" mb={4}>
              Saldo Atual
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              R$ 10.500,00
            </Text>
          </Box>
          <Box bg="brand.800" borderRadius="md" boxShadow="md" p={6}>
            <Heading size="md" mb={4}>
              Últimas Transações
            </Heading>
            <Text>Depósito: R$ 1.000,00</Text>
            <Text>Pagamento: R$ 500,00</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;

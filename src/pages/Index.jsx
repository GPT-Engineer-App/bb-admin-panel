import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, Icon, Divider } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaExchangeAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="250px" bg="blue.900" p={6} color="white">
        <Heading size="md" mb={8}>
          Painel de Administração
        </Heading>
        <Stack spacing={6}>
          <Button leftIcon={<Icon as={FaHome} />} variant="ghost" justifyContent="flex-start">
            Início
          </Button>
          <Button leftIcon={<Icon as={FaChartBar} />} variant="ghost" justifyContent="flex-start">
            Relatórios
          </Button>
          <Button leftIcon={<Icon as={FaExchangeAlt} />} variant="ghost" justifyContent="flex-start">
            Transações
          </Button>
          <Button leftIcon={<Icon as={FaCog} />} variant="ghost" justifyContent="flex-start">
            Configurações
          </Button>
        </Stack>
        <Divider my={8} borderColor="whiteAlpha.400" />
        <Button leftIcon={<Icon as={FaSignOutAlt} />} variant="ghost" justifyContent="flex-start">
          Sair
        </Button>
      </Box>

      {/* Main Content */}
      <Box flex={1} p={8}>
        <Flex align="center" mb={8}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5jbyUyMGRvJTIwYnJhc2lsJTIwbG9nb3xlbnwwfHx8fDE3MTI2MTQwODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" h="50px" mr={4} />
          <Heading size="lg">Bem-vindo ao Painel de Administração</Heading>
        </Flex>
        <Text fontSize="xl" mb={8}>
          Gerencie suas finanças, visualize relatórios e muito mais.
        </Text>
        <Flex>
          <Box bg="white" borderRadius="md" boxShadow="md" p={6} mr={8}>
            <Heading size="md" mb={4}>
              Saldo Atual
            </Heading>
            <Text fontSize="2xl" fontWeight="bold">
              R$ 10.500,00
            </Text>
          </Box>
          <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
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

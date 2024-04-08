import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, Icon, Divider } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaExchangeAlt, FaCog, FaSignOutAlt, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="250px" bg="brand.900" p={6} color="white">
        <Heading size="md" mb={8}>
          Painel de Administração
        </Heading>
        <Stack spacing={6}>
          <Link to="/">
            <Button leftIcon={<Icon as={FaHome} />} variant="ghost" justifyContent="flex-start" color="white" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
              Início
            </Button>
          </Link>
          <Link to="/reports">
            <Button leftIcon={<Icon as={FaChartBar} />} variant="ghost" justifyContent="flex-start" color="white" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
              Relatórios
            </Button>
          </Link>
          <Link to="/transactions">
            <Button leftIcon={<Icon as={FaExchangeAlt} />} variant="ghost" justifyContent="flex-start" color="white" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
              Transações
            </Button>
          </Link>
          <Link to="/settings">
            <Button leftIcon={<Icon as={FaCog} />} variant="ghost" justifyContent="flex-start" color="white" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
              Configurações
            </Button>
          </Link>
        </Stack>
        <Divider my={8} borderColor="whiteAlpha.400" />
        <Button leftIcon={<Icon as={FaSignOutAlt} />} variant="ghost" justifyContent="flex-start" color="white" _hover={{ bg: "brand.800" }} _active={{ bg: "brand.900" }}>
          Sair
        </Button>
      </Box>

      <Box flex={1} p={8} overflowY="scroll">
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
        <Box bg="white" borderRadius="md" boxShadow="md" p={6} mb={8}>
          <Heading size="md" mb={4}>
            Dashboard
          </Heading>
          {}
          <Flex>
            <Box flex={1} bg="brand.700" borderRadius="md" p={4} mr={4}>
              <Heading size="sm" mb={2} color="white">
                Receita Total
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="white">
                R$ 10.500
              </Text>
            </Box>
            <Box flex={1} bg="brand.700" borderRadius="md" p={4}>
              <Heading size="sm" mb={2} color="white">
                Novos Usuários
              </Heading>
              <Text fontSize="xl" fontWeight="bold" color="white">
                150
              </Text>
            </Box>
          </Flex>
        </Box>

        <Heading size="lg" mb={4}>
          Atividades Recentes
        </Heading>
        <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
          {}
          <Box borderBottomWidth={1} borderBottomColor="gray.200" py={4}>
            <Flex align="center">
              <Icon as={FaCheck} color="green.500" mr={2} />
              <Text>Atividade 1</Text>
            </Flex>
          </Box>
          <Box borderBottomWidth={1} borderBottomColor="gray.200" py={4}>
            <Flex align="center">
              <Icon as={FaCheck} color="green.500" mr={2} />
              <Text>Atividade 2</Text>
            </Flex>
          </Box>
          <Box py={4}>
            <Flex align="center">
              <Icon as={FaCheck} color="green.500" mr={2} />
              <Text>Atividade 3</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;

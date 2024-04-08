import React from "react";
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Reports = () => {
  return (
    <Box>
      <Heading mb={8}>Relatórios</Heading>
      <Tabs>
        <TabList>
          <Tab>Vendas</Tab>
          <Tab>Usuários</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading size="md" mb={4}>
              Relatório de Vendas
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Produto</Th>
                  <Th isNumeric>Valor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>2023-04-01</Td>
                  <Td>Produto A</Td>
                  <Td isNumeric>R$ 100,00</Td>
                </Tr>
                <Tr>
                  <Td>2023-04-02</Td>
                  <Td>Produto B</Td>
                  <Td isNumeric>R$ 200,00</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Heading size="md" mb={4}>
              Relatório de Usuários
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>Email</Th>
                  <Th>Data de Cadastro</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>João</Td>
                  <Td>joao@example.com</Td>
                  <Td>2023-04-01</Td>
                </Tr>
                <Tr>
                  <Td>Maria</Td>
                  <Td>maria@example.com</Td>
                  <Td>2023-04-02</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Reports;

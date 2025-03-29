import { Box, Text, Title, Grid, Flex, Button, Modal } from "@mantine/core";
import { IconCurrencyNaira } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import Activity from "./Activity";
import ExpenseChart from "./ExpenseChart";
import AddExpense from "./AddExpense";
const Home = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
     <Modal
        opened={opened}
        onClose={close}
        title="New Expense"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <AddExpense/>
      </Modal>
      <Box p={"md"}>
        <Title order={1} pb={"lg"}>
          Good afternoon Ryan
        </Title>
        <Grid>
          <Grid.Col span={6}>
            <Button
              variant="default"
              onClick={open}
                size="lg"
              style={{
                borderRadius: "30px",
              }}
            >
              Add Expense
            </Button>
          </Grid.Col>
          <Grid.Col span={6}>
            <Button
            size="lg"
              style={{
                borderRadius: "30px",
                backgroundColor: "grey",
              }}
            >
              Generate Report
            </Button>
          </Grid.Col>
        </Grid>
        <Title order={3} pb={"md"}>
          Recent activity
        </Title>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Title order={3} pt={"md"} pb={"md"}>
          Expenses at a glance
        </Title>
        <Box
          style={{
            borderRadius: "10px",
            border: "1px solid #00000059",
            padding: "20px",
          }}
        >
          <Grid gutter={'10px'}>
            <Grid.Col span={12}>
              <Text>Monthly Expenses</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex>
                <IconCurrencyNaira size={'37px'} />
                <Title order={2}>205,000</Title>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Title style={{color:'#9bb4c8'}} order={5}>This Month</Title>
            </Grid.Col>
          </Grid>
        </Box>
        <ExpenseChart/>
      </Box>
    </>
  );
};

export default Home;

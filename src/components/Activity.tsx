import {
  IconShoppingCart,
  IconChevronRight,
  IconCurrencyNaira,
} from "@tabler/icons-react";
import { Grid, Text, Flex, Box, Center } from "@mantine/core";
const Activity = () => {
  return (
    <>
      <Grid>
        <Grid.Col span={2}>
          <Box
            style={{
              backgroundColor: "#e6f0f8",
              borderRadius: "10px",
              padding: "12px",
            }}
          >
            <Center>
              <IconShoppingCart stroke={2} />
            </Center>
          </Box>
        </Grid.Col>
        <Grid.Col span={8}>
          <Center>
            <Grid gutter={"0"}>
              <Grid.Col span={12}>Meal with Team</Grid.Col>
              <Flex>
                <IconCurrencyNaira color="#9bb4c8" />
                <Text style={{ color: "#9bb4c8" }}>2500</Text>
              </Flex>
            </Grid>
          </Center>
        </Grid.Col>
        <Grid.Col span={1}>
          <IconChevronRight size={"48px"} stroke={1} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Activity;

import {Button, Box } from "@mantine/core";
import "../index.css";
const AddExpense = () => {
  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", gap:'25px'}} action="">
        <Box>
          <label>Name</label>
          <input className="modalInput" placeholder="Name" />
        </Box>
        <Box>
          <label>Amount</label>
          <input className="modalInput" placeholder="Enter amount" />
        </Box>
        <Box>
          <label>Category</label>
          <input className="modalInput" placeholder="Category" />
        </Box>
        <Box>
          <label>Date</label>
          <input type="select" className="modalInput" placeholder="Enter date" />
        </Box>

        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              position: "absolute",
              bottom: "10px",
              width: "85%",
              height: "45px",
              borderRadius: "13px",
            }}
            type="submit"
          >
            Add Expense
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddExpense;

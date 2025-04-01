import { TextInput, Button, Box } from "@mantine/core";
const AddExpense = () => {
  return (
    <>
      <form action="">
        <TextInput
          label="Name"
          placeholder="Name"
        />
        <TextInput label="Amount" placeholder="Enter amount" />
        <TextInput label="Category" placeholder="Enter category" />
        <TextInput label="Date" placeholder="Enter date"  />
        <Box style={{display:'flex', justifyContent:'center'}}>
            <Button style={{position:'absolute',bottom:'10px', width:'75%', height:'45px', borderRadius:'13px'}} type="submit">Add Expense</Button>
        </Box>
      </form>
    </>
  );
};

export default AddExpense;

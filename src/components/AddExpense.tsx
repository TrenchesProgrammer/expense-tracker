import{TextInput, Button} from "@mantine/core";
const AddExpense = () => {
    return ( 
        <>
            <form action="">
                <TextInput label="Expense Name" placeholder="Enter expense name" required/>
                <TextInput label="Amount" placeholder="Enter amount" required/>
                <TextInput label="Date" placeholder="Enter date" required/>
                <TextInput label="Category" placeholder="Enter category" required/>
                <Button type="submit">Add Expense</Button>
            </form>
        </>
     );
}
 
export default AddExpense;
# Script Success and Failure
For a Bitcoin transaction to be considered valid, the combined script (comprising the unlocking script from the transaction input and the locking script from the referenced output) must run without errors and leave a "true" value on the top of the stack.

### What is "true"?
In bitcoin script, a value is deemed "true" if:
- It is not zero.
- It is not an empty string.

### What is "false"?
Conversely, a value is regarded as "false" if:
- It is zero.
- It is an empty string.

## Script failures
There are multiple reasons a script might fail:
- If a disabled opcode is encountered during execution.
- If the final result left on the stack is "false".
- If the script attempts to pop more items than are present on the stack.
- If the script leaves more than one value on the stack post-execution, and the top value is not "true".

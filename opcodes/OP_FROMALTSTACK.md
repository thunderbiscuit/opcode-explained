# OP_FROMALTSTACK
:::info
**Opcode number:** 108  
**Byte representation:** `0x6c`  
**Short description:** Moves the top item from the alternate stack to the main stack.
:::

`OP_FROMALTSTACK` is used for transferring data between the alternate stack and the main stack.

:::warning
This page is not well developed. If you think you can contribute to this page, please consider helping us out by [opening a pull request on the repo](https://github.com/thunderbiscuit/opcode-explained)!
:::

### Operation
1. Pop the top item from the alternate stack.
2. Push this item onto the main stack.

The alternate stack serves as a secondary storage space during script execution, separate from the main stack. This opcode enables the movement of data from this auxiliary stack back to the main stack.

### Use Cases
- **Retrieving Data:** Scripts can use `OP_FROMALTSTACK` to retrieve data previously stored on the alternate stack, allowing for more intricate scripting logic.
- **Script Organization:** By using both the main and alternate stacks, scripts can maintain cleaner and more organized operations, especially in complex scripts.

### Notes
- The alternate stack is an essential tool for complex script logic, enabling temporary storage and retrieval of data.
- `OP_FROMALTSTACK` is commonly used in conjunction with [`OP_TOALTSTACK`](./OP_TOALTSTACK.md) for effective data manipulation between the two stacks.

## Examples
### Example 1
A script that stores a value temporarily and retrieves it later:
```shell
# ASM script
OP_1 OP_TOALTSTACK ... OP_FROMALTSTACK

# Raw script
516b ... 6c

# Main stack (start)
1

# Main stack (intermediate)
(empty)

# Alternate stack (intermediate)
1

# Alternate stack (final)
(empty)

# Main stack (final)
1
```

### Example 2
A multi-step script that uses the alternate stack for intermediate calculations:
```shell
# ASM script
<value> OP_TOALTSTACK <operations> OP_FROMALTSTACK <further operations>
```

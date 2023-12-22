# OP_TOALTSTACK
:::info
**Opcode number:** 107  
**Byte representation:** `0x6b`  
**Short description:** Move the top item from the main stack to the alternate stack.
:::

[`OP_TOALTSTACK`](./OP_TOALTSTACK.md) is used to manipulate stack items between the main stack and an alternate stack.

:::warning
This page is not well developed. If you think you can contribute to this page, please consider helping us out by [opening a pull request on the repo](https://github.com/thunderbiscuit/opcode-explained)!
:::

### Operation
1. Pop the top item from the main stack.
2. Push this item onto the alternate stack.

The [alternate stack](#) is a secondary stack that scripts can use to store data temporarily. It operates independently of the main stack, allowing for more complex script operations.

### Use Cases
- **Temporary Storage:** Scripts can use [`OP_TOALTSTACK`](./OP_TOALTSTACK.md) to temporarily store data that might be needed later in the script execution. This helps in organizing data and maintaining a clear main stack.
- **Complex Script Logic:** In scripts that require intricate logic and multiple steps, [`OP_TOALTSTACK`](./OP_TOALTSTACK.md) allows for better management of stack items and cleaner script execution.


### Notes
- The alternate stack is not visible in script execution unless accessed explicitly.
- [`OP_TOALTSTACK`](./OP_TOALTSTACK.md) is often used in conjunction with [`OP_FROMALTSTACK`](./OP_FROMALTSTACK.md) to move items back to the main stack when needed.

## Examples
### Example 1
A script that requires temporarily setting aside a value:
```shell
# ASM script
OP_1 OP_TOALTSTACK

# Raw script
516b

# Main stack
(empty)

# Alternate stack
1
```

### Example 2
A multi-step verification script where intermediate values are stored:
```shell
# ASM script
<value> OP_TOALTSTACK <other operations> <value retrieval from alternate stack>
```

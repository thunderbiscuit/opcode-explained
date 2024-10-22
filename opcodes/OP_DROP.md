# OP_DROP

:::info
**Opcode number:** 117  
**Byte representation:** `0x75`  
**Short description:** Remove the top item from the stack.
:::

`OP_DROP` is used to remove the top item from the stack, effectively discarding it. This opcode is useful when you no longer need the top item and want to proceed with other operations on the remaining stack items.

### Operation

1. Remove (drop) the top item from the stack.
2. The stack is now one item smaller, with the second item becoming the new top item.

### Notes

- `OP_DROP` is often used to clean up intermediate values that are no longer needed in a script.
- If the stack is empty when `OP_DROP` is executed, the script will fail.

### Example 1

```shell
# ASM script
OP_2 OP_PUSHBYTES_8 a4b5c6d7e8f90a1b OP_DROP

# Raw script
52 08 a4b5c6d7e8f90a1b 75

# Stack (before OP_DROP)
a4b5c6d7e8f90a1b
2

# Stack (after OP_DROP)
2
```

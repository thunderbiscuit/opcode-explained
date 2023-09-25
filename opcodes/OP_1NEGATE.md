# OP_1NEGATE
:::info
**Opcode number:** 79  
**Byte representation:** `0x4f`  
**Short Description:** Push the number -1 onto the stack.  
:::

The `OP_1NEGATE` opcode will push `0xff` (255 in decimal, representing -1 in the context of script execution) onto the stack. This opcode utilizes the [minimally encoded integers format](../overview/numbers.md#minimally-encoded-integers).

## Examples
### Example 1
```shell
# ASM script
OP_1NEGATE OP_1NEGATE

# Raw script
4f4f

# Final stack
-1
-1
```

### Example 2
```shell
# ASM script
OP_8 OP_1NEGATE OP_ADD

# Raw script
584f93

# Final stack
7
```

In the first example, we have a script with two `OP_1NEGATE` opcodes. After execution, we have two -1s on the stack. In the second example, we add another opcode, `OP_ADD`, to the script. The `OP_ADD` opcode will remove the two top items from the stack, add them together, and then push the result back onto the stack. 8 + (-1) results in 7, which is then pushed onto the stack.

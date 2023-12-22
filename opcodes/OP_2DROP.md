# OP_2DROP
:::info
**Opcode number:** 109  
**Byte representation:** `0x6d`  
**Short description:** Drop the top two items from the stack.
:::

[`OP_2DROP`](./OP_2DROP.md) is used to discard the top two items from the stack.

### Operation
1. Pop the top item from the stack.
2. Pop the next item from the stack.

### Use Cases
- **Discarding Temporary Data:** In scripts where temporary values are pushed onto the stack for interim calculations, [`OP_2DROP`](./OP_2DROP.md) can be used to remove them once they are no longer needed.

### Notes
- This opcode is part of a family of opcodes ([`OP_DROP`](#), [`OP_2DROP`](./OP_2DROP.md), [`OP_2DUP`](#), [`OP_3DUP`](#), and a few others) designed for stack item management.

## Examples
### Example 1
Removing temporary values after use:
```shell
# ASM script
OP_1 OP_2 OP_2DROP

# Raw script
51526d

# Stack (before OP_2DROP)
2 1

# Stack (after OP_2DROP)
(empty)
```

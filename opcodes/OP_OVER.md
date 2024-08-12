# OP_OVER
:::info
**Opcode number:** 120  
**Byte representation:** `0x78`  
**Short description:** Duplicates the second item from the top of the stack.
:::

[`OP_OVER`](./OP_OVER.md) is used to duplicate the second item from the stack (i.e., the value one over from the top).

### Operation
1. Duplicate the item one over from the top of the stack, i.e., the second stack item.
2. Push this duplicate onto the stack.


### Notes
- This opcode is part of a family of opcodes ([`OP_OVER`](#), [`OP_2OVER`](./OP_2OVER.md), [`OP_DUP`](#), and a few others) designed for duplication of stack items.
- If there are fewer than two items on the stack when [`OP_OVER`](./OP_2DUP.md) is executed, the script will fail.

## Examples
### Example 1
Duplicating the stack item one over from the top (i.e., the second stack item) with two total items:
```shell
# ASM script
OP_1 OP_2 OP_OVER

# Raw script
515278

# Stack (before OP_OVER)
2
1

# Stack (after OP_OVER)
1
2
1
```
### Example 2
Duplicating the stack item one over from the top (i.e., the second stack item) with four total items:
```shell
# ASM script
OP_1 OP_2 OP_3 OP_4 OP_OVER

# Raw script
5152535478

# Stack (before OP_OVER)
4
3
2
1

# Stack (after OP_OVER)
3
4
3
2
1
```
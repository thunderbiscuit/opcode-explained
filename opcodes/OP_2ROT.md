# OP_2ROT

:::info
**Opcode number:** 113  
**Byte representation:** `0x71`  
**Short description:** Rotates the fifth and sixth items from the top of the stack to the top.
:::

`OP_2ROT` is used to bring the fifth and sixth stack items to the top of the stack, leaving the other items in place.

### Operation

1. Remove the fifth and sixth items from the top of the stack.
2. Place them on top of the stack, with the fifth item being the new top item and the sixth item below it.

### Notes

- This opcode is part of a family of rotation opcodes designed for stack reordering.
- If there are fewer than six items on the stack when [`OP_2ROT`](./OP_2ROT.md) is executed, the script will fail.

## Examples

### Example 1

Rotating stack items five and six to the top with six total items:

```shell
# ASM script
OP_1 OP_2 OP_3 OP_4 OP_5 OP_6 OP_2ROT

# Raw script
51525354555671

# Stack (before OP_2ROT)
6
5
4
3
2
1

# Stack (after OP_2ROT)
2
1
6
5
4
3
```

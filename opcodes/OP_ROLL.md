# OP_ROLL

:::info
**Opcode number:** 122  
**Byte representation:** `0x7a`  
**Short description:** Move the stack item at position n to the top of the stack.
:::

[`OP_ROLL`](./OP_ROLL.md) is used to select a stack item and move it to the top.

### Notes

- If there are fewer than two items on the stack, if n is negative, or if n is larger than the stack when [`OP_ROLL`](./OP_ROLL.md) is executed, the script will fail.
- The stack item just before OP_ROLL dictates 'n', the location of the item to be moved.
- Counting begins at 0, not 1; so an n value of 2 would reach the third stack item (0 is first, 1 is second, 2 is third, and so on).

## Examples

### Example 1

Moving the nth stack item when n==2 with five total items (i.e., the third item from the top moves to the top):

```shell
# ASM script
OP_1 OP_2 OP_3 OP_4 OP_5 OP_2 OP_ROLL

# Raw script
5152535455527a

# Stack (before OP_ROLL)
2
5
4
3
2
1

# Stack (after OP_ROLL)
3
5
4
2
1
```

### Example 2

Moving the nth stack item when n==3 with four total items (i.e., the fourth item from the top moves to the top):

```shell
# ASM script
OP_7 OP_8 OP_9 OP_10 OP_3 OP_ROLL

# Raw script
5758595a537a

# Stack (before OP_ROLL)
3
10
9
8
7

# Stack (after OP_ROLL)
7
10
9
8
```

# OP_PICK

:::info
**Opcode number:** 121  
**Byte representation:** `0x79`  
**Short description:** Copy an item from the stack at a specified depth and push it to the top.  
:::

[`OP_PICK`](./OP_PICK.md) is used to select a stack item and copy it to the top.

### Notes

- If there are fewer than two items on the stack, if n is negative, or if n is larger than the stack when [`OP_PICK`](./OP_PICK.md) is executed, the script will fail.
- The stack item just before OP_PICK dictates 'n', the location of the item to be copied.
- Counting begins at 0, not 1; so an n value of 2 would reach the third stack item (0 is first, 1 is second, 2 is third, and so on).


## Examples

### Example 1
Copying the nth stack item when n==2 with five total items (i.e., the third item from the top copies to the top):

```shell
# ASM script
OP_1 OP_2 OP_3 OP_4 OP_5 OP_2 OP_PICK

# Raw script
5152535455527b

# Stack (before OP_PICK)
2
5
4
3
2
1

# Stack (after OP_PICK)
3
5
4
3
2
1
```

### Example 2

Copying the nth stack item when n==3 with four total items (i.e., the fourth item from the top copies to the top):

```shell
# ASM script
OP_7 OP_8 OP_9 OP_10 OP_3 OP_PICK

# Raw script
5758595a537b

# Stack (before OP_PICK)
3
10
9
8
7

# Stack (after OP_PICK)
7
10
9
8
7
```

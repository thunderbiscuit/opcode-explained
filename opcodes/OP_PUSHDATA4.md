# OP_PUSHDATA4
:::info
**Opcode number:** 78  
**Byte representation:** `0x4e`  
**Short description:** Read the next 4 bytes as `N`. Push the next `N` bytes as an array onto the stack.
:::

The [`OP_PUSHDATA4`](./OP_PUSHDATA4.md) opcode will read the 4 bytes that follow it and interpret them as an integer. It will then push the next number of bytes this integer specifies onto the stack. Because it reads 4 bytes and inteprets them as a number, this opcode can push any number of bytes from 0 to 4,294,967,295. Since the largest data push allowed by consensus rules is 520 bytes for which it is more efficient (and required by standardness rules) to use [`OP_PUSHDATA2`](./OP_PUSHDATA2.md), this opcode is never used in practice (see [minimal push operations](../script/push.md#minimal-push-operations)).

[`OP_PUSHDATA4`](./OP_PUSHDATA4.md) is part of a group of 3 opcodes that push a custom, user-specified number of bytes onto the stack (its sibling opcodes are [OP_PUSHDATA1](./OP_PUSHDATA1.md) and [OP_PUSHDATA2](./OP_PUSHDATA2.md)).

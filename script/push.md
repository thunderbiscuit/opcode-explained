# Push Operators

## Minimal push operations

Bitcoin's scripting language has several operators for pushing data onto the stack. When there are multiple options for how to push the same byte array, the commonly used standardness rules require that the smallest possible encoding be used:

* Pushing an empty byte array must use [`OP_0`](../opcodes/OP_0.md).
* Pushing a byte between `0x01` and `0x10` must use [`OP_1`](../opcodes/OP_1.md) to [`OP_16`](../opcodes/OP_16.md).
* Pushing the byte `0x81` must use [`OP_1NEGATE`](../opcodes/OP_1NEGATE.md).
* Pushing any other byte array up to 75 bytes must use the corresponding `OP_PUSHBYTES` opcode.
* Pushing 76 to 255 bytes must use [`OP_PUSHDATA1`](../opcodes/OP_PUSHDATA1.md).
* Pushing 256 to 65535 bytes must use [`OP_PUSHDATA2`](../opcodes/OP_PUSHDATA2.md).
* Pushing 65536 bytes or more must use [`OP_PUSHDATA4`](../opcodes/OP_PUSHDATA4.md).

Note that the largest push allowed by consensus rules is 520 bytes, which means [`OP_PUSHDATA4`](../opcodes/OP_PUSHDATA4.md) is never used in practice.

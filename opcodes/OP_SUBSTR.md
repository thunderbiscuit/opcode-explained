# OP_SUBSTR
:::info
**Opcode number:** 127  
**Byte representation:** `0x7f`  
**Short description:** Fail the script unconditionally, does not even need to be executed.
:::

[`OP_SUBSTR`](./OP_SUBSTR.md) is a disabled opcode in the Bitcoin scripting system.

### Historical Context
In the original design of Bitcoin's scripting language, [`OP_SUBSTR`](./OP_SUBSTR.md) was intended to extract a substring from a string. It would pop three items from the stack: the original string, a start position, and a length. It would then push the substring (starting at the given position and with the specified length) back onto the stack.

However, concerns about potential vulnerabilities and the complexity it would introduce to the scripting system led to its deactivation.

### Operation
Because [`OP_SUBSTR`](./OP_SUBSTR.md) is disabled, any script that contains it will cause the transaction to be invalid regardless of context.

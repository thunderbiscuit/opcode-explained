# Notes On Bitcoin Script
## Scripts that succeed, scripts that fail
After all the operations in a script have been executed, the script is considered successful only if the final result left on the stack is "true" (is not zero and is not an empty string). If the final result on the stack is "false" (is a zero or an empty string), then the script fails.

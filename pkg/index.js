import initialize, * as native from "./native/culprit_wasm.js";
/** Initialize the local module once before calling its synchronous pure operations. */
export async function init(input) {
    await initialize(input);
}
/** The exact Core error returned by the shared parser/export owner, without a second message catalogue. */
export class ParserError extends Error {
    error;
    constructor(error) {
        super(error.message);
        this.name = "ParserError";
        this.error = error;
    }
}
function result(encoded) {
    const decoded = JSON.parse(encoded);
    if ("Err" in decoded)
        throw new ParserError(decoded.Err);
    return decoded.Ok;
}
/** Parse only supplied text. An engine hint is checked by the existing strict native-format owner. */
export function parsePlan(input, engine) {
    return result(native.parsePlanJson(input, JSON.stringify(engine ?? null)));
}
/** Compare supplied originals. Optional statistics are explicit; no database is opened or discovered. */
export function diffPlans(a, nameA, b, nameB, context = { statistics: [], taken_at: null }) {
    return result(native.diffPlansJson(JSON.stringify(a), nameA, JSON.stringify(b), nameB, JSON.stringify(context)));
}
/** Parse native deadlock text into the existing Core observations; no source or clock is inferred. */
export function parseDeadlock(input) {
    return result(native.parseDeadlockJson(input));
}
const DEFAULT_EVENT_LIMITS = {
    input_bytes: 8 * 1024 * 1024,
    record_bytes: 256 * 1024,
    field_bytes: 64 * 1024,
    records: 4096,
};
function resolveEventLimits(limits) {
    if (!limits)
        return null;
    return { ...DEFAULT_EVENT_LIMITS, ...limits };
}
/** Decode a binary SQL Server Extended Events (.xel) buffer within explicit or default bounds. XML text is refused on this route. */
export function parseXel(input, limits) {
    return result(native.parseXelJson(input, JSON.stringify(resolveEventLimits(limits))));
}
/** Decode exported SQL Server Extended Events XML (`<events>`, `<RingBufferTarget>`, or `<event>`) within bounds. Binary .xel is refused. */
export function parseExtendedEventsXml(input, limits) {
    const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
    return result(native.parseExtendedEventsXmlJson(bytes, JSON.stringify(resolveEventLimits(limits))));
}
/** Keep the existing Markdown/HTML/native redaction and file-naming policy. */
export function exportPlan(plan, title, format, options) {
    const exportedAt = `${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC`;
    return result(native.exportPlanJson(JSON.stringify(plan), title, JSON.stringify(format), JSON.stringify(options), exportedAt));
}

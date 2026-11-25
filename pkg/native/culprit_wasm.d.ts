/* tslint:disable */
/* eslint-disable */

export function diffPlansJson(a_json: string, name_a: string, b_json: string, name_b: string, context_json: string): string;

export function exportPlanJson(plan_json: string, title: string, format_json: string, options_json: string, exported_at: string): string;

export function parseDeadlockJson(input: string): string;

/**
 * Decode exported SQL Server Extended Events XML (`<events>`, `<RingBufferTarget>`, or `<event>`) within bounds.
 * Binary .xel files are refused on this route.
 */
export function parseExtendedEventsXmlJson(input: Uint8Array, limits_json: string): string;

/**
 * The optional supplied engine selects the existing strict native parser; it is not source authority.
 */
export function parsePlanJson(input: string, engine_json: string): string;

/**
 * Decode a binary SQL Server Extended Events (.xel) buffer within explicit or default bounds.
 * XML text is refused on this route so binary session-clock framing stays distinct from XML exports.
 */
export function parseXelJson(input: Uint8Array, limits_json: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly diffPlansJson: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
    readonly exportPlanJson: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
    readonly parseDeadlockJson: (a: number, b: number, c: number) => void;
    readonly parseExtendedEventsXmlJson: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly parsePlanJson: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly parseXelJson: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
